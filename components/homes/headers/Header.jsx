"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Menu from "../menus/Menu";
import { menuItems } from "@/data/menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="techfee-header-area mb-30 ">
      <div className="container">
        <div className="techfee-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="techfee-header-logo">
                <Link className="site-logo" href="/">
                  <Image width={153} height={32} src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="techfee-header-menu text-right">
                <div
                  className={`menu-btn toggle_menu ${menuOpen && "active"} `}
                  onClick={() => setMenuOpen((pre) => !pre)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu ${menuOpen && "active"} `}>
            <Menu setMenuOpen={setMenuOpen} data={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
