import React from "react";
import {
  facilities1,
  facilities2,
  facilities3,
  facilitiesCardImgWithContend1,
  facilitiesCardImgWithContend2,
  facilitiesContent,
} from "../../mockData/facilities/facilities";

const Facilities = () => {
  return (
    <section>
      <div className="w-full">
        {/* first section  */}

        <div className="w-[80%] grid grid-cols-1 py-10 text-center mx-auto">
          {facilitiesContent.map((items) => (
            <div key={items.id}>
              {items.title && (
                <div className="font-bold text-3xl py-10">
                  <h1>{items.title}</h1>
                </div>
              )}
              {items.content && (
                <div>
                  <p className="font-semibold text-xl text-[#b3b3b3] leading-7">
                    {items.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* second section for card with out img */}

        <div className="w-[80%] grid max-md:grid-cols-1 grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-8 py-10 text-center mx-auto capitalize">
          {/* second section first div */}
          <div className="bg-[#1e1e1e] rounded-2xl py-10">
            {facilities1.map((items) => (
              <div key={items.id}>
                <p className="font-semibold text-lg text-[#b3b3b3]">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
          {/* second section second div  */}
          <div className="bg-[#1e1e1e] rounded-2xl py-10">
            {facilities2.map((items) => (
              <div key={items.id}>
                <p className="font-semibold text-lg text-[#b3b3b3]">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
          {/* second section third div  */}
          <div className="bg-[#1e1e1e] rounded-2xl py-10">
            {facilities3.map((items) => (
              <div key={items.id}>
                <p className="font-semibold text-lg text-[#b3b3b3]">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* third section for card with img */}
        <div className="w-[80%] mx-auto grid grid-cols-1">
          {/* first div for title  */}

          <div>
            {facilitiesCardImgWithContend1.map((items) => (
              <div key={items.id}>
                <h1 className="font-bold text-3xl text-center py-10 capitalize">
                  {items.mainTitle}
                </h1>
              </div>
            ))}
          </div>
          {/* second div for img + content  */}
          <div className=" grid max-lg:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 gap-10 pb-15">
            {facilitiesCardImgWithContend2.map((items) => (
              <div
                key={items.id}
                className="flex flex-col justify-center items-center bg-[#1e1e1e] rounded-2xl py-10 capitalize"
              >
                <img
                  src={items.src}
                  alt={items.alt}
                  className="w-80 max-md:w-50 h-80 max-md:h-50 rounded-2xl"
                />
                <h1 className="text-2xl max-md:text-xl py-5">{items.title}</h1>
                <p className="w-[80%] text-center max-md:text-[15px] text-[#b3b3b3] py-2">
                  {items.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="w-[90%] h-[0.1px] mx-auto" />
      </div>
    </section>
  );
};

export default Facilities;
