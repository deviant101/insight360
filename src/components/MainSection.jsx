// MainSection.js
import React from 'react';
import './MainSection.css';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="featured-article">
                <img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.QRW97gHwB8/v0/1200x800.jpg" // Replace with the actual featured image
                    alt="Featured Article"
                    className="featured-image"
                />
                <div className="featured-content">
                    <h2 className="featured-category">Technology</h2>
                    <h1 className="featured-title">
                        TSMC Cuts Off Client After Discovering Chips Diverted to Huawei - Bloomberg
                    </h1>
                    <p>Taiwan Semiconductor Manufacturing Co. discovered this month that chips it made for a specific customer ended up with Huawei Technologies Co., a potential violation of US sanctions intended to sever the flow of technology to a Chinese national champion.</p>
                    <p className="featured-author">by Debby Wu</p>
                </div>
            </div>

            <div className="side-articles">
                <div className="side-article">
                    <img
                        src="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3626b2f498f270e7b29735125475956a.jpg" // Replace with actual image
                        alt="Side Article 1"
                        className="side-article-image"
                    />
                    <div className="side-article-content">
                        <h3 className="side-category">Technology</h3>
                        <h2 className="side-title">The Dow drops 250 points as McDonald's stock slumps with Tesla earnings up next</h2>
                        <p className="side-author">by Vinamrata Chaturvedi</p>
                    </div>
                </div>

                <div className="side-article">
                    <img
                        src="https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676" // Replace with actual image
                        alt="Side Article 2"
                        className="side-article-image"
                    />
                    <div className="side-article-content">
                        <h3 className="side-category">Technology</h3>
                        <h2 className="side-title">UK challenger bank Monzo nabs another $190M as US expansion beckons | TechCrunch</h2>
                        <p className="side-author">by Paul Sawers</p>
                    </div>
                </div>

                <div className="side-article">
                    <img
                        src="https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900" // Replace with actual image
                        alt="Side Article 3"
                        className="side-article-image"
                    />
                    <div className="side-article-content">
                        <h3 className="side-category">Technology</h3>
                        <h2 className="side-title">Controversial drone company Xtend leans into defense with new $40M round | TechCrunch</h2>
                        <p className="side-author">by Kyle Wiggers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
