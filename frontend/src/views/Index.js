/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
             
              <p className="mt-4 text-2xl font-bold leading-relaxed text-blueGray-500">
               welcome to deneb Software
                
                  
                
              </p>
              <div className="mt-12">
                
                
              </div>
            </div>
          </div>
        </div>

        
      </section>

      

      

    
     
      <Footer />
    </>
  );
}
