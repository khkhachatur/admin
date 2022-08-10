import React, { useState } from "react";

import plus from "../../img/plusIcon.png";

import axios from "axios";
import { useForm } from "react-hook-form";
import { EventSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import "./eventStyle.css";

const app = "https://api.artfactory.am";

const AddEvent = () => {
  const postURL = "https://api.artfactory.am/api/Event/add/event";
  const [open, setOpen] = useState(false);

  const keyAxios = axios.create({
    headers: {
      ApiKey: "123Admin!@#",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EventSchema) });

  const onSubmit = (data) => {
    keyAxios.post(postURL, data);
    const storageRaf = app.storage().ref();
    const fileRef = storageRaf.child(data.Photo[0].name);
    fileRef.put(data.Photo[0]).then(() => {
      console.log("file aded");
    });
  };

  return (
    <div className="addArtistContainer">
      <div className="section">
        {open && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 10 }}>
              <label>Type</label>
              <input type="text" {...register("Type", { required: true })} />
              {errors.Type && <p>{errors.Type.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Location</label>
              <input
                type="text"
                {...register("Location", { required: true })}
              />
              {errors.Location && <p>{errors.Location.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Title</label>
              <input type="text" {...register("Title", { required: true })} />
              {errors.Title && <p>{errors.Title.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>DateTime</label>
              <input
                type="text"
                {...register("DateTime", { required: true })}
              />
              {errors.DateTime && <p>{errors.DateTime.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Funded By</label>
              <input
                type="text"
                {...register("FundedBy", { required: true })}
              />
              {errors.FundedBy && <p>{errors.FundedBy.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>About</label>
              <input type="text" {...register("About", { required: true })} />
              {errors.About && <p>{errors.About.message}</p>}
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                name="Photo"
                {...register("Photo", { required: true })}
              />
              {errors.Photo && <p>{errors.Photo.message}</p>}
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

export default AddEvent;
