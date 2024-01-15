import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import useScript from "../../components/useScripts";
import { getAllNews } from "../../services/fetch/ApiUtils";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function NewsDetails(props) {
    const { authenticated, role, currentUser, location, onLogout } = props;
    const { id } = useParams();

    console.log("ID", id);

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
        getAllNews(currentPage - 1, itemsPerPage, searchQuery)
            .then(response => {
                setTableData(response.data.content);
                setTotalItems(response.data.totalElements);
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });
    };

    return (
        <>
            <Header authenticated={authenticated} currentUser={currentUser} onLogout={onLogout} />
            <div className="mainContent">
                <div className="registerLayout">
                    <div className="container pt-3">
                        <p className="ppx-text-3xl ppx-font-semibold">Chi tiết tin tức</p>

                        <div className="mainNews row mt-3">
                            {tableData?.map((item) => {
                                if (item.id === 1) {
                                    return (
                                        <>
                                            <div class="row">
                                                <div class="col-12 col-md-8">
                                                    <p class="title1st ppx-text-2xl ppx-font-semibold ppx-tracking-wider">{item.title}</p>
                                                    <p class="mt-2">
                                                        <span title="Lần cập nhật cuối">
                                                            <i class="fas fa-clock me-1 ppx-text-gray-500"></i>
                                                            <span class="ppx-font-medium">2024-01-15 19:13:43</span>
                                                        </span>

                                                        <span class="ms-2" title="Tác giả">
                                                            <i class="fas fa-user me-2 ppx-text-gray-500"></i>
                                                            <span class="ppx-font-medium">
                                                                Admin
                                                            </span>
                                                        </span>
                                                    </p>

                                                    <div class="content mt-3 ppx-tracking-wider ppx-text-sm">
                                                        <img src={item.imageUrl} />
                                                        <br></br>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-4">
                                                    <div class="mt-3">
                                                        <p class="ppx-font-medium ppx-text-lg mt-2">Chia sẻ lên mạng xã hội</p>

                                                        <div class="socialIcon mt-1">
                                                            <i class="fab fa-facebook-square fa-2x me-2 ppx-text-blue-800"></i>
                                                            <i class="fas fa-envelope fa-2x me-2 ppx-text-red-600"></i>
                                                            <i class="fab fa-twitter-square fa-2x ppx-text-blue-400"></i>
                                                        </div>

                                                        <div class="d-grid gap-2 mt-3">
                                                            <a href="http://tvlpost.com/dashboard/createOrder/domestic" class="btn ppx-bg-vibrant-blue ppx-text-white" type="button">Tạo vận đơn</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetails;