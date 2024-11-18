// MainSection.js
import React from 'react';
import './MainSection.css';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="featured-article">
                <img
                    src="https://s.yimg.com/ny/api/res/1.2/h9jln2vOKlO_30MlTGbSZQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/9e44f91cd324acd17b861b21a141629f" // Replace with the actual featured image
                    alt="Featured Article"
                    className="featured-image"
                />
                <div className="featured-content">
                    <h2 className="featured-category">Technology</h2>
                    <h1 className="featured-title">
                        Boeing’s CEO Is Shrinking the Jet Maker to Stop Its Crisis From Spiraling
                    </h1>
                    <p>Warner Bros. Discovery and the NBA have settled their lawsuit with Disney agreeing to license the TNT show "Inside the NBA" to ESPN and ABC starting next season the key point of the agreement.\nWBD's digital platforms, Bleacher Report and House of Highlights, …</p>
                    <p className="featured-author">by Sharon Terlep</p>
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
                        src="https://www.reuters.com/resizer/v2/LGMX3DVNZNLGVN3IH766SRCNPI.jpg?auth=5bf3fecf3659696fa0c55ec601912d9e09344d68396ccbf6841093f52fcd55e6&height=1005&width=1920&quality=80&smart=true" // Replace with actual image
                        alt="Side Article 2"
                        className="side-article-image"
                    />
                    <div className="side-article-content">
                        <h3 className="side-category">Politics</h3>
                        <h2 className="side-title">Headwinds hit Trump-fueled rally in US stocks - Reuters</h2>
                        <p className="side-author">by Lewis Krauskopf</p>
                    </div>
                </div>

                <div className="side-article">
                    <img
                        src="https://media.zenfs.com/en/reuters-finance.com/4b0a577a71f33983c6caeef5cb387342" // Replace with actual image
                        alt="Side Article 3"
                        className="side-article-image"
                    />
                    <div className="side-article-content">
                        <h3 className="side-category">Technology</h3>
                        <h2 className="side-title">Shares rise ahead of Nvidia results; BOJ keeps rates markets guessing - Yahoo Finance</h2>
                        <p className="side-author">by Samuel Indyk and Rae Wee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
