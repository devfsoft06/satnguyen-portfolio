import { education } from "@/data/education";
import Image from "next/image";
import React from "react";

export default function Education() {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="techfee-section-title-wrap mb-20">
        <h4 className="section-title">Education</h4>
      </div>

      <div className="techfee-card-wrap">
        {education.map((elm, i) => (
          <div className={`techfee-card-item ${elm.bgClass} ${i + 1 != education.length && "mb-20"} `}>
            <span className="card-subtitle">{elm.session}</span>
            <h6 className="card-title">
              {elm.cardTitle} <span>- {elm.cardSubtitleSecondary}.</span>
            </h6>
            <p className="card-text">{elm.locatopn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
