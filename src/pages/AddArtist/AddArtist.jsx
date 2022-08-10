import React, { useState } from "react";

import plus from "../../img/plusIcon.png";

import axios from "axios";
import { useForm } from "react-hook-form";
import { ArtistSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import "./artStyle.css";

const AddArtist = () => {
  const postURL = "https://api.artfactory.am/api/Artist/add/new";

  const [open, setOpen] = useState(false);

  const keyAxios = axios.create({
    headers: { ApiKey: "123Admin!@#" },
  });
  const app = "https://api.artfactory.am";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ArtistSchema) });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const onSubmit = (data) => {
    keyAxios.post(postURL, { ...data, Avatra: data.Avatar });
    const formData = new FormData();
    formData.append("file", file);
    console.log("formData:::", file);
  };

  return (
    <div className="addArtistContainer">
      <div className="section">
        {open && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 10 }}>
              <label className="">First Name</label>
              <input
                type="text"
                {...register("FirstName", { required: true })}
              />
              {errors.FirstName && <p>{errors.FirstName.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Last Name</label>
              <input
                type="text"
                {...register("LastName", { required: true })}
              />
              {errors.LastName && <p>{errors.LastName.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Country</label>
              <input type="text" {...register("Country", { required: true })} />
              {errors.Country && <p>{errors.Country.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Position</label>
              <input
                type="text"
                {...register("Position", { required: true })}
              />
              {errors.Position && <p>{errors.Position.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Biography</label>
              <input
                type="text"
                {...register("Biography", { required: true })}
              />
              {errors.Biography && <p>{errors.Biography.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Educations</label>
              <input
                type="text"
                {...register("Educations", { required: true })}
              />
              {errors.Educations && <p>{errors.Educations.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Exhibitions</label>
              <input
                type="text"
                {...register("Exhibitions", { required: true })}
              />
              {errors.Exhibitions && <p>{errors.Exhibitions.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Articles</label>
              <input
                type="text"
                {...register("Articles", { required: true })}
              />
              {errors.Articles && <p>{errors.Articles.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>Phone Number</label>
              <input
                type="text"
                {...register("PhoneNumber", { required: true })}
              />
              {errors.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}
            </div>
            <div>
              <label>Avatar</label>
              <input
                type="file"
                name="Avatar"
                {...register("Avatar", { required: true })}
              />
              {errors.Avatar && <p>{errors.Avatar.message}</p>}
            </div>
            <div>
              <label>File</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                {...register("files")}
                // {...register("file", { required: true })}
              />
              {errors.Avatar && <p>{errors.Avatar.message}</p>}
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
