import React from 'react';
import NewsList from './NewsList';
import Header from './Header';
import Footer from './Footer';
import './NewsPage.css';

const NewsPage = ({ category }) => {
    return (
        <div className="news-page">
            <Header />
            <main>
                <h1>{category} News</h1>
                <NewsList category={category} count={8} />
            </main>
            <Footer />
        </div>
    );
};

export default NewsPage;