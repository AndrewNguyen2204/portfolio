
import { Route } from "react-router";
import WaterDrop from "../../components/WaterDrop/WaterDrop";
import "./MenuTemplate.css";






export const MenuTemplate = (props) => {


    const { Component, ...restProps } = props;


    return <Route {...restProps} render={propsRoute => {
        return <div className="homeTemplate-container">

            <Component {...propsRoute} />
        </div>
    }} />
}