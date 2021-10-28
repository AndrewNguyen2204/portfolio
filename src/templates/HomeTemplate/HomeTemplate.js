import { useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import "./HomeTemplate.css";
import Header from "./Layout/Header/Header";
import Menu from "./Layout/Menu/Menu";
import Overlay from "./Layout/OverLay/Overlay";
import UnderLay from "./Layout/UnderLay/UnderLay";
import Modal from "./Layout/Modal/Modal";
import { useEffect } from "react";


const useScrollToTop = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        // scroll to the top of the browser window when changing route
        // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
};


export const HomeTemplate = (props) => {

    useScrollToTop();

    const { Component, ...restProps } = props;

    const { open } = useSelector(state => state.MenuReducer);

    const { view } = useSelector(state => state.ModalReducer);

    const { pathname } = useLocation();



    return <Route {...restProps} render={propsRoute => {


        return <div className="template-container" >
            <Menu path={pathname} />
            {open ? '' : <>
                <Content view={view} propsRoute={propsRoute} Component={Component} />
                <Overlay />
                <UnderLay />
            </>}


        </div>
    }} />
}



function Content({ view, propsRoute, Component }) {


    return (
        <>
            {view ? <Modal /> : (
                <div className="template-content glass fade-in" >
                    <Header />
                    <Component {...propsRoute} />
                </div>
            )
            }

        </>
    )
}