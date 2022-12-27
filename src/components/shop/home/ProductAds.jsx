import React from 'react'
import Ads from '../partials/assets/ads.jpeg'

export const ProductAds = () => {
  return (
    <>
    <div className="flex wrap">
        <div className="flex grid grid-cols-3 wrap gap-1 overflow-hidden w-full md:h-32">
                <img className="md:h-56 sm:object-contain"  src={Ads} width="476" alt='' />
                <img className="md:h-56 m:object-contain"  src={Ads} width="476" alt='' />
                <img className="md:h-56 m:object-contain"  src={Ads} width="476" alt='' />
        </div>     
    </div>
    </>
  )
};


// export default ProductAds;


export const CategoryAds = () =>{
    return(
        <>
            <div className="flex wrap">
        <div className="flex grid grid-cols-3 wrap gap-1 overflow-hidden w-full md:h-32">
                <img className="md:h-56"  src={Ads} width="480" alt='' />
                <img className="md:h-56"  src={Ads} width="480" alt='' />
                <img className="md:h-56"  src={Ads} width="480" alt='' />

        </div>
    </div>
        </>
    )
};