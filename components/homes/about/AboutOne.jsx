"use client";

import React from "react";
import { bioData } from "@/data/bioData";
import { items } from "@/data/jobFeatures";

export default function AboutOne() {
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="techfee-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="techfee-page-title-wrap mb-15">
            <h2 className="page-title">About</h2>
            <p>{bioData.descOne}</p>
            <p>{bioData.descTwo}</p>
          </div>
        </div>
        <div className="section-wrapper pl-60 pr-60">
          <div className="techfee-section-title-wrap mb-30">
            <h3 className="section-title">What I Do</h3>
          </div>
          <div className="techfee-what-do-wrap mb-30">
            <div className="row">
              {items.slice(0, 6).map((elm, i) => (
                <div key={i} className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className={`techfee-what-do-item ${elm.bg} `}>
                    <div className="text">
                      <h4 className="title">{elm.title}</h4>
                      <p>{elm.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center pt-25 pb-25">
          <span>© {new Date().getFullYear()} All Rights Reserved by Sat Nguyen.</span>
        </div>
      </div>
    </div>
  );
}
