import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addNew } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const AddNews = (props) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const { authenticated, role, currentUser, location, onLogout } = props;

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'title') {
            setTitle(inputValue);
        } else if (inputName === 'imageUrl') {
            setImageUrl(inputValue);
        } else if (inputName === 'description') {
            setDescription(inputValue);
        } 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRequest = { title, imageUrl, description};

        addNew(newRequest)
            .then((response) => {
                console.log(response.data);
                toast.success('Thêm tin tức thành công!!');
                setTitle('');
                setImageUrl('');
                setDescription('');

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
                            <h5 className="card-title">Thêm tin tức</h5>
                            <h6 className="card-subtitle text-muted"> Thêm tin tức của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tiêu đề tin tức</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tiêu đề tin tức"
                                        name="title"
                                        value={title}
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
                                    <label className="form-label">Nội dung</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nội dung hay quá"
                                        name="description"
                                        value={description}
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

export default AddNews;