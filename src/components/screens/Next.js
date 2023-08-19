import Card from "../common/card/Card";
import NewsCard from "../common/news/NewsCard";

const Next = () => {
  const newsList = [
    {
      id: 0,
      title: "HZEP partners with biggest marketing platform",
      data: "Hedge Zeppelin has recently partnered with biggest crypto marketing partner CMCCoin securing access to privileged access to its famous magazine 'CryptoMag'. This partnership also open future access for HZEP to CMCCoin's physical goods marketplace.",
      image: '/cmclogo.png',
    },
    {
      id: 1,
      title: "Hedge Zep is going live",
      data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Hedge Zep is going live",
      data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.pexels.com/photos/6780838/pexels-photo-6780838.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Hedge Zep is going live",
      data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.pexels.com/photos/14902677/pexels-photo-14902677.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="next-container" id="next">
      <div className="tok-title">In and around us</div>
      <div className="news-container">
        {newsList.map((item) => (
          <div className="news-item" key={item.id}>
            <Card>
              <NewsCard
                title={item.title}
                image={item.image}
                data={item.data}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Next;
