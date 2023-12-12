import { useState } from "react";
import axios from "axios";
import "../App.css";

function TopBanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    day: '',
    month: '',
    city: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = axios.post('https://onlinecu.edept.co/send-mail.php', {
        name:formData.name,
        email : formData.email,
        phone:formData.phone,
        city:formData.city,
        program : formData.program,
        dob : formData.month+'/'+formData.day+'/'+formData.year
      }).then((res)=>{
        alert("Registration successful");
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          day: '',
          city : '',
          month: '',
          year: '',
        });
      });

      const data = await response.json();
      console.log('Response from PHP backend:', data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <section className="hero-banner position-relative" id="home">
      <div
        className="banner-overlay position-absolute top-0 start-0 end-0 bottom-0 pt-5"
        style={{ zIndex: 1 }}
      >
        <div className="container">
          <div
            className="signUp-form bg-white border-bottom shadow-sm p-4 border-radius ms-auto"
            id="signup"
          >
            <form
            onSubmit={e => e.preventDefault()}
            noValidate
        autoComplete="off"
            >
              <div className="aspNetHidden">
                <input
                  type="hidden"
                  name="__EVENTTARGET"
                  id="__EVENTTARGET"
                  defaultValue
                />
                <input
                  type="hidden"
                  name="__EVENTARGUMENT"
                  id="__EVENTARGUMENT"
                  defaultValue
                />
                <input
                  type="hidden"
                  name="__VIEWSTATE"
                  id="__VIEWSTATE"
                  defaultValue="/wEPDwUKLTI1OTY5MTU0NQ8WAh4TVmFsaWRhdGVSZXF1ZXN0TW9kZQIBZGQwkgeCaG/Gd64b6rz39aV/ev6eJZ6XzFpzZb9Cm4Ubzw=="
                />
              </div>
              <div className="aspNetHidden">
                <input
                  type="hidden"
                  name="__VIEWSTATEGENERATOR"
                  id="__VIEWSTATEGENERATOR"
                  defaultValue={90059987}
                />
              </div>
              <div className="register-form-container" id="div_regform">
                <h3 className="mb-3">
                  Sign up for a free career counselling session!
                </h3>
                <div className="register-form">
                  <input type="hidden" name="hfSource" id="hfSource" />
                  <input
                    type="hidden"
                    name="hfPreviousPageUrl"
                    id="hfPreviousPageUrl"
                  />
                  <input
                    type="hidden"
                    name="hfRegFormType"
                    id="hfRegFormType"
                  />
                  <div className="row g-2">
                    <div className="mb-2 col-md-12 col-6">
                      <div className="position-relative">
                        <input
                          name="name"
                          type="text"
                          maxLength={95}
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          value={formData.name} onChange={handleChange}
                        />
                        <span
                          id="rfvStudentName"
                          style={{ visibility: "hidden" }}
                        >
                          Enter Name
                        </span>
                      </div>
                    </div>
                    <div className="mb-2 col-md-12 col-6">
                      <div className="position-relative">
                        <input
                          name="email"
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          value={formData.email} onChange={handleChange}
                        />
                        <span id="rfvEmailId" style={{ visibility: "hidden" }}>
                          Enter Email Id
                        </span>
                        <span id="rfvEmailId1" style={{ visibility: "hidden" }}>
                          Email Id not valid
                        </span>
                        <img
                          id="imgLoading_Email"
                          src="assets/images/loading.svg"
                        />
                        <img id="imgLoading_Email_Ok" />
                      </div>
                    </div>
                    <div className="mb-2 col-md-12 col-6">
                      <div className="position-relative">
                        <input
                          name="phone"
                          maxLength={20}
                          id="phone"
                          className="form-control"
                          type="tel"
                          placeholder="Mobile Number"
                          required
                          value={formData.phone} onChange={handleChange}
                        />
                        <span id="rfvMobileNo" style={{ visibility: "hidden" }}>
                          In correct Mobile Number
                        </span>
                        <span
                          id="rfvMobileNo1"
                          style={{ visibility: "hidden" }}
                        >
                          Enter Mobile Number
                        </span>
                        <img
                          id="imgLoading_Mobile"
                          src="assets/images/loading.svg"
                        />
                        <img id="imgLoading_Mobile_Ok" />
                      </div>
                    </div>
                    <div className="mb-2 col-md-12 col-6">
                      <input type="hidden" name="hfCity" id="hfCity" />
                      <input
                        name="city"
                        type="text"
                        id="city"
                        className="form-control"
                        placeholder="Enter Your City"
                        required
                        value={formData.city} onChange={handleChange}
                      />
                      <span id="rfvCity" style={{ visibility: "hidden" }}>
                        Enter City
                      </span>
                    </div>
                    <div className="mb-3 col-md-12 col-6">
                      <div className="select_custom position-relative">
                        <select
                          name="program"
                          id="program"
                          className="form-select chgColor"
                          value={formData.program} onChange={handleChange}
                          required
                        >
                          <option value={0}>Select Program</option>
                          <option value={'Online MBA in Business Analytics'}>
                            Online MBA in Business Analytics
                          </option>
                          <option value={'Online BBA in Business Analytics'}>
                            Online BBA in Business Analytics
                          </option>
                        </select>
                        <span id="rfvProgram" style={{ visibility: "hidden" }}>
                          Select Program
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-12">
                      <h5
                        style={{
                          fontSize: "12px",
                          fontWeight: "normal",
                          color: "#666",
                          marginBottom: 0,
                        }}
                      >
                        Date of birth?
                      </h5>
                    </div>
                    <div className="mb-3 col-4">
                      <div className="select_custom position-relative">
                        <select
                          name="day"
                          id="day"
                          className="form-select chgColor"
                          value={formData.day} onChange={handleChange}
                          required

                        >
                          <option value={0}>DD</option>
                          {[...Array(31)].map((e, i) => (
                            <option value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                        <span id="rfvDay" style={{ visibility: "hidden" }}>
                          Select Day
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 col-4">
                      {/* <label for="inputEmail4">Date</label> */}
                      <div className="select_custom position-relative">
                        <select
                          name="month"
                          id="month"
                          className="form-select chgColor"
                          value={formData.month} onChange={handleChange}
                          required


                        >
                          <option value={0}>MM</option>

                          {[...Array(12)].map((e, i) => (
                            <option value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                        <span id="rfvMonth" style={{ visibility: "hidden" }}>
                          Select Month
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 col-4">
                      {/* <label for="inputEmail4">Date</label> */}
                      <div className="select_custom position-relative">
                        <select
                          name="year"
                          id="year"
                          className="form-select chgColor"
                          value={formData.year} onChange={handleChange}
                          required

                        >
                          <option value={0}>YYYY</option>
                          {[...Array(30)].map((e, i) => (
                            <option value={i + 1980}>{i + 1980}</option>
                          ))}
                        </select>
                        <span id="rfvYear" style={{ visibility: "hidden" }}>
                          Select Year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-12 col-6">
                      <input
                        type="submit"
                        name="btnRegisterNow"
                        value="Register Now"
                        id="btnRegisterNow"
                        disabled={!formData.name || !formData.email || !formData.phone || !formData.program || !formData.day || !formData.month || !formData.year}
                        onClick={handleSubmit}
                        className="btn btn-primary mb-0 w-100"
                      />
                    </div>
                    {/* <div className="mb-3 col-md-12 col-6">
                    <button
                      type="button"
                      id="btn_already_registered"
                      className="btn btn-primary w-100"
                    >
                      Already Registered
                    </button>
                  </div> */}
                  </div>
                </div>
                <p id="p_Error" />
              </div>
              <div
                className="register-form-container login-form"
                id="div_loginform"
              >
                <h3 className="mb-3">
                  Login for a free career counselling session!
                </h3>
                <div className="register-form">
                  <div className="row g-0">
                    <div className="mb-3 col-md-12 col-6">
                      <input
                        name="txtUserId"
                        type="text"
                        id="txtUserId"
                        className="form-control"
                        placeholder="Email ID or CUOL ID"
                      />
                      <span id="rfvUserId" style={{ visibility: "hidden" }}>
                        Enter User Id
                      </span>
                    </div>
                    <div className="col-md-12 col-6">
                      <input
                        name="txtPassword"
                        type="password"
                        id="txtPassword"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                      <span id="rfvPassword" style={{ visibility: "hidden" }}>
                        Enter Password
                      </span>
                    </div>
                    <div className="mb-0 col-md-12 col-6">
                      <span
                        id="p_LoginError"
                        style={{ color: "#e31e24", fontSize: "11px" }}
                      />
                    </div>
                  </div>
                  <div className="mb-0 col-md-12 col-12 d-none">
                    <a
                      id
                      className="showSingle"
                      href="#"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="mt-3 col-md-12 col-12">
                    <input
                      type="submit"
                      name="btnSignIn"
                      defaultValue="Sign In"
                      id="btnSignIn"
                      className="form-control btn btn-primary"
                    />
                  </div>
                  <div className="mt-3 col-md-12 col-12">
                    <button
                      type="button"
                      className="form-control btn btn-primary"
                      id="btn_register_now"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="m-0 d-none">
              I hereby accept and agree to upGrad's terms and conditions and
              privacy policy and authorize upGrad Education Private Limited ,
              its authorized representatives and affiliates to connect with me
              via calls/SMS/ emails, in connection with the courses and programs
              offered by upGrad, irrespective of my being registered with the
              National Do Not Call Registry, which I agree to de-register from,
              if required.
            </p>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide h-100"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
          />
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to={1} />
        </ol>
        <div className="carousel-inner h-100">
          <div
            className="carousel-item active sliderImg slider-img h-100"
            data-bs-interval={5000}
          >
            {/*
                        <picture>
                          <source type="image/webp" srcset="img/banner.webp">
                          <source type="image/jpeg" srcset="img/banner.jpg">
                          <img src="img/banner.jpg" alt="">
                        </picture>
                        */}
            <div className="container h-100 position-relative d-flex align-items-center">
              <div className="banner-content">
                <h2 className="mb-3">
                  Navigate your way towards a brighter future
                </h2>
                <p className="mb-4">
                  Industry Oriented course delivered by KPMG in India
                </p>
                <small className="mb-4 text-white">
                  KPMG in India program brought to you in collaboration with
                  edept
                </small>
                <img
                  width={220}
                  src="img/edept.jpeg"
                  className=" my-4"
                  alt="image"
                />
                <img
                  src="img/kpmg-logo-1.webp"
                  alt="chandigharh University logo"
                  width={240}
                  className="mx-2"
                />
                <a className="btn btn-primary btn-lg my-4" href="#programs">
                  Explore our Programs
                </a>
                {/* <div className="helpline d-flex flex-row align-items-center">
                                <img src="img/phone-icon.svg" alt="phone">
                                <div className="help-no mx-2">
                                    <small>Need Help?</small>
                                    <a href="tel:1800121388800">1800 1213 88800</a>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
          {/*<div className="carousel-item sliderImg slider-img2 h-100" data-bs-interval="5000">
                    <div className="container h-100 position-relative d-flex align-items-center">
                        <div className="banner-content">
                            <h2 className="mb-3">Global Learning at your pace & your place</h2>
                            <p className="mb-4">Learn anytime and anywhere through blended pedagogies that equip you with the requisite professional & life skills</p>
                            <a className="btn btn-primary btn-lg" href="#programs">Explore our Programs</a>
                            
          <div className="helpline d-flex flex-row align-items-center">
                                <img src="img/phone-icon.svg" alt="phone">
                                <div className="help-no mx-2">
                                    <small>Need Help?</small>
                                    <a href="tel:1800121388800">1800 1213 88800</a>
                                </div>
                            </div>
          
                        </div>
                    </div>
                </div>*/}
        </div>
        {/*<a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </a>*/}
      </div>
    </section>
  );
}

export default TopBanner;
