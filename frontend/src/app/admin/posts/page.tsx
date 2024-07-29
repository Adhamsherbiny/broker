"use client";
import "./posts.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import building from "@/app/building.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAreaChart, faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function Post() {
  const details = useRef<any>();
  const pInfo = useRef<any>();

  useEffect(()=>{
    axios.get("http://localhost:5000/showposts")
    .then(response => response.data)
    .catch(err => console.log(err))
  })

  function showDetails() {
    if (details.current.style.display == "flex") {
      details.current.style.display = "none";
      pInfo.current.style.display = "none";
    } else {
      details.current.style.display = "flex";
      pInfo.current.style.display = "block";
    }
  }

  return (
    <div className="post-layout">
      <div className="container">
      <div className="post-model">
          <div className="post-img">
            <Image className="img" src={building} alt="" />
          </div>
          <div className="txt-section">
            <div className="info">
              <p>
                مدينة نصر الحى السادس شارع عباس العقاد تقطاع مصطفى النحاس بعد
                الكوبرى
              </p>
              <div className="details" ref={details}>
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faAreaChart} />
                  <p>140</p>
                </div>
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faBed} />
                  <p>3</p>
                </div>
                <div className="more-details">
                  <FontAwesomeIcon className="mdi" icon={faBath} />
                  <p>2</p>
                </div>
              </div>
              <div className="price-info" ref={pInfo}>
                <p>للبيع</p>
                <p>بسعر 1,680,000</p>
              </div>
            </div>
            <div className="post-control">
              <input type="button" value="Call" />
              <input type="button" value="Details" onClick={showDetails} />
              <input type="button" value="Edit" />
              <input type="button" value="Delete" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
