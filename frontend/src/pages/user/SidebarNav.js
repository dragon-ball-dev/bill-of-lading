import React from "react";
import { Link, NavLink } from 'react-router-dom';

const SidebarNav = () => {
  return (
    <ul className="sidebar-nav">
      <li className="sidebar-header">
        Quản lí chức năng
      </li>
      <li className="sidebar-item">
        <NavLink to="/profile" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Hồ sơ cá nhân</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/history" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Lịch sử tạo vận đơn</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/message" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Tin nhắn</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/change-password" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Đổi mật khẩu</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default SidebarNav;