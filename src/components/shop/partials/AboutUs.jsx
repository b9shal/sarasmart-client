import React from 'react'
import Footer from './Footer'
import Navbar from './Navber'
import '../home/style.css'

const AboutUs = () => {
  return (
    <>
         <div>
        <Navbar />
        <section className="text-gray-800 mt-32 ">
        <section className="section-title m-4 md:mx-8 md:my-6">
        <div className="container">
          <h1 className="container mx-auto  text-2xl">
            <span></span>About Us
          </h1>
        </div>
      </section>
          <div className=" py-12 md:px-12">
          <div className="general-wrap">
                  <div className="row">
                     <div className="lg:col-12 md:col-12 sm:col-12 ">
                        <h1 className='leading-3 font-bold text-center text-4xl tracking-wider mb-6'>About us.</h1>
                        {/* <p><strong className='leading-3'>Contact Details</strong></p> */}
                        <h4 className='font-medium text-center text-3xl'>We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.</h4>

                       <div className="mt-4 row">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="cols">
                              <img className='my-2' src="https://eu.muroexe.com/img/cms/CMS/nosotros-ico-historia.jpg" alt="" style={{maxWidth: '20px'}} />
                            <h4 className='text-2xl font-medium'>History.</h4>
                            <p>
                            We were born on September 1st 2013. The first day we sold 11 pairs. The second day 3 and the third, 0. We went for a walk to think about what were we donig. After that, unexpectedly, in two months, we were sold out. Today we are team of more than 40 people in our HQ and retail stores. Additionally, we also collaborate with agencies, distributors, photographers and ambassadors from all over the world.
                            </p>
                            </div>

                            <div className="cols">
                            <img className='my-2' src="https://eu.muroexe.com/img/cms/CMS/nosotros-ico-valores.jpg" alt="" style={{maxWidth: '20px'}} />
                            <h4 className='text-2xl font-medium'>Our values.</h4>
                            <p>
                            Balanced between functionality, aesthetics and minimalism with a less is more approach to design. User-centric in all design processes, experimentation, innovation, and future outlook. We manufacture in places with happy people in good working conditions.
                            </p>
                            </div>

                            <div className="cols">
                            <img className='my-2' src="https://eu.muroexe.com/img/cms/CMS/nosotros-ico-nosgusta.jpg" alt="" style={{maxWidth: '20px'}} />
                            <h4 className='text-2xl font-medium'>We like.</h4>
                            <p>
                            Muroexe is simplicity, it's the future, creativity, well thought out products, weird, extraterrestrial, artificial intelligent, Netflix, an HBO series, industrial, post-humanism, different, the possibility to populate Mars, science and always foward looking. There are people who love what we do. And people who don't understand anything.
                            </p>
                            </div>
                            
                          </div>
                       </div>
                     </div>
                  </div>
               </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs;