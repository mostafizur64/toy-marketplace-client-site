import React from 'react';

const ShopByBrand = () => {
    return (
        <div>
            <div>
                <div >
                    <h2 className='text-3xl text-center  text-orange-500 font-bold '>Shop by brand</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-6 items-center justify-center gap-4'>
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full' src="https://i.ibb.co/9sJVSJM/logo1.webp" alt="" />
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full' src="https://i.ibb.co/gjKvDCY/images-1-1111.png" alt="" />
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full'  src="https://i.ibb.co/wsQGMHX/images-1-2222.png" alt="" />
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full' src="https://i.ibb.co/fr0GpSK/img-3.png" alt="" />
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full' src="https://i.ibb.co/K6dW26f/img-4jpg.png" alt="" />
                    <img data-aos="flip-left"data-aos-delay="10" className='w-full' src="https://i.ibb.co/ZLNBCR1/img-5.png" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default ShopByBrand;