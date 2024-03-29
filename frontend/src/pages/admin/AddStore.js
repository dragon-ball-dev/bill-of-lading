import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarNav from './SidebarNav';
import { addCategory, addStore } from '../../services/fetch/ApiUtils';
import Nav from './Nav';

const AddStore = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const { authenticated, currentUser, onLogout , role} = props;

    const handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'address') {
            setAddress(inputValue);
        } else if (inputName === 'phone') {
            setPhone(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const storeRequest = { name, address, phone, email };

        addStore(storeRequest)
            .then((response) => {
                console.log(response.data);
                toast.success('Thêm chi nhánh thành công!!');
                setName('');
                setAddress('');
                setPhone('');
                setEmail('');
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message)
            });
    };

    if (!authenticated) {
        return <Navigate to={{ pathname: '/', state: { from: props.location } }} />;
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

                <main style={{ margin: '20px' }}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Thêm chi nhánh</h5>
                            <h6 className="card-subtitle text-muted"> Thêm chi nhánh của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên Chi Nhánh</label>
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
                                    <label className="form-label">Địa Chỉ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: Hoan Kiem Street"
                                        name="address"
                                        value={address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Số Điện Thoại</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: 0987654321"
                                        name="phone"
                                        value={phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ex: your-email@example.com"
                                        name="email"
                                        value={email}
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

export default AddStore;