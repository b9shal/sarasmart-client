import React from 'react'
import Ads from '../partials/assets/ads.jpeg'

export const ProductAds = () => {
  return (
    <>
    <div className="flex wrap">
        <div className="flex wrap gap-1 overflow-hidden w-full ads__image">
                <img className="h-56"  src={Ads} width="476" alt='' />
                <img className="h-56"  src={Ads} width="476" alt='' />
                <img className="h-56"  src={Ads} width="476" alt='' />
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
        <div className="flex wrap gap-1 overflow-hidden w-full ads__image">
                <img className="h-56"  src={Ads} width="480" alt='' />
                <img className="h-56"  src={Ads} width="480" alt='' />
                <img className="h-56"  src={Ads} width="480" alt='' />

        </div>
    </div>
        </>
    )
};