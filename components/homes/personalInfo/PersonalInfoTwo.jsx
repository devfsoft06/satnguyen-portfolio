import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function PersonalInfoTwo() {
  return (
    <div className="col-12">
      <div className="techfee-parsonal-info-area techfee-parsonal-info-2-area">
        <div className="techfee-parsonal-info-wrap">
          <div className="techfee-parsonal-info-img">
            <Image width={240} height={240} src={profileInfo.imageSrcTwo} alt="profile" />
          </div>

          <h4 className="techfee-parsonal-info-name">
            <a href="#">{profileInfo.name}</a>
          </h4>
          <span className="techfee-parsonal-info-bio mb-15">{profileInfo.title}</span>

          <ul className="techfee-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a style={{ color: elm.color }} href={elm.href}>
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>

          <div className="techfee-parsonal-info-btn">
            <a className="btn-2 circle" href="/cv.pdf" download>
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              download cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
