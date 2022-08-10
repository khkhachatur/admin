import React, { useEffect, useState } from "react";
import axios from "axios";

import del from "../../img/trash-bin.png";

import "./style.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  const keyAxios = axios.create({
    headers: {
      ApiKey: "123Admin!@#",
    },
  });

  useEffect(() => {
    axios.get("https://api.artfactory.am/api/Artist/all").then(({ data }) => {
      // console.log("data ---->", res.data);
      setData(data);
    });
  }, []);

  const dell = (id) => {
    keyAxios.delete(
      `https://api.artfactory.am/api/Artist/delete?artistId=${id}`
    );
    console.log(id);
  };

  return (
    <>
      <div className="allListContainer">
        <h1 className="homeTitle">List of Artits</h1>
        <div className="list">
          {data.map((item) => (
            <div className="allList" key={item.id}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  background: `url(${item.avatarUrl}) center center/cover no-repeat`,
                }}
              ></div>
              <p className="name">{item.firstName}</p>
              <p className="name">{item.lastName}</p>
              <button onClick={() => dell(item?.id)} className="delButton">
                <img src={del} className="delIcon" alt="icon not found" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
