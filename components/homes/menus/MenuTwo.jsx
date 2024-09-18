"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/data/menu";

export default function MenuTwo() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const addDarkbg = () => {
    if (document.body.style.backgroundImage != "url(/assets/img/bg/page-bg-dark-1.jpg") {
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-dark-1.jpg";

      setDarkMode(true);
    }
  };

  const addlightBg = () => {
    if (document.body.style.backgroundImage != "url(/assets/img/bg/page-bg-1.jpg)") {
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-1.jpg)";

      setDarkMode(false);
    }
  };

  useEffect(() => {
    const currentState = localStorage?.getItem("idDarkMode");
    if (JSON.parse(currentState) == true) {
      document.body.classList.add("dark-theme");
      addDarkbg();
    } else {
      document.body.classList.remove("dark-theme");
      addlightBg();
    }
  }, []);

  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idDarkMode");

    if (JSON.parse(currentState) == true) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");

      addlightBg();
    } else {
      localStorage?.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };

  return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="techfee-main-menu-wrap">
        <nav className="bastami-main-menu main_menu">
          <div className="bostami-header-menu-btn text-right">
            <div className="dark-btn dark-btn-stored mode-btn" onClick={() => handleDarkmode()}>
              {darkMode ? (
                <i className="sunicon fa-light fa-sun-bright"></i>
              ) : (
                <i className="moonicon fa-solid fa-moon"></i>
              )}
            </div>
          </div>
          <ul>
            {menuItems.map((elm, i) => (
              <li className={`${pathname == elm.href && "active"}  `} key={i}>
                <Link href={elm.href}>
                  <span>
                    <i style={{ fontSize: "25px" }} className={elm.icon}></i>
                  </span>
                  {elm.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
