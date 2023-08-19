const NewsCard = ({ title, image, data }) => {
  return (
    <div className="news-card-container">
      <div className="news-img-container">
        <img src={image} width="100px" height="100px" alt="News" />
      </div>
      <div className="news-data-container">
        <div className="news-title">{title}</div>
        <div className="news-data">{data}</div>
      </div>
    </div>
  );
};

export default NewsCard;
