import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";

const Contact = () => {
  return (
    <>
      {/* Contact us form here */}
      {/* clip-path: polygon(27% 5%, 100% 1%, 100% 50%, 100% 100%, 0 100%, 0 3%); */}
      <div>
        <Navber />
        <section className="text-gray-800 text-center container mt-24 m-auto">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-20">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0 px-2">
                  <div className="block rounded-lg shadow-lg py-12 md:px-12 lg:-mr-14">
                    <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                    <form>
                      <div className="form-group mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group mb-6">
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="form-group mb-6">
                        <textarea
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlTextarea13"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-group form-check text-center mb-6">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                          id="exampleCheck87"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="exampleCheck87"
                        >
                          Send me a copy of this message
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full  py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="map-container relative shadow-lg rounded-lg">
                  
                  <div style={{height:'254px'}}>
                    <iframe id="map_embed_3" frameBorder="0" style={{border:'0', width:'100%', height:'100%', borderRadius:'7px'}} className="left-0 top-0 h-full w-full absolute rounded-lg" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB2doXUPHMUATASGseTSGPuu1F22_6Wpc0&center=26.4485,87.2715&zoom=12&maptype=satellite"></iframe>
                    </div>
                    {/* <iframe
                      src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="left-0 top-0 h-full w-full absolute rounded-lg"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
