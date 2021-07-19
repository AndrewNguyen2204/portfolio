import React from 'react';
import './Portfolio.css';
import Button from '../../components/Button/Button';

export default function Portfolio(props) {
    return (
        <div className="portfolio container mx-auto">
            <div className="row">
                <div className="page-title">
                    <h2>recent work</h2>
                </div>
            </div>
            <div className="portfolio-content grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="portfolio-item">
                    <div className="portfolio-item-thumbnail bg-white bg-opacity-25 p-4 rounded-md">
                        <img src="https://picsum.photos/600/400" alt="item1" className="w-full rounded-md" />
                    </div>
                    <h3 className="text-2xl my-10">item's name</h3>
                    <Button>view detail</Button>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item-thumbnail bg-white bg-opacity-25 p-4 rounded-md">
                        <img src="https://picsum.photos/600/400" alt="item1" className="w-full rounded-md" />
                    </div>
                    <h3 className="text-2xl my-10">item's name</h3>
                    <Button>view detail</Button>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item-thumbnail bg-white bg-opacity-25 p-4 rounded-md">
                        <img src="https://picsum.photos/600/400" alt="item1" className="w-full rounded-md" />
                    </div>
                    <h3 className="text-2xl my-10">item's name</h3>
                    <Button>view detail</Button>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item-thumbnail bg-white bg-opacity-25 p-4 rounded-md">
                        <img src="https://picsum.photos/600/400" alt="item1" className="w-full rounded-md" />
                    </div>
                    <h3 className="text-2xl my-10">item's name</h3>
                    <Button>view detail</Button>
                </div>
                
            </div>
        </div>
    )
}
