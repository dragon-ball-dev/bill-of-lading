import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useScript from '../components/useScripts';
import { useEffect, useState } from 'react';
import { getAllBanner } from '../services/fetch/ApiUtils';
import { toast } from 'react-toastify';



function Home() {

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    useScript("../../assets/js/app.js");

    // Fetch data from the API
    useEffect(() => {
        fetchData();
    }, [currentPage, searchQuery]);

    const fetchData = () => {
        getAllBanner(currentPage - 1, itemsPerPage, searchQuery).then(response => {
            setTableData(response.data.content);
            setTotalItems(response.data.totalElements);
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    return (
        <>
            <div class="mainContent">
                <div class="homePage ppx-w-full">
                    {tableData?.map((item) => {
                        if (item.status === true) {
                            return (
                                <div class="mainBg ppx-py-24 ppx-h-screen/1.85 ppx-filter" style={{ backgroundImage: "url("+item.imageUrl+")" }}>
                                    <div class="container">
                                        <p class="ppx-uppercase md:ppx-text-5xl ppx-text-4xl ppx-font-semibold ppx-tracking-wide ppx-mb-0 text-center ppx-text-white">
                                            DỊCH VỤ CỦA CHÚNG TÔI - LỢI ÍCH CỦA CÁC BẠN
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>

                <div class="trackingBox ppx-absolute ppx-z-50 ppx-w-full">
                    <div class="container">
                        <div class="p-0 ppx-bg-white ppx-rounded-lg ppx-shadow-lg">
                            <ul
                                id="trackingBoxPill"
                                class="nav nav-pills nav-justified tab-header-content ppx-bg-vibrant-blue ppx-rounded-tl-lg ppx-rounded-tr-lg"
                            >
                                <li
                                    class="nav-item ppx-rounded-tl-lg ppx-cursor-pointer tracking"
                                    role="presentation"
                                >
                                    <button
                                        class="nav-link active ppx-text-white ppx-text-lg ppx-rounded-tl-lg"
                                        aria-controls="trackingTabContainer"
                                        aria-selected="true"
                                        data-bs-target="#trackingTabContainer"
                                        data-bs-toggle="pill"
                                        role="tab"
                                    >
                                        <span class="d-none d-sm-block"
                                        ><i class="fas fa-box me-1"></i> Tra cứu đơn vận</span
                                        >
                                        <span class="d-block d-sm-none">Tra cứu</span>
                                    </button>
                                </li>

                                <li
                                    class="nav-item ppx-cursor-pointer fee-est"
                                    role="presentation"
                                >
                                    <button
                                        class="nav-link ppx-text-white ppx-text-lg"
                                        id="order-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#order"
                                        role="tab"
                                        aria-controls="order"
                                        aria-selected="false"
                                    >
                                        <span class="d-none d-sm-block">
                                            <i class="fas fa-tasks me-1"></i> Ước tính cước phí
                                        </span>

                                        <span class="d-block d-sm-none">Ước tính</span>
                                    </button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div
                                    class="tab-pane fade show active"
                                    id="trackingTabContainer"
                                    role="tabpanel"
                                    aria-labelledby="trackingTab"
                                >
                                    <div class="px-md-5 px-3 pt-4 pb-4">
                                        <div class="input-group">
                                            <input
                                                type="text"
                                                id="trackingBox"
                                                class="form-control"
                                                aria-label="Tra cứu đơn"
                                                placeholder="Nhập mã track trace"
                                            />
                                            <button
                                                type="button"
                                                class="btn btn-primary"
                                                id="trackingBtn"
                                            >
                                                <i class="fas fa-search mr-3"></i>
                                                Tra Cứu
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="order"
                                    role="tabpanel"
                                    aria-labelledby="order-tab"
                                >
                                    <div class="px-md-5 px-3 pt-4 pb-3">
                                        <form method="post" action="#" class="formFeeEst">
                                            <input type="hidden" name="_method" value="POST" />
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value="C4jzBe3Vw5yYKlvdEMtvAzhOiUQwMOEBm7hAALnq"
                                            />
                                            <div class="row mb-3">
                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="fromProvince"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Gửi từ <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="fromProvince"
                                                        name="fromProvince"
                                                        aria-label="Chọn tỉnh thành"
                                                    >
                                                        <option value="" selected>Chọn tỉnh thành</option>

                                                        <option value="11859">An Giang</option>
                                                        <option value="11850">Bà Rịa Vũng Tàu</option>
                                                        <option value="11815">Bắc Cạn</option>
                                                        <option value="11812">Bắc Giang</option>
                                                        <option value="11867">Bạc Liêu</option>
                                                        <option value="11811">Bắc Ninh</option>
                                                        <option value="11864">Bến Tre</option>
                                                        <option value="11853">Bình Dương</option>
                                                        <option value="11841">Bình Định</option>
                                                        <option value="11854">Bình Phước</option>
                                                        <option value="11851">Bình Thuận</option>
                                                        <option value="11868">Cà Mau</option>
                                                        <option value="11861">Cần Thơ</option>
                                                        <option value="11816">Cao Bằng</option>
                                                        <option value="11837">Đà Nẵng</option>
                                                        <option value="11844">Đăk Lăk</option>
                                                        <option value="11845">Đăk Nông</option>
                                                        <option value="11825">Điện Biên</option>
                                                        <option value="11852">Đồng Nai</option>
                                                        <option value="11858">Đồng Tháp</option>
                                                        <option value="11842">Gia Lai</option>
                                                        <option value="11820">Hà Giang</option>
                                                        <option value="11827">Hà Nam</option>
                                                        <option value="11806">Hà Nội</option>
                                                        <option value="11833">Hà Tĩnh</option>
                                                        <option value="11808">Hải Dương</option>
                                                        <option value="11809">Hải Phòng</option>
                                                        <option value="11862">Hậu Giang</option>
                                                        <option value="11849">Hồ Chí Minh</option>
                                                        <option value="11823">Hòa Bình</option>
                                                        <option value="11807">Hưng Yên</option>
                                                        <option value="11846">Khánh Hòa</option>
                                                        <option value="11863">Kiên Giang</option>
                                                        <option value="11840">Kon Tum</option>
                                                        <option value="11826">Lai Châu</option>
                                                        <option value="11848">Lâm Đồng</option>
                                                        <option value="11813">Lạng Sơn</option>
                                                        <option value="11822">Lào Cai</option>
                                                        <option value="11856">Long An</option>
                                                        <option value="11829">Nam Định</option>
                                                        <option value="11832">Nghệ An</option>
                                                        <option value="11830">Ninh Bình</option>
                                                        <option value="11847">Ninh Thuận</option>
                                                        <option value="11818">Phú Thọ</option>
                                                        <option value="11843">Phú Yên</option>
                                                        <option value="11834">Quảng Bình</option>
                                                        <option value="11838">Quảng Nam</option>
                                                        <option value="11839">Quảng Ngãi</option>
                                                        <option value="11810">Quảng Ninh</option>
                                                        <option value="11835">Quảng Trị</option>
                                                        <option value="11866">Sóc Trăng</option>
                                                        <option value="11824">Sơn La</option>
                                                        <option value="11855">Tây Ninh</option>
                                                        <option value="11828">Thái Bình</option>
                                                        <option value="11814">Thái Nguyên</option>
                                                        <option value="11831">Thanh Hóa</option>
                                                        <option value="11836">Thừa Thiên Huế</option>
                                                        <option value="11857">Tiền Giang</option>
                                                        <option value="11865">Trà Vinh</option>
                                                        <option value="11819">Tuyên Quang</option>
                                                        <option value="11860">Vĩnh Long</option>
                                                        <option value="11817">Vĩnh Phúc</option>
                                                        <option value="11821">Yên Bái</option>
                                                    </select>
                                                </div>

                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="fromDistrict"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Quận huyện <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="fromDistrict"
                                                        name="fromDistrict"
                                                        aria-label="Chọn quận huyện"
                                                        required
                                                    >
                                                        <option value="" selected>Chọn quận huyện</option>
                                                    </select>
                                                </div>

                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="fromWard"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Phường xã <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="fromWard"
                                                        name="fromWard"
                                                        aria-label="Chọn phường xã"
                                                        required
                                                    >
                                                        <option value="" selected>Chọn phường xã</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="toProvince"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Gửi đến <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="toProvince"
                                                        name="toProvince"
                                                        aria-label="Chọn tỉnh thành"
                                                        required
                                                    >
                                                        <option value="" selected>Chọn tỉnh thành</option>

                                                        <option value="11859">An Giang</option>
                                                        <option value="11850">Bà Rịa Vũng Tàu</option>
                                                        <option value="11815">Bắc Cạn</option>
                                                        <option value="11812">Bắc Giang</option>
                                                        <option value="11867">Bạc Liêu</option>
                                                        <option value="11811">Bắc Ninh</option>
                                                        <option value="11864">Bến Tre</option>
                                                        <option value="11853">Bình Dương</option>
                                                        <option value="11841">Bình Định</option>
                                                        <option value="11854">Bình Phước</option>
                                                        <option value="11851">Bình Thuận</option>
                                                        <option value="11868">Cà Mau</option>
                                                        <option value="11861">Cần Thơ</option>
                                                        <option value="11816">Cao Bằng</option>
                                                        <option value="11837">Đà Nẵng</option>
                                                        <option value="11844">Đăk Lăk</option>
                                                        <option value="11845">Đăk Nông</option>
                                                        <option value="11825">Điện Biên</option>
                                                        <option value="11852">Đồng Nai</option>
                                                        <option value="11858">Đồng Tháp</option>
                                                        <option value="11842">Gia Lai</option>
                                                        <option value="11820">Hà Giang</option>
                                                        <option value="11827">Hà Nam</option>
                                                        <option value="11806">Hà Nội</option>
                                                        <option value="11833">Hà Tĩnh</option>
                                                        <option value="11808">Hải Dương</option>
                                                        <option value="11809">Hải Phòng</option>
                                                        <option value="11862">Hậu Giang</option>
                                                        <option value="11849">Hồ Chí Minh</option>
                                                        <option value="11823">Hòa Bình</option>
                                                        <option value="11807">Hưng Yên</option>
                                                        <option value="11846">Khánh Hòa</option>
                                                        <option value="11863">Kiên Giang</option>
                                                        <option value="11840">Kon Tum</option>
                                                        <option value="11826">Lai Châu</option>
                                                        <option value="11848">Lâm Đồng</option>
                                                        <option value="11813">Lạng Sơn</option>
                                                        <option value="11822">Lào Cai</option>
                                                        <option value="11856">Long An</option>
                                                        <option value="11829">Nam Định</option>
                                                        <option value="11832">Nghệ An</option>
                                                        <option value="11830">Ninh Bình</option>
                                                        <option value="11847">Ninh Thuận</option>
                                                        <option value="11818">Phú Thọ</option>
                                                        <option value="11843">Phú Yên</option>
                                                        <option value="11834">Quảng Bình</option>
                                                        <option value="11838">Quảng Nam</option>
                                                        <option value="11839">Quảng Ngãi</option>
                                                        <option value="11810">Quảng Ninh</option>
                                                        <option value="11835">Quảng Trị</option>
                                                        <option value="11866">Sóc Trăng</option>
                                                        <option value="11824">Sơn La</option>
                                                        <option value="11855">Tây Ninh</option>
                                                        <option value="11828">Thái Bình</option>
                                                        <option value="11814">Thái Nguyên</option>
                                                        <option value="11831">Thanh Hóa</option>
                                                        <option value="11836">Thừa Thiên Huế</option>
                                                        <option value="11857">Tiền Giang</option>
                                                        <option value="11865">Trà Vinh</option>
                                                        <option value="11819">Tuyên Quang</option>
                                                        <option value="11860">Vĩnh Long</option>
                                                        <option value="11817">Vĩnh Phúc</option>
                                                        <option value="11821">Yên Bái</option>
                                                    </select>
                                                </div>

                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="toDistrict"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Quận huyện <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="toDistrict"
                                                        name="toDistrict"
                                                        aria-label="Chọn quận huyện"
                                                        required
                                                    >
                                                        <option value="" selected>Chọn quận huyện</option>
                                                    </select>
                                                </div>

                                                <div class="col-12 col-md-4">
                                                    <label
                                                        for="toWard"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium ppx-mb-1"
                                                    >
                                                        Phường xã <span class="ppx-text-red-400">*</span>
                                                    </label>

                                                    <select
                                                        id="toWard"
                                                        name="toWard"
                                                        aria-label="Chọn phường xã"
                                                        required
                                                    >
                                                        <option value="" selected>Chọn phường xã</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row mb-4">
                                                <div class="col-12 col-md-6">
                                                    <label
                                                        for="weight"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium"
                                                    >Trọng lượng (Kilogram)
                                                        <span class="ppx-text-red-400">*</span></label
                                                    >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value="0"
                                                        name="weight"
                                                        class="form-control"
                                                        id="weight"
                                                        placeholder="Trọng lượng của khối hàng (tính theo kilo-gram)"
                                                        required
                                                    />
                                                </div>

                                                <div class="col-12 col-md-2">
                                                    <label
                                                        for="length"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium"
                                                    >Chiều dài (cm)</label
                                                    >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value="0"
                                                        class="form-control"
                                                        id="length"
                                                        name="length"
                                                        placeholder="Dài (tính theo mét)"
                                                    />
                                                </div>

                                                <div class="col-12 col-md-2">
                                                    <label
                                                        for="width"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium"
                                                    >Chiều rộng (cm)</label
                                                    >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value="0"
                                                        class="form-control"
                                                        id="width"
                                                        name="width"
                                                        placeholder="Rộng (tính theo mét)"
                                                    />
                                                </div>

                                                <div class="col-12 col-md-2">
                                                    <label
                                                        for="height"
                                                        class="form-label ppx-text-gray-600 ppx-font-medium"
                                                    >Chiều cao (cm)</label
                                                    >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value="0"
                                                        class="form-control"
                                                        id="height"
                                                        name="height"
                                                        placeholder="Cao (tính theo mét)"
                                                    />
                                                </div>
                                            </div>

                                            <div class="orderBtn d-flex justify-content-center">
                                                <button class="btn btn-primary ppx-px-20 ppx-rounded-md">
                                                    Tra cứu giá
                                                </button>
                                            </div>
                                        </form>

                                        <div class="serviceResult ppx-hidden">
                                            <p class="text-center ppx-text-2xl ppx-font-semibold mt-5">
                                                Tìm thấy <span class="resultCount"></span> dịch vụ
                                            </p>

                                            <p class="text-center ppx-text-lg mt-1">
                                                Trọng lượng: <span class="resultWeight"></span> kg | Kích
                                                thước: <span class="resultLength"></span> cm x
                                                <span class="resultWidth"></span> cm x
                                                <span class="resultHeight"></span> cm
                                            </p>

                                            <div class="listServices mt-3">
                                                <div class="row my-3 resultServices row-eq-height"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="tab-pane fade"
                                    id="warehouse"
                                    role="tabpanel"
                                    aria-labelledby="warehouse-tab"
                                >
                                    <div class="px-md-5 px-3 pt-4 pb-3">WAREHOUSE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="ppx-bg-white pb-4 partnerBox">
                    <div class="container ppx-text-center">
                        <p class="ppx-font-semibold ppx-text-3xl">
                            Các thương hiệu đối tác TVL POST
                        </p>

                        <div class="d-flex flex-wrap" style={{ marginLeft: "150px" }}>
                            <img src="http://tvlpost.com/storage/images/partners/dnwRqPP0oAdUje25Cj5qsyN1Rz6YfeqUnsKFdL5F.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            <img src="http://tvlpost.com/storage/images/partners/9384CapAUWIYCBAI3UzuhES2cCp5tMkCvmW7Q36A.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            <img src="http://tvlpost.com/storage/images/partners/gRPsFZzFXC2DlPmYo83grgKtxr9qSTkvmphhZe2H.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            <img src="http://tvlpost.com/storage/images/partners/hqJoKZUVGYS5OtAW8glrADAki18XhNdIgfVPYrjt.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            <img src="http://tvlpost.com/storage/images/partners/vJVMu4PfKNfwgY9E3vQFXeZ0AwqtljtiXfEndjaB.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                            <img src="http://tvlpost.com/storage/images/partners/i2t1zjAEPORKg7QcDUtYtdze7wtvVGaUCtPsJmWE.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />
                        </div>

                    </div>
                </div>

                <div class="ppx-bg-gray-100 py-5">
                    <div class="ww container">
                        <p class="ppx-text-center ppx-font-semibold ppx-text-3xl">
                            Tại sao hàng ngàn khách hàng lựa chọn chúng tôi
                        </p>
                        <p class="ppx-text-center ppx-font-semibold ppx-text-lg mt-2">
                            Sự hài lòng của khách hàng là thành công lớn nhất của chúng tôi
                        </p>

                        <div
                            class="cardCustom mt-5 ppx-bg-white px-3 ppx-text-justify ppx-rounded-lg"
                        >
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="colService">
                                        <div class="panelService">
                                            <p class="titleService">
                                                Dịch vụ chuyển phát nhanh nội địa
                                            </p>

                                            <div class="serviceIcon my-5">
                                                <img
                                                    src="http://tvlpost.com/storage/images/uploads/6ugsTRlxEorQOn2lhLNmczrmxdJJcGN7LJVXJM42.png"
                                                    alt=""
                                                />
                                            </div>

                                            <div class="serviceList">
                                                <ul>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Chúng tôi cam kết mang đến cho khách hàng một chất
                                                            lượng dịch vụ trọn vẹn nhất dựa trên các giải pháp
                                                            vận chuyển linh hoạt với các đối tác vận chuyển uy
                                                            tín.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Hỗ trợ trực tuyến: Thời gian hỗ trợ từ 06:00 đến
                                                            18:00 hàng ngày Phục vụ và giải đáp mọi thắc mắc của
                                                            Khách hàng
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Kiểm soát theo thời gian thực: Khách hàng luôn nắm
                                                            rõ vị trí kiện hàng đang ở đâu, thông tin người vận
                                                            chuyển và thời gian hàng được giao đến.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Giao hàng nhanh chóng: Thời gian vận chuyển đúng giờ
                                                            theo yêu cầu từ khách hàng.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Đảm bảo an toàn: Hàng hóa sẽ luôn được đảm bảo kỹ
                                                            lưỡng và an toàn với các dịch vụ chuyển phát chuyên
                                                            nghiệp.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="colService">
                                        <div class="panelService">
                                            <p class="titleService">
                                                Dịch vụ chuyển phát nhanh quốc tế
                                            </p>

                                            <div class="serviceIcon my-5">
                                                <img
                                                    src="http://tvlpost.com/storage/images/uploads/EwY4ejLyzd2YCQmXQyiJDWOm59YOt4B6oafnUw8d.png"
                                                    alt="WHY"
                                                />
                                            </div>

                                            <div class="serviceList">
                                                <ul>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Chúng tôi cung cấp dịch vụ vận chuyển hàng đầu, linh
                                                            hoạt đáp ứng nhu cầu của từng đối tượng khách hàng.
                                                            Chúng tôi cung cấp các chặng bay thẳng và liên tục
                                                            từ Việt Nam đi Eu
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Hệ thống báo giá tự động chính xác và nhanh chóng
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Theo dõi hành trình đơn hàng 24/7
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Bảo hiểm hàng hóa vận chuyển, đảm bảo an toàn tối đa
                                                            cho đơn hàng của bạn
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <i
                                                                class="far fa-check-circle fa-lg ppx-text-red-500"
                                                            ></i>
                                                            Chúng tôi có thể cung cấp các dịch vụ vận chuyển
                                                            hàng hóa Quốc tế trong thời gian nhanh nhất, dễ dàng
                                                            nhất, hiệu quả nhất, và xa hơn nữa là TVL Post luôn
                                                            mong muốn tiết kiệm chi phí và thời gian cho khách
                                                            hàng.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ppx-bg-white py-5">
                    <div class="container">
                        <div class="row ppx-text-justify">
                            <div class="col-md-6 ppx-justify-items-center ppx-align-middle">
                                <img
                                    class="ppx-rounded-lg"
                                    src="http://tvlpost.com/storage/images/uploads/6joofmggXyQtTXiiDLp2dTw7Wrsfg4UycxRHGhEj.jpg"
                                    alt="Policy image"
                                />
                            </div>

                            <div class="col-md-6 mt-3 mt-md-0">
                                <p class="ppx-text-3xl ppx-font-semibold ppx-text-center">
                                    Chính sách TVL POST
                                </p>

                                <p class="ppx-text-sm ppx-font-semibold mt-2">
                                    Để đảm bảo quyền lọi và lợi ích của khách hàng khi sử dụng dịch
                                    vụ của TVL Post sau khi Quý khách hàng đăng ký sử dụng dịch vụ
                                    sẽ có nhân viên và tài khoản liên hệ tư vấn và hướng dẫn sử dụng dịch vụ, Quý
                                    khách hàng lưu ý một số quy định sau:
                                </p>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Hình thức tiếp nhận đơn hàng: Khách hàng đăng ký sử dụng
                                                dịch vụ TVL Post qua websize: tvlpost.com hoặc liên hệ với
                                                nhân viên và tài khoản tư vấn để được hướng dẫn. TVL Post không nhận
                                                các mặt hàng bị cấm vận chuyển theo quy định của pháp
                                                luật.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Quy định gửi hàng: Sau khi tạo đơn trên hệ thống tạo đơn
                                                khách hàng mang hàng qua kho TVL Post để gửi. TVL Post
                                                không giới hạn số lượng đơn mỗi lần gửi. Hàng gửi đến kho
                                                cần có đầy đủ thông tin người gửi người nhận. (in vận đơn
                                                sau khi tạo đơn dán lên kiện hàng)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Quy định về giao hàng: TVL Post giao hàng tại đại chỉ
                                                khách hàng cung cấp, giao tại chân các tòa nhà cao tầng,
                                                gọi điện cho khách hàng trước khi đến giao. Khi TVL Post
                                                cập nhật mã trucking nội địa EU khách hàng có thế liên hệ
                                                trực tiếp với hãng vận chuyển theo vận đơn được cung cấp
                                                để kiểm tra hành trình và thời gian giao hàng.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Quy định về đóng gói: Đối với hàng hóa dễ vỡ, hàng hóa giá
                                                trị cao khi vận chuyển khách hàng cần đóng gói đúng quy
                                                cách và phù hợp và chịu trách nhiệm về tính an toàn của
                                                hàng hóa. Nếu khách hàng sử dụng dịch vụ đóng gói TVL Post
                                                sẽ thu phí dịch vụ theo quy định.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Quy định về thanh toán: Khách hàng vui lòng thanh toán
                                                tiền cước ngay khi gửi hàng, hoặc đối với các khách hàng
                                                có hợp đồng với TVL Post sẽ được tạo tài khoản thanh toán
                                                hàng tuần.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="ppx-bg-gray-100 ppx-rounded-lg mt-3">
                                    <div
                                        class="row g-0 px-2 py-2 justify-content-center align-items-center"
                                    >
                                        <div class="col-2 text-center">
                                            <i class="fas fa-check fa-3x"></i>
                                        </div>

                                        <div class="col-10 ppx-font-medium">
                                            <p>
                                                Quy định về khiếu nại: Khách hàng khiếu nại trực tiếp tại
                                                kho tiếp nhận gửi hàng (Đầu Việt Nam). Thông tin khiếu nại
                                                bao gồm: Số vận đơn hàng gửi, ngày hàng gửi, nội dung
                                                khiếu nại rõ ràng TVl sẽ tiếp nhận và phản hồi các thông
                                                tin khiếu nại theo quy định.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ppx-bg-gray-100 py-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center px-5">
                                <p class="ppx-font-medium ppx-text-3xl">Câu chuyện TVL POST</p>
                                <p class="mt-5 ppx-font-normal ppx-text-lg ppx-text-justify">
                                    Nếu như chúng ta có khả năng giúp cho cuộc sống này trở nên dẽ
                                    dàng hơn một chút thì sao?
                                </p>
                            </div>

                            <div class="col-md-6 mt-3 mt-md-0" >
                                <img
                                    src="http://tvlpost.com/storage/images/uploads/1uN5lbcZBUw01MiY27UOCItQmtJoPL4cxACfIohi.png"
                                    class="ppx-rounded-lg"
                                    alt="Story Image" style={{ marginLeft: "150px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;