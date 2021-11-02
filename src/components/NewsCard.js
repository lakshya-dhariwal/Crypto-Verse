import React from "react";

function NewsCard({ newsItem }) {
  console.log(newsItem);
  return (
    <>
      <a
        href={newsItem.guid}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className=" container border card">
          <h3>{newsItem.title}</h3>
          <p>{newsItem.body}</p>
          <div>
            <h6>{newsItem.source}</h6>

            <img
              src={newsItem.imageurl ? newsItem.imageurl : "logo512.png"}
              style={{ width: "10rem" }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <br />
        </div>
      </a>
    </>
  );
}

export default NewsCard;
