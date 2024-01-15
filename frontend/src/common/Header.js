import { Component } from "react";
import { Link } from "react-router-dom";
import './Profile.css';

class Header extends Component {


    render() {
        console.log("logout", this.props.onLogout)
        return (
            <>
                <div class="topBar">

                    <div
                        class="navbar ppx-h-10 navbar-dark bg-dark ppx-text-cyan-pale-gray ppx-tracking-wide"
                    >
                        <div class="container ppx-font-normal">
                            <a
                                href="mailto:info@pcs.vn"
                                class="ppx-text-sm ppx-hidden md:ppx-inline-block ppx-no-underline ppx-text-"
                            >

                            </a>

                            <ul
                                class="ppx-float-right ppx-flex ppx-text-sm ppx-align-middle md:ppx-mx-0 ppx-mx-auto"
                            >
                                <li class="ppx-flex ppx-mr-5">
                                    <p class="ppx-mr-2">
                                        <i class="fas fa-phone-alt"></i>
                                        <span class="ppx-hidden md:ppx-inline-block">Hotline:</span>
                                    </p>
                                    <a href="tel:1900599838" class="navTopTel"
                                    >+33768 45 34 68 - +84836 33 79 68</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>



                    <nav class="navbar navbar-expand-lg bg-light secondHeader">
                        <div class="container">
                            <a class="navbar-brand" href="http://tvlpost.com">
                                <img
                                    src="http://tvlpost.com/storage/images/uploads/pVuzHRJMfDpF9Q1zXH5nTTA31opGJbMTDWKhoA5i.png"
                                    class="ppx-w-auto ppx-h-10"
                                    alt="TVL POST"
                                />
                            </a>

                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >

                                <i class="fas fa-bars"></i>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item px-2">
                                        <a class="nav-link linkMenu" href="/"
                                        >Trang chủ</a
                                        >
                                    </li>

                                    <li class="nav-item px-2 dropdown">
                                        <a
                                            class="nav-link linkMenu dropdown-toggle"
                                            href="#"
                                            id="menuServiceDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >Dịch vụ</a
                                        >

                                        <div class="dropdown-menu px-2 py-3 ppx-w-96">
                                            <div class="row">
                                                <div class="col-12 col-md-6">
                                                    <p class="ppx-font-semibold mb-2 ms-3">Dịch vụ nội địa</p>

                                                    <ul class="ppx-leading-7">
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/chuyen-phat-nhanh-cpn"
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Chuyển phát nhanh (CPN)</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-phat-hoa-toc-pht"
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ phát Hỏa tốc (PHT)</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/chuyen-phat-tiet-kiem"
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Chuyển phát Tiết Kiệm</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-chuyen-phat-48h-p48h"
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ chuyển phát 48h (P48H)</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="col-12 col-md-6">
                                                    <p class="ppx-font-semibold mb-2 ms-3">Dịch vụ quốc tế</p>

                                                    <ul class="ppx-leading-7">
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-cho-thue-kho-bai"
                                                                target=""
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ cho thuê kho bãi</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-thong-quan-hai-chieu-viet-phap"
                                                                target=""
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ thông quan hai chiều Việt - Pháp</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-van-chuyen-chinh-ngach-viet-nam-eu"
                                                                target=""
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ vận chuyển chính ngạch Việt Nam - EU</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-van-chuyen-hang-ca-nhan-viet-nam-eu"
                                                                target=""
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ vận chuyển hàng cá nhân Việt Nam - Eu</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="http://tvlpost.com/dich-vu/dich-vu-e-com"
                                                                target=""
                                                                class="dropdown-item ppx-whitespace-normal"
                                                            >Dịch vụ E - Com</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="nav-item px-2 dropdown">
                                        <a
                                            class="nav-link linkMenu dropdown-toggle"
                                            href="#"
                                            id="navbarDropdownPost"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >Tin tức</a
                                        >

                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownPost">
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="/new-feeds"
                                                >Hoạt động</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="/agents"
                                                >Chuyên viên tư vấn</a
                                                >
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item px-2">
                                        <a
                                            class="nav-link linkMenu"
                                            href="/about"
                                        >Về chúng tôi</a
                                        >
                                    </li>

                                    {!this.props.authenticated ? (
                                        <>
                                            <li
                                                class="nav-item ppx-px-3 ms-2 ppx-rounded-3xl ppx-border-2 ppx-border-gray-300"
                                            >
                                                <a href="/login">
                                                    <button
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#loginModal"
                                                        class="ppx-mb-0 nav-link linkMenu ppx-text-vibrant-blue"
                                                    >
                                                        Đăng nhập
                                                    </button>
                                                </a>
                                            </li>

                                            <li
                                                class="nav-item ppx-bg-vibrant-blue px-3 ms-2 ppx-rounded-3xl"
                                            >
                                                <a href="/signup">
                                                    <button
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#registerModal"
                                                        class="ppx-mb-0 ppx-pt-2.5 nav-link linkMenu ppx-text-white"
                                                    >
                                                        Đăng ký
                                                    </button>
                                                </a>
                                            </li>
                                        </>) : (
                                        <>
                                            <>
                                                <div className="profile-info">
                                                    <div className="profile-avatar">
                                                        {
                                                            this.props.currentUser.imageUrl ? (
                                                                <img src={this.props.currentUser.imageUrl ? this.props.currentUser.imageUrl : "../assets/img/author-1.jpg"}
                                                                    alt={this.props.currentUser.name} className="img-fluid rounded-circle border border-dark border-3"
                                                                    style={{ width: "50px" }} />

                                                            ) : (
                                                                <div className="text-avatar" style={{
                                                                    width: "50px",
                                                                    height: "50px"
                                                                }}>
                                                                    <span style={{ lineHeight: "50px" }}>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <div className="d-flex flex-row align-items-center mb-2">
                                                            <p className="mb-0 me-2">{this.props.currentUser.name}</p>
                                                            <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: "#1B7B2C" }}>
                                                                <li>
                                                                    <i className="fas fa-star fa-xs"></i>
                                                                </li>
                     
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <Link to="/profile">
                                                                <button type="button" className="btn btn-outline-dark btn-rounded btn-sm"
                                                                    data-mdb-ripple-color="dark">Hồ Sơ</button>&nbsp;
                                                            </Link>
                                                            <button type="button" className="btn btn-outline-dark btn-rounded btn-sm"
                                                                data-mdb-ripple-color="dark" onClick={this.props.onLogout}>Đăng xuất</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            </>
        );
    }
}

export default Header;