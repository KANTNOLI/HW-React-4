import { useState } from "react";

import { NewsIntf } from "../../Interfaces.interface";
import style from "./News.module.css";

function News() {
  const [newNews, setNewNews] = useState<NewsIntf>({
    content: "",
    date: new Date(),
  });
  const [NewsList, setNewsList] = useState<NewsIntf[]>([
    {
      content: "CONTENT 1 CONTENT 1  CONTENT 1 CONTENT 1 CONTENT 1 ",
      date: new Date(),
    },
  ]);

  return (
    <section className={style.body}>
      <div className={style.panel}>
        <input
          type="text"
          placeholder="Write news"
          value={newNews.content}
          onChange={(e) =>
            setNewNews({
              content: e.target.value,
              date: new Date(),
            })
          }
        />
        <button onClick={() => setNewsList([...NewsList, newNews])}>
          Add news
        </button>
      </div>

      {NewsList.map((news, id) => (
        <div key={id} className={style.news}>
          <p className={style.content}>{news.content}</p>
          <p className={style.date}>
            {news.date.getDate()}.{news.date.getMonth() + 1}.
            {news.date.getFullYear()}
          </p>
        </div>
      ))}
    </section>
  );
}

export default News;
