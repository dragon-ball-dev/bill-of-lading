
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addDistrict, addStock, editDistrict, getAllEmployees, getAllProvince, getDistrictById } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const EditDistrict = (props) => {
    const { id } = useParams();
    const [tableData3, setTableData3] = useState([]);

    const [productData, setProductData] = useState({
        name: '',
        provinceId: ''
    });

    useEffect(() => {
        fetchData();
        fetchData2();
      }, []);
    
      const fetchData = () => {
        getAllProvince(0, 10,'')
          .then(response => {
            console.log(response)
            setTableData3(response.data.content);
          })
          .catch(error => {
            toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
          });
      };

      const fetchData2 = () => {
        getDistrictById(id)
          .then(response => {
            console.log(response);
            setProductData(response.data)
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

        editDistrict(id, productData)
        .then((response) => {
            console.log(response.data);
            toast.success('Sửa huyện thành công');
            setProductData((prevData) => ({
                ...prevData,
                name: '' ,
                provinceId: ''
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

    const { name, provinceId } = productData;

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
                            <h5 className="card-title">Sửa huyện</h5>
                            <h6 className="card-subtitle text-muted"> Sửa huyện của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên Huyện</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên huyện"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="locationId">Tỉnh</label>
                                    <select
                                        className="form-select"
                                        name="provinceId"
                                        value={provinceId}
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

export default EditDistrict;