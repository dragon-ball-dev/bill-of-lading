import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllCategory, getAllProduct, getAllService } from "../../services/fetch/ApiUtils";
import SidebarNav from "./SidebarNav";
import Nav from "./Nav";
import Pagination from "./Pagnation";
import useScript from "../../components/useScripts";

function ServicesManager(props) {
    const { authenticated, role, currentUser, location, onLogout } = props;
    const history = useNavigate();

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
        getAllService(currentPage - 1, itemsPerPage).then(response => {
            console.log(response)
            setTableData(response.data.content);
            setTotalItems(response.data.totalElements);
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleRedirectAddCategory = () => {
        history('/add-services')
    }

    const handleEditCategory = (id) => {
        history('/edit-services/' + id)
    }



    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // const handleDeleteCategory = (id) => {
    //     deleteMaintenance(id).then(response => {
    //         console.log(response.message)
    //         toast.success("Xóa dịch vụ thành công")
    //         fetchData();
    //     }).catch(
    //         error => {
    //             toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
    //         }
    //     )
    // }

    if (!props.authenticated) {
        return <Navigate
            to={{
                pathname: "/login-admin",
                state: { from: location }
            }} />;
    }

    return (
        <>
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

                    <br />
                    <div className="container-fluid p-0"></div>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Quản lý dịch vụ</h5>
                            <h6 className="card-subtitle text-muted"> Quản lý dịch vụ của TVL Post.</h6>
                        </div>
                        <div className="card-body">
                            <div id="datatables-buttons_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dt-buttons btn-group flex-wrap">
                                <button className="btn btn-secondary buttons-copy buttons-html5" tabindex="0" aria-controls="datatables-buttons" type="button"><a onClick={handleRedirectAddCategory}>Thêm dịch vụ</a></button>
                            </div></div>
                                <div className="col-sm-12 col-md-6" style={{ marginLeft: "650px" }}>
                                    <div>
                                        <ul>
                                            <li>SHIPPING_ECONOMICAL - Giao hàng tiết kiệm</li>
                                            <li>SHIPPING_FAST - Giao hàng nhanh</li>
                                            <li>SHIPPING_EXPRESS - Giao hàng hỏa tốc</li>
                                            <li>SHIPPING_INTERNAL - Giao hàng trong nước</li>
                                            <li>SHIPPING_EXTERNAL - Giao hàng quốc tế</li>

                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>INTERNAL_PROVINCE - Nội tỉnh</li>
                                            <li>INTERNAL_AREA - Nội miền</li>
                                            <li>NEAR_AREA - Cận miền</li>
                                            <li>SOUTH_NORTH - Bắc nam</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                                <div className="row dt-row">
                                    <div className="col-sm-12"><table id="datatables-buttons" className="table table-striped dataTable no-footer dtr-inline" style={{ width: "100%" }} aria-describedby="datatables-buttons_info">
                                        <thead>
                                            <tr>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Tên dịch vụ</th>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Khu vực vận chuyển</th>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Giá</th>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Đơn vị</th>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Khối lượng</th>
                                                <th className="sorting sorting_asc" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "224px" }}  >Thời gian dự tính</th>
                                                <th className="sorting" tabindex="0" aria-controls="datatables-buttons" rowspan="1" colspan="1" style={{ width: "115px" }} >Chế độ</th></tr>
                                        </thead>
                                        <tbody>
                                            {tableData?.map((item) => (
                                                <tr className="odd">
                                                    <td className="dtr-control sorting_1" tabindex="0">{item?.serviceDeliver}</td>
                                                    <td className="dtr-control sorting_1" tabindex="0" >{item?.serviceScope}</td>

                                                    <td className="dtr-control sorting_1" tabindex="0">{item.price && item.price.toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}</td>
                                                    <td className="dtr-control sorting_1" tabindex="0">{item?.weightUnit}</td>
                                                    <td className="dtr-control sorting_1" tabindex="0">{item?.weightService}</td>
                                                    <td className="dtr-control sorting_1" tabindex="0">{item?.estimatedTime}</td>
                                                    <td>
                                                        <a href="#" onClick={() => handleEditCategory(item.id)} data-toggle="tooltip" tabindex="0" data-placement="bottom" title="Sửa"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 align-middle"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></a>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                <Pagination
                                    itemsPerPage={itemsPerPage}
                                    totalItems={totalItems}
                                    currentPage={currentPage}
                                    paginate={paginate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesManager;