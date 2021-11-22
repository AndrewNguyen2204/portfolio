import React from 'react';
import './Portfolio.css';
import Button from '../../components/Button/Button';
import { PROJECTS } from './Projects';
import { useDispatch } from 'react-redux';
import { openModalAction } from '../../redux/actions/ModalAction';


export default function Portfolio(props) {

    const dispatch = useDispatch();


    const renderCard = () => {


        return PROJECTS.map((project) => {

            const handleClick = () => {
                dispatch(openModalAction(<ProjectDetail project={project} />));

            }



            return (
                <div
                    key ={project.id}
                    className="portfolio-item">
                    <div className="portfolio-item-thumbnail">
                        <img
                            src={project.srcImg}
                            alt={project.name}
                            className="w-full h-full rounded-[inherit]" />
                    </div>
                    <div className="portfolio-item-info flex-1">
                        <h3>{project.name}</h3>
                        <div>
                            <Button onClick={handleClick}>details</Button>
                        </div>
                    </div>
                </div>
            )

        })
    }



    return (

        <section className="portfolio fade-in">
            <div className="row">
                <div className="page-title">
                    <h2 className="mt-10">recent work</h2>
                </div>
            </div>
            <div className="portfolio-content grid gap-3 lg:gap-6 grid-flow-col auto-cols-[95%] md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 overflow-hidden overflow-x-auto">

                {renderCard()}

            </div>
        </section>



    )
}




function ProjectDetail({ project }) {

    const {
        srcImg,
        name,
        description,
        created,
        technologies,
        role,
        url,
        source
    } = project;


    return (
        <div className="details-container">
            <div className="details-content flex flex-col">
                <div className="details-image">
                    <img className="h-full w-full rounded-[20px]" src={srcImg} alt={name} />
                </div>
                <div className="details-title my-10">
                    <h1 className="sm:text-2xl font-bold mb-5">{name}</h1>
                    <p className="text-sm sm:text-xl">{description}</p>
                </div>
                <div className="details-text">
                    <p><b>Created - </b>{created}</p>
                    <p><b>Technologies Used - </b>{technologies}</p>
                    <p><b>Role - </b>{role}</p>
                    <p><b>View Live - </b>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={url}
                            className="text-[color:var(--blue)] hover:text-[color:var(--primary-color)] break-all">{url}
                        </a>
                    </p>
                    <p><b>Source Code - </b>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={source}
                            className="text-[color:var(--blue)] hover:text-[color:var(--primary-color)] break-all" >{source}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )

}