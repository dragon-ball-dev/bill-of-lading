import React from "react"

const Nav = (props) => {
  const { currentUser, onLogout } = props;

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings"></i>
            </a>
            <button type="button" className="btn btn-info"><a className="dropdown-item" onClick={onLogout}>Đăng xuất</a></button>
            <div className="nav-link d-none d-sm-inline-block" >
              <img src="../../assets/img/avatars/avatar-2.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /><a href="/profile-admin" style={{textDecoration: "none"}}></a> 
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;