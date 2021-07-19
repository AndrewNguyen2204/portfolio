
import { Route } from "react-router-dom";
import WaterDrop from "../../components/WaterDrop/WaterDrop";
import "./HomeTemplate.css";
import Header from "./Layout/Header";





export const HomeTemplate = (props) => {


    const { Component, ...restProps } = props;


    return <Route {...restProps} render={propsRoute => {
        return <div className="homeTemplate-container">
            <div className="homeTemplate-content glass">
                <Header />
                <Component {...propsRoute} />
            </div>
            <div className="planet planet_1">
                <WaterDrop />
            </div>
            <div className="planet planet_2">
                <img src="./images/planet_2.png" alt="Color-Glossy" />
            </div>
            <div className="planet planet_3">
                <WaterDrop />
            </div>
            <div className="planet planet_4">
                <img src="./images/planet_4.png" alt="Color-Glossy" />
            </div>
        </div>
    }} />
}