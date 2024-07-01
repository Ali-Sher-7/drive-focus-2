import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/Images";
const Footer = () => {
  return (
    <>
      <section className="footer1 pt-5 px-5">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-md-3 col-sm-6 pr-3">
              <h3 className="mb-5">PRODUCT</h3>
              <ul className="list-unstyled">
                <Link>
                  <li>Android Tablets</li>
                </Link>
                <Link>
                  <li>Window 11 and Fire tablets</li>
                </Link>
                <Link>
                  <li>iPads and Macs</li>
                </Link>
                <Link>
                  <li>Driving Analysis</li>
                </Link>
                <Link>
                  <li>Driving Analysis</li>
                </Link>
                <Link>
                  <li>Presentation Videos</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3 className="mb-5">VIDEO & PODCASTS</h3>
              <ul className="list-unstyled">
                <Link>
                  <li>Drive Focus Overview</li>
                </Link>
                <Link>
                  <li>How To Use Drive Focus</li>
                </Link>
                <Link>
                  <li>Drive Focus For Android User Guide</li>
                </Link>
                <Link>
                  <li>Drive Focus For Ios</li>
                </Link>
                <Link>
                  <li>Drive Focus Australia</li>
                </Link>
                <Link>
                  <li>Drive Focus And The Clinician</li>
                </Link>
                <Link>
                  <li>Podcast</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3 className="mb-5">FEATURES</h3>
              <ul className="list-unstyled">
                <Link>
                  <li>Frequently Asked Questions - iPad and M1 Mac</li>
                </Link>

                <Link>
                  <li>
                    Frequently Asked Questions - Android, Chromebook, Fire
                    Tablets,
                  </li>
                </Link>
                <Link>
                  <li>Privacy Policy</li>
                </Link>
                <Link>
                  <li>Student and Client Flyer</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-3 pr-3 col-sm-6">
              <h3 className="mb-5">GET STARTED</h3>
              <ul className="list-unstyled">
                <Link>
                  <li>How Everyone Can Benefit From Drive Focus</li>
                </Link>
                <Link>
                  <li>Drive Training Resources</li>
                </Link>
                <Link>
                  <li>Careers</li>
                </Link>
                <Link>
                  <li>
                    <img src={images.footerimg} alt="" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <p>
                Drive Focus® was created by the
                <a href="#">
                  <u>Driver Rehabilitation Institute</u>
                </a>
                , a 501(c)(3) nonprofit organization that that develops
                solutions for new drivers and people that have medical
                conditions or life experiences that affect their driving.
                Petaluma, California.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer2 text-center py-3 ">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <p>United States© 2023 All rights reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
