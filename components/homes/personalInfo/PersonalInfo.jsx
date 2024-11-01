import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function PersonalInfo() {
  return (
    <div className="col-xxl-3 col-xl-3">
      <div className="techfee-parsonal-info-area">
        <div className="techfee-parsonal-info-wrap">
          <div className="techfee-parsonal-info-img">
            <Image width={240} height={240} src={profileInfo.imageSrcOne} alt="avatar" />
          </div>

          <h4 className="techfee-parsonal-info-name">
            <a href="#">{profileInfo.name}</a>
          </h4>
          <span className="techfee-parsonal-info-bio mb-15">{profileInfo.title}</span>

          <ul className="techfee-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a style={{ color: elm.color }} href={elm.href} target="_blank">
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>

          <div className="techfee-parsonal-info-contact mb-30">
            {contactData.map((elm, i) => (
              <div key={i} className="techfee-parsonal-info-contact-item">
                <div style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }} className="icon">
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{elm.text.label}</span>
                  <p>{elm.text.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="techfee-parsonal-info-btn">
            <a className="btn-1" href="/CV_SatV.Nguyen_ProjectLeader.pdf" download>
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
