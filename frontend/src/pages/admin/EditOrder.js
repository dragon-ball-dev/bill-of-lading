
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addOrder, addOrderBillOfLading, addProvince, editOrderBillOfLading, getAllAccountOfAdmin, getAllCategory, getAllEmployees, getAllProvince, getOrderById } from '../../services/fetch/ApiUtils';
import Nav from './Nav';
import ProductService from '../../services/axios/ProductService';

const EditOrder = (props) => {
    const { id } = useParams();
    const [tableData, setTableData] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [tableData3, setTableData3] = useState([]);

    const [productData, setProductData] = useState({
        description: "",
        category_id: null,
        country: "",
        receiver_info: "",
        receiver_Province_Id: null,
        sender_Province_Id: null,
        sender_info: "",
        status: "",
        cod: null,
        weight: null,
        serviceDeliver: ""
    });

    useEffect(() => {
        fetchData();
        fetchData2();
        fetchData3();
        fetchData4();
    }, []);

    const fetchData = () => {
        getAllCategory(0, 100, '').then(response => {
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
            console.log("Get by id",response.data)
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

        editOrderBillOfLading(id, productData)
            .then((response) => {
                console.log(response.data);
                toast.success('Cập nhật vận đơn thành công!!');
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

    const { description, user_id, category_id, country, receiver_info, receiver_Province_Id, sender_Province_Id, sender_info, status, cod, weight, serviceDeliver } = productData;

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
                                    <label className="form-label" htmlFor="locationId">Thể loại</label>
                                    <select
                                        className="form-select"
                                        name="category_id"
                                        value={category_id}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        {tableData?.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Thông tin người gửi</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên vận đơn"
                                        name="sender_info"
                                        value={sender_info}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Thông tin người nhận</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên vận đơn"
                                        name="receiver_info"
                                        value={receiver_info}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Quốc gia</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: 100.000 VND"
                                        name="country"
                                        value={country}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Tỉnh người nhận</label>
                                    <select
                                        className="form-select"
                                        name="receiver_Province_Id"
                                        value={receiver_Province_Id}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        {tableData3?.map((item) => {
                                            if (productData.receiver_Province_Id === item.id) {
                                                return (
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            }
                                        }

                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Tỉnh người gửi</label>
                                    <select
                                        className="form-select"
                                        name="sender_Province_Id"
                                        value={sender_Province_Id}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        {tableData3?.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô Tả</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: vận đơn chất lượng"
                                        name="description"
                                        value={description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">COD</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: 10"
                                        name="cod"
                                        value={cod}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Khối lượng</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ex: 10"
                                        name="weight"
                                        value={weight}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Loại giao hàng</label>
                                    <select
                                        className="form-select"
                                        name="serviceDeliver"
                                        value={serviceDeliver}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        <option value={"SHIPPING_ECONOMICAL"}>Giao hàng tiết kiệm </option>
                                        <option value={"SHIPPING_FAST"}>Giao hàng nhanh</option>
                                        <option value={"SHIPPING_EXPRESS"}>Giao hàng hỏa tốc</option>
                                        <option value={"SHIPPING_INTERNAL"}>Giao hàng trong nước</option>
                                        <option value={"SHIPPING_EXTERNAL"}>Giao hàng quốc tế</option>
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

export default EditOrder;