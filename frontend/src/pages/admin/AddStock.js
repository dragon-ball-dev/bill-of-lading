
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addStock, getAllCategory, getAllEmployees, getAllProduct, getAllStore, getAllSupply } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const AddStock = (props) => {
    const [tableData3, setTableData3] = useState([]);

    const [productData, setProductData] = useState({
        name: '',
        userId: ''
    });

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        getAllEmployees(1, 100)
          .then(response => {
            setTableData3(response.content);
          })
          .catch(error => {
            toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
          });
      };



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

        addStock(productData)
        .then((response) => {
            console.log(response.data);
            toast.success('Thêm kho hàng thành công');
            setProductData((prevData) => ({
                ...prevData,
                name: '' ,
                userId: ''
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
                    pathname: '/',
                    state: { from: props.location },
                }}
            />
        );
    }

    const { name, userId } = productData;

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
                            <h5 className="card-title">Thêm kho hàng</h5>
                            <h6 className="card-subtitle text-muted"> Thêm kho hàng của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên kho hàng</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên kho hàng"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Người quản lý kho</label>
                                    <select
                                        className="form-select"
                                        name="userId"
                                        value={userId}
                                        onChange={handleInputChange}
                                    >
                                        <option value={0}>Chọn...</option>
                                        {tableData3.map((item) => (
                                            <option  value={item.id}>{item.name}</option>
                                        ))}
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

export default AddStock;