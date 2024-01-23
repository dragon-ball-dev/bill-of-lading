
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addOrder, addOrderBillOfLading, addProvince, getAllAccountOfAdmin, getAllCategory, getAllEmployees, getAllProvince } from '../../services/fetch/ApiUtils';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const AddOrderUser = (props) => {
    const [tableData, setTableData] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [tableData3, setTableData3] = useState([]);

    const [productData, setProductData] = useState({
        description: "Hàng dễ vỡ cẩn thận",
        user_id: 2,
        category_id: 1,
        country: "VN",
        receiver_info: "VN",
        receiver_Province_Id: 2,
        sender_Province_Id: 2,
        sender_info: "VN",
        status: "STATUS_PENDING",
        cod: 100000,
        weight: 560,
        serviceDeliver: "SHIPPING_ECONOMICAL"
    });

    useEffect(() => {
        fetchData();
        fetchData2();
        fetchData3();
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

        addOrderBillOfLading(productData)
            .then((response) => {
                console.log(response.data);
                toast.success('Tạo vận đơn thành công!!');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    // if (!authenticated) {
    //     return (
    //         <Navigate
    //             to={{
    //                 pathname: '/',
    //                 state: { from: props.location },
    //             }}
    //         />
    //     );
    // }

    const { description, user_id, category_id, country, receiver_info, receiver_Province_Id, sender_Province_Id, sender_info, status, cod, weight, serviceDeliver } = productData;


    return (
        <>

            <Header authenticated={authenticated} currentUser={currentUser} onLogout={onLogout} />
            <div >
            </div>
            <main id="main">
                <div className="wrapper">
                    <nav id="sidebar" className="sidebar js-sidebar">
                        <div className="sidebar-content js-simplebar">
                            <a className="sidebar-brand" href="index.html">
                                <span className="align-middle"></span>
                            </a>
                            <SidebarNav />
                        </div>
                    </nav>

                    <div className="main">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Tạo vận đơn</h5>
                                <h6 className="card-subtitle text-muted"> Tạo vận đơn của TVL Post.</h6>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="locationId">Khách hàng</label>
                                        <select
                                            className="form-select"
                                            name="user_id"
                                            value={user_id}
                                            onChange={handleInputChange}
                                        >
                                            <option value={0}>Chọn...</option>
                                            {tableData2?.map((item) => {
                                                if (item.roles[0].name === "ROLE_USER") {
                                                    return (
                                                        <option value={item.id}>{item.name}</option>
                                                    )
                                                }
                                            }
                                            )}
                                        </select>
                                    </div>

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
                                            {tableData3?.map((item) => (
                                                <option value={item.id}>{item.name}</option>
                                            ))}
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
                    </div>
                </div>
            </main>
            <Footer />
        </>


    );
};

export default AddOrderUser;