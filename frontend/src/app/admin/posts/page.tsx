"use client";
import "./posts.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import building from "@/app/building.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAreaChart, faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function Post() {
  const [post , setPost] = useState<any>([])
  useEffect(()=>{
    axios.get("http://localhost:5000/showposts")
    .then((response) => {
      setPost(response.data.posts)
    })
    .catch(err => console.log(err))
  })

  return (
    <div className="post-layout">
      <div className="container">
{
  post.map((data:any)=>(
    <div className="post-model" key={data.id}>
          <div className="post-img">
            <Image className="img" src={building} alt="" />
          </div>
          <div className="txt-section">
            <div className="info">
              <p>{data.adress}</p>
              <div className="details" >
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faAreaChart} />
                  <p>{data.area}</p>
                </div>
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faBed} />
                  <p>{data.rooms}</p>
                </div>
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faBath} />
                  <p>{data.bathrooms}</p>
                </div>
              </div>
              <div className="price-info">
                <p>{data.type}</p>
                <p>{data.price}</p>
              </div>
            </div>
            <div className="post-control">
              <input type="button" value="Edit" />
              <input type="button" value="Delete" />
            </div>
          </div>
        </div>

  ))
}


        
      </div>
    </div>
  );
}
