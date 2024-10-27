import React, { useState, useEffect } from 'react';
import './NewsList.css';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Placeholder function to simulate fetching data based on category
    const fetchArticles = async () => {
      // Simulated data
      const staticData = [
        {
          "source": {
            "id": null,
            "name": "Christianconcern.com"
          },
          "author": "Tim Dieppe",
          "title": "Why Welby should resign",
          "description": "Welby's logic is actually completely backwards.",
          "url": "https://christianconcern.com/comment/archbishop-abandons-doctrine-to-approve-of-same-sex-intimacy/",
          "urlToImage": "https://christiantoday-4cf9.kxcdn.com/en/full/78969/justin-welby.png?p=142298&w=760&l=45&t=30",
          "publishedAt": "2024-10-26T10:47:01Z",
          "content": "Christian Concern's Head of Public Policy Tim Dieppe comments on Justin Welby's recent dismissal of Christian teaching by approving of sexual immorality.\r\nA formal statement from the Archbishop of Ca… [+12144 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Responsiblestatecraft.org"
          },
          "author": "Anatol Lieven",
          "title": "From Ukraine to Gaza, the Recklessness of Biden Cannot Be Ignored",
          "description": "President Joe Biden has called\r\n America “the world power,” and has referred\r\n to his “leadership in the world.” If Biden does indeed see himself as a, or the, world leader, then he has been disappointing in his job and has mismanaged it.The world today stand…",
          "url": "https://responsiblestatecraft.org/joe-biden/",
          "urlToImage": "https://www.commondreams.org/media-library/u-s-president-joe-biden-meets-with-european-leaders-in-berlin.jpg?id=53888856&width=1200&height=600&coordinates=0%2C89%2C0%2C89",
          "publishedAt": "2024-10-26T10:45:03Z",
          "content": "President Joe Biden has called\r\n America the world power, and has referred\r\n to his leadership in the world. If Biden does indeed see himself as a, or the, world leader, then he has been disappointin… [+4912 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Madeline Coggins",
          "title": "Harris 'regime' torched for 'pandering' to women voters on abortion: 'Only thing I'm allowed to care about'",
          "description": "Young voter panelists CJ Pearson, Isabel Brown, Link Lauren and Reed Cleland discuss the 2024 presidential election and top issues for voters under 30.",
          "url": "https://www.foxnews.com/media/young-voter-turned-off-harris-pandering-seems-like-abortion-only-thing-im-allowed-care-about",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/kamala-harris-campaign-trail.jpg",
          "publishedAt": "2024-10-26T11:15:52Z",
          "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+4374 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Cut"
          },
          "author": "Kathryn Jezer-Morton",
          "title": "Why Isn’t Halloween Scary Anymore?",
          "description": "In this edition of ‘Brooding,’ Kathryn Jezer-Morton reflects that Halloween isn’t as scary now as it was during her childhood. Nowadays, it’s more of an aesthetic experience than a creepy one.",
          "url": "http://www.thecut.com/article/brooding-halloween-scary-for-kids.html",
          "urlToImage": "https://pyxis.nymag.com/v1/imgs/b7d/4bc/88a3f48cee166fd66968bb6e8a46d4a415-halloween.1x.rsocial.w1200.jpg",
          "publishedAt": "2024-10-26T11:00:03Z",
          "content": "New York subscribers got exclusive early access to this story in our Brooding newsletter. Sign up here to get it in your inbox.\r\nWhen I was 10, I was living in the rural Northeast. That Halloween, on… [+8592 chars]"
        },
      ];

      // Currently filtering based on a placeholder property; replace with real data filtering if necessary
      const filteredArticles = staticData; // Replace this if you want to filter articles
      setArticles(filteredArticles);
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="news-list">
      <div className="news-header">
        <h2>{category} News</h2>
        <a href="#seeAll" className="see-all">See All</a>
      </div>
      <div className="news-items">
        {articles.map((article, index) => (
          <div key={index} className="news-item">
            <div className="image-container">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="news-info">
              <span className="category">{article.source.name}</span>
              <h3 className="title">{article.title}</h3>
              <p className="author">by {article.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
