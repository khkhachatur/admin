import React, { useState } from "react";

import plus from "../../img/plusIcon.png";

import axios from "axios";
import { useForm } from "react-hook-form";
import { ArtWork } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import "./workStyle.css";

const AddArtist = () => {
  const postURL = "https://api.artfactory.am/api/works/add/work";
  const [open, setOpen] = useState(false);

  const app = "https://api.artfactory.am";

  const keyAxios = axios.create({
    headers: {
      ApiKey: "123Admin!@#",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ArtWork) });

  const onSubmit = (data) => {
    keyAxios.post(postURL, data);
    const storageRaf = app.storage().ref();
    const fileRef = storageRaf.child(data.Photos[0].name);
    fileRef.put(data.Photos[0]).then(() => {
      console.log("file aded");
    });
  };

  return (
    <div className="addArtistContainer">
      <div className="section">
        {open && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 10 }}>
              <label>Artist Id</label>
              <input
                type="text"
                {...register("ArtistId", { required: true })}
              />
              {errors.ArtistId && <p>{errors.ArtistId.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Work Name</label>
              <input
                type="text"
                {...register("WorkName", { required: true })}
              />
              {errors.WorkName && <p>{errors.WorkName.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Size</label>
              <input type="text" {...register("Size", { required: true })} />
              {errors.Size && <p>{errors.Size.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Material</label>
              <input
                type="text"
                {...register("Material", { required: true })}
              />
              {errors.Material && <p>{errors.Material.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Price</label>
              <input type="text" {...register("Price", { required: true })} />
              {errors.Price && <p>{errors.Price.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>About</label>
              <input type="text" {...register("About", { required: true })} />
              {errors.About && <p>{errors.About.message}</p>}
            </div>
            <div>
              <label>Photos</label>
              <input
                type="file"
                name="Photos"
                {...register("Photos", { required: true })}
              />
              {errors.Photos && <p>{errors.Photos.message}</p>}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {!open && (
          <>
            <button className="buttonPlus" onClick={() => setOpen(true)}>
              <img src={plus} alt="" />
            </button>
            <h2 style={{ fontFamily: "montserrat", fontWeight: "400" }}>
              Add Artists
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default AddArtist;
