import React from 'react'
import Footer from './Footer'
import Navbar from './Navber'
import '../home/style.css'

const TermsAndCondition = () => {
  return (
    <>
         <div>
        <Navbar />
        <section className="text-gray-800 mt-32 ">
        <section className="section-title m-4 md:mx-8 md:my-6">
        <div className="container">
          <h1 className="container mx-auto  text-2xl">
            <span></span>Terms And Condition
          </h1>
        </div>
      </section>
          <div className=" py-12 md:px-12">
          <div className="general-wrap">
                  <div className="row">
                     <div className="lg:col-12 md:col-12 sm:col-12 ">
                        <p>These terms and conditions apply to purchases made from this website. All orders placed through this website are subject to confirmation and acceptance by .</p>
                        <p><strong className='leading-3'>Orders and Delivery</strong></p>
                        <p>Ecom will deliver the goods you have ordered to the address you specify in your order, within the agreed time frame, subject to the availability of products. If the products are not available, you will be notified of this by Sarasmart as quickly as possible. Anyone at the delivery address who receives the goods will be presumed by Sarasmart to be authorized to receive the goods. Once the goods are delivered to you, you will own them and it is your responsibility if they are lost or damaged. The deliveries will only be made on the specified day. We aim to deliver your goods at the quickest time possible.</p>
                        <p><strong className='leading-3'>Order Tracking</strong></p>
                        <p>We will send you regular updates about the status of your order via emails and SMS through which you can know the time and place of the orders arriving at your place.</p>
                        <p><strong className='leading-3'>Prices and Payment</strong></p>
                        <p>For each online order, you shall pay the applicable price for the relevant goods as confirmed by Sarasmart along with the delivery and handling fee specified on the web site at that time.</p>
                        <p><strong className='leading-3'>Changes to Terms</strong></p>
                        <p>Each order is governed by the terms and conditions when the order is placed. Sarasmart may add to, delete or otherwise change these terms and conditions time and again. It is your responsibility to read and understand these terms and conditions each time you place an order.</p>
                        <p><strong className='leading-3'>Payment</strong></p>
                        <p>Payment is expected upon delivery or prior to delivery. Identification may be requested when collecting goods. Payment details shall be finalized prior to dispatch.</p>
                        <p><strong className='leading-3'>Contact Details</strong></p>
                        <p>When placing an order from Sarasmart, we require a valid address and phone number to get to you without any hassle to both the parties. To assist us in processing your order, please fill us in with the correct address and contact details for delivery.&nbsp;</p>
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

export default TermsAndCondition