import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import useScript from "../../components/useScripts";
import { getAllNews } from "../../services/fetch/ApiUtils";
import { toast } from "react-toastify";

function News(props) {
  const { authenticated, role, currentUser, location, onLogout } = props;

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
            <p className="ppx-text-3xl ppx-font-semibold">Hoạt động</p>

            <div className="mainNews row mt-3">
              {tableData?.map((item) => (
                <div className="col-12 col-xl-3 col-md-4 mb-3" key={item.id}>
                  <a href={`http://tvlpost.com/tin-tuc/hoat-dong/bai-viet-demo-1/${item.id}`}>
                    <div className="card ppx-h-full">
                      <a href={`/news-single/${item.id}`}>
                        <img src={item.imageUrl} className="card-img-top ppx-h-44" alt="bai viet demo 1" />
                      </a>
                      <div className="card-body px-2 py-2 ">
                        <a href={`/news-single/${item.id}`}>
                          <p className="card-title ppx-font-semibold ppx-text-lg">{item.title}</p>
                          <p className="card-text">Chi tiết....</p>
                        </a>
                        <div className="d-flex ppx-justify-between mt-3">
                          <a href={`/news-single/${item.id}`}>
                            <p className="ppx-text-gray-500 ppx-text-sm">2024-01-14 01:37:18</p>
                          </a>
                          <a href={`/news-single/${item.id}`}>
                            <p className="ppx-text-sm">Xem thêm <i className="fas fa-angle-double-right"></i></p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;