
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addOrder, addOrderBillOfLading, addProvince, editOrderBillOfLading, getAllAccountOfAdmin, getAllCategory, getAllEmployees, getAllProvince, getAllStock, getOrderById, updateStatusOrderBillOfLading } from '../../services/fetch/ApiUtils';
import Nav from './Nav';
import ProductService from '../../services/axios/ProductService';

const UpdateStatus = (props) => {
    const { id } = useParams();
    const [tableData, setTableData] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [tableData3, setTableData3] = useState([]);

    const [productData, setProductData] = useState({
        stock_id: null,
        order_id: "",
        status: ""
    });

    useEffect(() => {
        fetchData();
        fetchData2();
        fetchData3();
        fetchData4();
    }, []);

    const fetchData = () => {
        getAllStock(0, 100, '').then(response => {
            console.log("STOCK",response);
            setTableData(response.data.content);

        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const fetchData2 = () => {
        getAllAccountOfAdmin(0, 100, '').then(response => {
            console.log(response)
            setTableData2(response.content);

        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const fetchData3 = () => {
        getAllProvince(1, 20, '').then(response => {
            setTableData3(response.data.content);
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const fetchData4 = () => {
        getOrderById(id).then(response => {
            console.log("Get by id", response.data)
            setProductData(response.data)
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }


    const { authenticated, currentUser, role, onLogout } = props;

    const handleFileChange = (event) => {
        setProductData(prevState => ({
            ...prevState,
            files: [...prevState.files, ...event.target.files]
        }));
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateStatus = {order_id: id, stock_id: productData.stock_id,  status : productData.status};

        updateStatusOrderBillOfLading(updateStatus)
            .then((response) => {
                console.log(response.data);
                toast.success('Cập nhật trạng thái vận đơn thành công!!');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    if (!authenticated) {
        return (
            <Navigate
                to={{
                    pathname: '/login-admin',
                    state: { from: props.location },
                }}
            />
        );
    }

    const { stock_id, status } = productData;

    console.log(productData)
    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">TVL Post</span>
                    </a>
                    <SidebarNav role={role} />
                </div>
            </nav>

            <div className="main">
                <Nav onLogout={onLogout} currentUser={currentUser} />

                <main style={{ margin: "20px 20px 20px 20px" }}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Cập nhật vận đơn</h5>
                            <h6 className="card-subtitle text-muted"> Cập nhật vận đơn cho khách hàng của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Kho hàng đến</label>
                                    <select
                                        className="form-select"
                                        name="stock_id"
                                        value={stock_id}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        {tableData?.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trạng thái đơn hàng</label>
                                    <select
                                        className="form-select"
                                        name="status"
                                        value={status}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        <option value={"STATUS_PENDING"}>Đang xử lý</option>
                                        <option value={"STATUS_TO_SHIP"}>Đang vận chuyển</option>
                                        <option value={"STATUS_TO_RECEIVER"}>Đang giao hàng</option>
                                        <option value={"STATUS_COMPLETED"}>Hoàn thành</option>
                                        <option value={"STATUS_CANCELLED"}>Hủy</option>
                                        <option value={"STATUS_REFUND"}>Hoàn trả</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UpdateStatus;