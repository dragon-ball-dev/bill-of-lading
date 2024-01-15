import React from "react";
import { Link, NavLink } from 'react-router-dom';

const SidebarNav = ({ role }) => {
  return (
    <ul className="sidebar-nav">
      <li className="sidebar-header">
        Quản lí chức năng
      </li>
      <li className="sidebar-item">
        <NavLink to="/dashboard" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Thống kê</span>
        </NavLink>
      </li>
      {role == "ROLE_ADMIN" ? <>
        <li className="sidebar-item">
          <NavLink to="/report" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Báo cáo</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/order" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý vận đơn</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/employee" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý nhân viên và tài khoản</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/product" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý dịch vụ</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/stock" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý kho hàng</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/category" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý thể loại</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/store" className="sidebar-link">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý chi nhánh</span>
          </NavLink>
        </li>
      </> : <></>
      }
      <li className="sidebar-item">
        <NavLink to="/news" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý tin tức</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/banner" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý banner</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/province" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý các tỉnh</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/district" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý các huyện</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/chat" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Tin nhắn (4)</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default SidebarNav;