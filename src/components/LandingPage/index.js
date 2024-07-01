import React from "react";
import Header from "../../assets/generic/Header";
import { images } from "../../assets/Images";
import { Link } from "react-router-dom";
import Footer from "../../assets/generic/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />

      <section className="car">
        <div className="container-fluid ">
          <div className="row ">
            <div className="cardiv col-md-6">
              <div className="bgText pl-0">FW</div>
              <p className="pl-5">MOVE WHEELS WITH FOCUS</p>
            </div>
            <div className="col-md-6 d-flex align-items-center  p-0">
              <img src={images.fsecCar} className="carimg" />
            </div>
          </div>
        </div>
      </section>

      <section className="videoDriving">
        <div className="">
          <div className="row w-100">
            <div className="col-md-1">
              <img src={images.leftCircle} alt="" className="cornerCircle" />
            </div>
            <div className="col-md-10 col-sm-12">
              <h1 className="text-white text-center">
                Video Driving Simulator For
              </h1>
              <div className="PcTabdiv">
                <div className="row pt-5 pc-tab-row">
                  <div className="col-md-4 col-sm-6">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0 d-flex justify-content-end align-items-center">
                          <div class=" p-0">
                            <img src={images.tab} class="" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">iPad & iPhone </h5>
                            <p class="card-text">
                              This application is available on both of these
                              iPad and iPhone
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0  d-flex justify-content-end align-items-center">
                          <div class=" p-0">
                            <img src={images.tab} class="" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">M1 mac </h5>
                            <p class="card-text">
                              This application is available on both of these
                              ipad and M1 mac
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0 d-flex justify-content-end align-items-center">
                          <div class="  p-0">
                            <img src={images.tab} class="" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Android Tablet </h5>
                            <p class="card-text">
                              This application is available on Android Tablets
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 pc-tab-div-p pt-5">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0 d-flex justify-content-end align-items-center ">
                          <div class=" p-0">
                            <img src={images.pc} class="pcimg" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Chromebook </h5>
                            <p class="card-text">
                              This application is available on Chromebook
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 pc-tab-div-p pt-5">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0 d-flex justify-content-end align-items-center">
                          <div class="  p-0">
                            <img src={images.tab} class="" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Fire Tablets </h5>
                            <p class="card-text">
                              This application is available on Fire Tablets
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 pc-tab-div-p pt-5">
                    <div class="card ">
                      <div class="row g-0">
                        <div class="col-md-12 pl-0 d-flex justify-content-end align-items-center">
                          <div class="  p-0">
                            <img src={images.pc} class="pcimg" alt="..." />
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">Window 11</h5>
                            <p class="card-text">
                              This application is available on Window 11
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <img src={images.rightCircle} alt="" className="cornerCircle2" />
            </div>
          </div>
        </div>
      </section>
      <section className="driverTraining ">
        <div className="clouddiv h-100 w-100">
          <div className="row w-100 ">
            <div className="col-md-6">
              <h1 className="text-center text-white py-2">
                Advanced Driver Training
              </h1>
              <div className="uldiv mt-4">
                <ul>
                  <li>Takes driver training to the next level</li>
                  <li>For all ages and abilities</li>
                  <li>Based on more than 20 years of research</li>
                  <li>Improves critical driving reaction speed</li>
                  <li>Improves road awareness</li>
                  <li>Perfect companion for driver education</li>
                  <li>Great tool for driver rehabilitation</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 w-100 h-100 pt-5">
              <div className="row w-100 h-100 pt-5">
                <div className="col-md-6 col-sm-6 col-6 mb-5 text-center">
                  <img src={images.dtamazon} className="w-75 dtImg" alt=".." />
                  <h3>Android, Amazon Fire Tablets</h3>
                </div>
                <div className="col-md-6 col-sm-6 col-6 text-center">
                  <img src={images.dtAstore} className="w-75 dtImg" alt=".." />
                  <h3>iPad and M1 Mac</h3>
                </div>
                <div className="col-md-6 col-sm-6 col-6 text-center">
                  <img src={images.dtGplay} className="w-75 dtImg" alt=".." />
                  <h3 className="">Windows 11</h3>
                </div>
                <div className="col-md-6 col-sm-6 col-6 text-center">
                  <img
                    src={images.dtmicrosoft}
                    className="w-75 dtImg"
                    alt=".."
                  />
                  <h3 className="">Android and Chromebook</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="readyToDrive py-5">
        <div className="container-fluid pt-4">
          <div className="px-5 mx-5">
            <div className="text-center">
              <h1 className="mb-4">Get Ready To Drive</h1>
              <p className="">
                Prepare to hit the road with confidence – your driving journey
                starts here!
              </p>
            </div>
            <div className="row">
              <div className="col-md-12 py-3 px-5 mb-5 mt-3 innerdiv bg-white rounded">
                <div className="d-flex">
                  <div>
                    <h3>1</h3>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ml-5 mr-2 h6div">
                    <h6>
                      Get ready to watch immersive HD videos, from the driver’s
                      point of view to get more comfortable about driving rules
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-12  py-3 px-5 mb-5 innerdiv bg-white rounded">
                <div className="d-flex">
                  <div>
                    <h3>2</h3>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ml-5 mr-2 h6div">
                    <h6>
                      Improve your ability to notice and react to real-life
                      driving situations, boosting your confidence behind the
                      wheel
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-12  py-3 px-5 mb-5 innerdiv bg-white rounded">
                <div className="d-flex">
                  <div>
                    <h3>3</h3>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ml-5 mr-2 h6div">
                    <h6>
                      Provides detailed scoring to document your progress,
                      allowing you to evaluate your skills at every step
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="confidentDriver">
        <div className="container-fluid">
          <div className="text-center">
            <h1>Become the confident driver</h1>
            <div className="btmborder"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 px-4 colcard">
              <div class="card h-100">
                <div className="d-flex justify-content-center">
                  <img
                    src={images.endorsedImg}
                    class="card-img-top"
                    alt="..."
                    className="w-50"
                  />
                </div>
                <div class="card-body text-center">
                  <Link
                    href="#"
                    class="btn rounded-pill px-4 py-2 cdlink"
                    id="cdlink-endorsed"
                  >
                    Endorsed
                  </Link>
                  <p class="card-text">
                    Recommended by top driving school and educational
                    institutions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 px-4 colcard">
              <div class="card h-100">
                <div className="d-flex justify-content-center">
                  <img
                    src={images.usersImg}
                    class="card-img-top"
                    alt="..."
                    className="w-50"
                  />
                </div>
                <div class="card-body text-center">
                  <Link
                    href="#"
                    class="btn rounded-pill px-5 py-2 cdlink cdlink-user "
                    id="cdlink-user"
                  >
                    Users
                  </Link>
                  <p class="card-text">
                    Used by transit, ambulance and commercial trucking firms
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-4 colcard">
              <div class="card h-100">
                <div className="d-flex justify-content-center">
                  <img
                    src={images.therapyImg}
                    class="card-img-top"
                    alt="..."
                    className="w-50 "
                  />
                </div>
                <div class="card-body text-center">
                  <Link href="#" class="btn rounded-pill px-4 py-2 cdlink">
                    Therapy
                  </Link>
                  <p class="card-text">
                    Used at major rehabilitation facilities to address visual
                    attention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="personalDriving">
        <div className="">
          <div className="pdheadbg">
            <div className="d-flex justify-content-center pdHead-div py-5">
              <h1 className="text-center px-5 py-2">
                Like your personal driving simulator
              </h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row pd-row w-100 m-0">
              <div className="col-md-6 d-flex justify-content-center align-items-center ">
                <ul>
                  <li>
                    Practice key driving skills on your computer or tablet
                  </li>
                  <li>Helps improve your situational awareness</li>
                  <li>
                    Designed for easy navigation and engagement, ensuring a
                    positive learning experience.
                  </li>
                  <li>
                    Includes challenging drives throughout Australia, Canada,
                    and the United States filmed by professional driving school
                    instructors
                  </li>
                </ul>
              </div>
              <div className="col-md-6 w-100">
                <img src={images.bridgeImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cardSection">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <h1 className="px-5 py-3">Like your personal driving simulator</h1>
          </div>
          <div className="borderbtm"></div>
          <div className="row">
            <div className="col-md-4 p-0 d-flex justify-content-center">
              <div class="card  text-center h-100 w-100">
                <div class="card-body">
                  <h2 class="card-title">01</h2>

                  <p class="card-text text-center d-flex justify-content-center align-items-center h-25">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0 d-flex justify-content-center">
              <div class="card  text-center h-100 pb-5 w-100">
                <div class="card-body">
                  <h2 class="card-title">02</h2>

                  <p class="card-text text-center d-flex justify-content-center">
                    Provides ability to oversee the visual attentiveness, speed
                    of processing, and driving cognition for groups of users
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0 d-flex justify-content-center">
              <div class="card text-center h-100 w-100">
                <div class="card-body">
                  <h2 class="card-title">03</h2>
                  <p class="card-text text-center d-flex justify-content-center align-items-center h-25">
                    Understand what the user sees as they drive
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="text-center px-5 py-2">Learn more</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
