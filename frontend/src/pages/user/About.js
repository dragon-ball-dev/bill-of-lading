import React, { Component } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

class About extends Component {
    render() {
        return (
            <>
                <Header authenticated={this.props.authenticated} currentUser={this.props.currentUser} onLogout={this.props.onLogout} />
                <div class="mainContent">
                    <div class="newDetail">
                        <div class="container pt-3 py-4">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <p
                                        class="title1st ppx-text-2xl ppx-font-semibold ppx-tracking-wider"
                                    >
                                        Về Chúng Tôi
                                    </p>
                                    <p class="mt-2">
                                        <span title="Lần cập nhật cuối">
                                            <i class="fas fa-clock me-1 ppx-text-gray-500"></i>
                                            <span class="ppx-font-medium">2023-12-28 10:42:06</span>
                                        </span>

                                        <span class="ms-2" title="Tác giả">
                                            <i class="fas fa-user me-2 ppx-text-gray-500"></i>
                                            <span class="ppx-font-medium"> Admin </span>
                                        </span>
                                    </p>

                                    <div class="content mt-3 ppx-tracking-wider ppx-text-sm">
                                        <h2>
                                            <span
                                                style={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      color: "hsl(210, 75%, 60%)"}}
                    
                                            ><strong>A. Tổng quan về công ty</strong></span
                                            >
                                        </h2>
                                        <p>&nbsp;</p>
                                        <p>
                                            &nbsp;Là một Công ty có kinh nghiệm hoạt động trong nghành Bưu
                                            chính – Chuyển phát. TVL tự hào là thương hiệu có uy tín trong
                                            lĩnh vực vận chuyển hàng hóa Quốc tế với phương châm phục vụ
                                            "Our sẻvice - your benifit”.
                                        </p>
                                        <p>
                                            Với mục tiêu luôn luôn đáp ứng nhu cầu sử dụng dịch vụ ngày
                                            càng cao của&nbsp; khách hàng, hiện nay Công ty Chúng tôi đã
                                            và đang hoàn thiện, mở rộng quy mô phục vụ và đa dạng hoá các
                                            loại hình dịch vụ. Đảm bảo chỉ tiêu, ổn định chất lượng phục
                                            vụ khách hàng, TVL Post đã và đang áp dụng, ứng dụng Công nghệ
                                            mới nhất sẽ giúp ích khách hàng với chất lượng tốt nhất trong
                                            việc tra cứu thông tin người nhận trên bưu phẩm.
                                        </p>
                                        <p>
                                            Hiện nay, với mạng lưới kho bãi tại Hà Nội, HCM, Đà Nẵng.
                                            Chúng tôi tự hào và tin tưởng sẽ cung cấp đến Quý Khách hàng
                                            dịch vụ với chất lượng tốt nhất và uy tín nhất.
                                        </p>
                                        <p>&nbsp;</p>
                                        <h2>
                                            <span style={{color: "hsl(210, 75%, 60%)"}}
                                            ><strong>&nbsp;B. Hồ sơ công ty</strong></span
                                            >
                                        </h2>
                                        <p>&nbsp;</p>
                                        <p>Tên công ty :<strong> SN Groupe&nbsp;</strong></p>
                                        <p>Tên tiếng Anh : SN Groupe</p>
                                        <p>
                                            Trụ sở chính :
                                            <strong
                                            >13 Avenue de L'Energie, 67800 Bischhemim,
                                                France&nbsp;</strong
                                            >
                                        </p>
                                        <p>
                                            Điện thoại:&nbsp;
                                            <a href="tel:1900599838">+33768 45 34 68 - +84836 33 79 68</a>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp;&nbsp;
                                        </p>
                                        <p>
                                            Website:&nbsp; &nbsp;<a href="http://skytrans.vn"
                                            ><span style={{color: "hsl(210, 75%, 60%)"}}
                                            >http://tvlpost.com</span
                                                ></a
                                            >
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp;Email: &nbsp;<a href="mailto:info@pcs.vn"
                                            >contact@snglogistique.com</a
                                            >
                                        </p>
                                        <p>Giấy ĐKKD Số : **********</p>
                                        <p>Giấy phép cung ứng dịch vụ : **********</p>
                                        <p>Giám Đốc Điều Hành : Julien Lapp&nbsp;</p>
                                        <p>Ngành nghề kinh doanh chính :&nbsp;</p>
                                        <p>* Giao nhận vận chuyển hàng cá nhân Việt Nam - EU</p>
                                        <p>* Dịch vụ thông quan hàng hai chiều Việt - Pháp&nbsp;</p>
                                        <p>* Dịch vụ vận chuyển hàng chính ngạch Việt Nam - EU</p>
                                        <p>* Dịch vụ hậu cần cho Thương Mại điện tử&nbsp;</p>
                                        <p>* Xuất nhập khẩu các mặt hàng công ty kinh doanh</p>
                                        <p>
                                            Mục tiêu : Trở thành công ty uy tín hàng đầu Việt Nam về cung
                                            cấp các dịch vụ Bưu chính vận tải
                                        </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4">
                                    <p class="title2nd ppx-text-lg ppx-font-medium">
                                        Tin tức liên quan
                                    </p>

                                    <div></div>

                                    <div class="mt-3">
                                        <p class="ppx-font-medium ppx-text-lg mt-2">
                                            Chia sẻ lên mạng xã hội
                                        </p>

                                        <div class="socialIcon mt-1">
                                            <i
                                                class="fab fa-facebook-square fa-2x me-2 ppx-text-blue-800"
                                            ></i>
                                            <i class="fas fa-envelope fa-2x me-2 ppx-text-red-600"></i>
                                            <i class="fab fa-twitter-square fa-2x ppx-text-blue-400"></i>
                                        </div>

                                        <div class="d-grid gap-2 mt-3">
                                            <a
                                                href="http://tvlpost.com/dashboard/createOrder/domestic"
                                                class="btn ppx-bg-vibrant-blue ppx-text-white"
                                                type="button"
                                            >Tạo vận đơn</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default About;