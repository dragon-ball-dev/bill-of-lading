
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addProvince, addServices, getAllCategory } from '../../services/fetch/ApiUtils';
import Nav from './Nav';
import ProductService from '../../services/axios/ProductService';

const AddServices = (props) => {
    const [tableData, setTableData] = useState([]);

    const [productData, setProductData] = useState({
        serviceDeliver: '',
        serviceScope: '',
        price: '',
        weightUnit: '',
        weightService: '',
        estimatedTime: ''
    });


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

        addServices(productData)
            .then((response) => {
                console.log(response.data);
                toast.success('Thêm dịch vụ thành công!!');
                setProductData((prevData) => ({
                    ...prevData,
                    name: '' 
                }));
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

    const { serviceDeliver,
        serviceScope,
        price,
        weightUnit,
        weightService,
        estimatedTime } = productData;

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
                            <h5 className="card-title">Thêm dịch vụ</h5>
                            <h6 className="card-subtitle text-muted"> Thêm dịch vụ của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Khu vực</label>
                                    <select
                                        className="form-select"
                                        name="serviceScope"
                                        value={serviceScope}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        <option value={"INTERNAL_PROVINCE"}>Nội tỉnh</option>
                                        <option value={"INTERNAL_AREA"}>Nội miền</option>
                                        <option value={"NEAR_AREA"}>Cận miền</option>
                                        <option value={"SOUTH_NORTH"}>Bắc nam</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Giá</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: 100.000 VND"
                                        name="price"
                                        value={price}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ngày giao dự tính</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: 1 day, 2 day, 3 day"
                                        name="estimatedTime"
                                        value={estimatedTime}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Đơn vị</label>
                                    <select
                                        className="form-select"
                                        name="weightUnit"
                                        value={weightUnit}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        <option value={"GRAM"}>Gram</option>
                                        <option value={"KILOGRAM"}>Kilogram</option>
                                        <option value={"TON"}>Tấn</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Khối lượng</label>
                                    <select
                                        className="form-select"
                                        name="weightService"
                                        value={weightService}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        <option value={"FROM0_50GRAM"}>Từ 0 đến 50g</option>
                                        <option value={"FROM50_100GRAM"}>Từ 50 đến 100g</option>
                                        <option value={"FROM100_250GRAM"}>Từ 100 đến 250g</option>
                                        <option value={"FROM250_500GRAM"}>Từ 250g đến 500g</option>
                                        <option value={"FROM500_1000GRAM"}>Từ 500g đến 1000g</option>
                                        <option value={"FROM1000_1500GRAM"}>Từ 1000 đến 1500g</option>
                                        <option value={"FROM1500_2000GRAM"}>Từ 1500g đến 2000g</option>
                                        <option value={"MORE2000GRAM"}>Hơn 2000g</option>
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

export default AddServices;