"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bostami-header-area mb-30 ">
      <div className="container">
        <div className="bostami-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="bostami-header-logo">
                <Link className="site-logo" href="/">
                  <Image width={153} height={32} src="/assets/img/logo/logo-2.png" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
