import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Message from '../messages/pages/Home';
import SidebarNav from "./SidebarNav";
import { Navigate } from "react-router-dom";

const ChatOfUser = (props) => {
    const { authenticated, exit, role, currentUser, location, onLogout } = props;
    if (!props.authenticated) {
        return <Navigate
            to={{
                pathname: "/login",
                state: { from: location }
            }} />;
    }
    return (
        <>
            <Header authenticated={props.authenticated} currentUser={props.currentUser} onLogout={props.onLogout} />
            <div >
            </div>
            <main id="main">
                <div className="wrapper">
                    <nav id="sidebar" className="sidebar js-sidebar">
                        <div className="sidebar-content js-simplebar">
                            <a className="sidebar-brand" href="index.html">
                            </a>
                            <SidebarNav />
                        </div>
                    </nav>
                    <div className="main">
                        <main style={{ margin: "20px 20px 20px 20px" }}>

                            <Message authenticated={props.authenticated} currentUser={props.currentUser} onLogout={props.onLogout} />

                        </main>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ChatOfUser;