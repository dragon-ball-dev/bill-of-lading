import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addCategory, addProvince, editProvince, getProvinceById } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const EditProvince = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const { authenticated, role, currentUser, location, onLogout } = props;
    const [roleName, setRoleName] = useState(props.roleName);

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'image') {
            // Handle image input if needed
        }
    };

    useEffect(() => {
        fetchData();
      }, []);
    

      const fetchData = () => {
        getProvinceById(id)
          .then(response => {
            console.log(response);
            setName(response.data.name)
          })
          .catch(error => {
            toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
          });
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        const categoryRequest = { name };

        editProvince(id, categoryRequest)
            .then((response) => {
                console.log(response.data);
                toast.success('Sửa tỉnh thành công!!');
                fetchData();
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

    console.log(name);

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
                            <h5 className="card-title">Sửa tỉnh</h5>
                            <h6 className="card-subtitle text-muted"> Sửa tỉnh của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên tỉnh</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên tỉnh"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
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

export default EditProvince;