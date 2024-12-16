import React from 'react'

const Promotion = () => {
  return (
    <div className="container py-[40px]">
      <div className="text-center">
        <p className="leading-4 font-bold text-[#377DFF]">PROMOTION</p>
        <h2 className="text-[40px] leading-[44px] text-[#141718] font-medium mt-4">
          Winter Collections
        </h2>
        <p className="mt-4 mb-8 text-[20px] leading-8 text-[#141718]">
          Introducing the new winter jackets.
        </p>
        <iframe
        className='rounded-2xl'
          width="1120"
          height="544"
          src="https://www.youtube.com/embed/V9WFdzJb9PM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Promotion