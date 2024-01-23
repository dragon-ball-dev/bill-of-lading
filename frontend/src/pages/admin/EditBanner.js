import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addBanner, editBannerById, getBannerById } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const EditBanner = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const { authenticated, role, currentUser, location, onLogout } = props;

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'imageUrl') {
            setImageUrl(inputValue);
        } else if (inputName === 'width') {
            setWidth(inputValue);
        } else if (inputName === 'height') {
            setHeight(inputValue);
        }
    };

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        getBannerById(id).then(response => {
            console.log(response.data.name)
            setName(response.data.name);
            setImageUrl(response.data.imageUrl)
            setHeight(response.data.height)
            setWidth(response.data.width)
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const bannerRequest = { name, imageUrl, width, height };
        editBannerById(id,bannerRequest)
        .then((response) => {
            console.log(response.data);
            toast.success('Sửa banner thành công!!');
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
                            <h5 className="card-title">Sửa banner</h5>
                            <h6 className="card-subtitle text-muted"> Sửa banner của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên banner</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên thể loại"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Link ảnh</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="http://tvlpost.com/storage/images/uploads/AI2yhPiclbmlzMYuh7q5ViShGfuJVrjbpRBPZ4nx.jpg"
                                        name="imageUrl"
                                        value={imageUrl}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Chiều rộng</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="430"
                                        name="width"
                                        value={width}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Chiều dài</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="1000"
                                        name="height"
                                        value={height}
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

export default EditBanner;