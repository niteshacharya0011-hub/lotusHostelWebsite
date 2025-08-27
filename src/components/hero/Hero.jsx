import React from "react";
import { images, images2, myImages } from "../../assets/images/gallery";

const Hero = () => {
  return (
    <>
      <main className="w-full h-fit flex justify-center py-20 lg:py-24">
        <div className="w-[90%] rounded-2xl">
          {/* First div for full-width image */}
          <div className="max-md:w-[90%] md:hidden mx-auto mb-4">
            {myImages.map((items) => (
              <div key={items.id}>
                <img
                  src={items.srcMe}
                  alt={items.altMe}
                  className="rounded-xl w-full"
                />
              </div>
            ))}
          </div>
          {/* Second div for 4 images in 2x2 grid, hidden on mobile */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 mb-4">
            {images.slice(0, 4).map((items) => (
              <div key={items.id}>
                <img
                  className="rounded-xl w-full"
                  src={items.src}
                  alt={items.alt}
                />
              </div>
            ))}
          </div>
          {/* Third div for images2, hidden on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 pt-4 gap-8 max-md:hidden">
            {images2.map((items) => (
              <img
                className="rounded-2xl w-full"
                key={items.id}
                src={items.src}
                alt={items.alt}
              />
            ))}
          </div>
        </div>
      </main>
      <hr className="w-[90%] h-[0.1px] mx-auto" />
    </>
  );
};

export default Hero;
