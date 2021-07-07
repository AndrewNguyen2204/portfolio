
import { Route } from "react-router-dom";
import "./HomeTemplate.css";

export const HomeTemplate = (props) => {


    const { Component, ...restProps } = props;


    return <Route {...restProps} render={propsRoute => {
        return <div className="homeTemplate-container">
            <div className="homeTemplate-content">
                <Component {...propsRoute} />
            </div>
            <div className="planet planet_1">
                <img src="./images/planet_1.png" alt="Color-Glossy" />
            </div>
            <div className="planet planet_2">
                <img src="./images/planet_2.png" alt="Color-Glossy" />
            </div>
            <div className="planet planet_3">
                <img src="./images/planet_3.png" alt="Color-Glossy" />
            </div>
            <div className="planet planet_4">
                <img src="./images/planet_4.png" alt="Color-Glossy" />
            </div>
        </div>
    }} />
}