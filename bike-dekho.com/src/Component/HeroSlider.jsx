import React from 'react';
import heroImg from '/src/assets/heroImage.png';

const HeroSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-175.5 ">
        <div className="bg-[#E76F511A] w-full  flex items-center ">
          <div className="flex items-center justify-between m-auto max-w-220">
            <div className="w-118.75 ">
              <p className="font-bold text-[60px] leading-18.75">Ride-on R15 V4 with Smile</p>
              <p className="text-[16px] font-light leading-6.5 pt-5 w-110">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
              <button className="mt-7.5 py-4.25 px-7.5 bg-[#E76F51] rounded-[5px] font-semibold text-[20px] text-white ">
                Purchase
              </button>
            </div>
            <div className="w-101.5">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
       <div className="bg-[#E76F511A] w-full  flex items-center ">
          <div className="flex items-center justify-between m-auto max-w-220">
            <div className="w-118.75 ">
              <p className="font-bold text-[60px] leading-18.75">Ride-on R15 V4 with Smile</p>
              <p className="text-[16px] font-light leading-6.5 pt-5 w-110">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
              <button className="mt-7.5 py-4.25 px-7.5 bg-[#E76F51] rounded-[5px] font-semibold text-[20px] text-white ">
                Purchase
              </button>
            </div>
            <div className="w-101.5">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="bg-[#E76F511A] w-full  flex items-center ">
          <div className="flex items-center justify-between m-auto max-w-220">
            <div className="w-118.75 ">
              <p className="font-bold text-[60px] leading-18.75">Ride-on R15 V4 with Smile</p>
              <p className="text-[16px] font-light leading-6.5 pt-5 w-110">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
              <button className="mt-7.5 py-4.25 px-7.5 bg-[#E76F51] rounded-[5px] font-semibold text-[20px] text-white ">
                Purchase
              </button>
            </div>
            <div className="w-101.5">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
       <div className="bg-[#E76F511A] w-full  flex items-center ">
          <div className="flex items-center justify-between m-auto max-w-220">
            <div className="w-118.75 ">
              <p className="font-bold text-[60px] leading-18.75">Ride-on R15 V4 with Smile</p>
              <p className="text-[16px] font-light leading-6.5 pt-5 w-110">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
              <button className="mt-7.5 py-4.25 px-7.5 bg-[#E76F51] rounded-[5px] font-semibold text-[20px] text-white ">
                Purchase
              </button>
            </div>
            <div className="w-101.5">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
