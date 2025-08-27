import { homeImg } from "../../assets/images/gallery";
import Hero from "../../components/hero/Hero.jsx";
import { nearByCollage } from "../../mockData/home/nearByCollages.js";
import { ourFacilities } from "../../mockData/home/ourFacilities.js";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Home section */}
      <section className="w-full bg-black text-white">
        {/* home section our hostel life container  */}

        <div className="flex flex-col items-center w-[90%] pb-30 mx-auto">
          {/* home section our hostel life title */}

          <div className="w-[80%] text-center">
            <h2 className="text-4xl font-bold py-20">Our Hostel Life</h2>
            <p className="text-lg leading-relaxed">
              LOTUS BOYS HOSTEL is a new 3 stories hostel with 10,000 sq feet
              containing 16 rooms ( students / non students ) 
              constructed exclusively to offer excellent services for man. We
              are located 100 meters from KOTASHOWR CHOWK.
            </p>
          </div>

          {/*home section our hostel life cards */}

          <div className="w-[80%] grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {homeImg.map((item) => (
              <div
                key={item.id}
                className="text-center bg-[#1e1e1e] p-4 rounded-xl shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-70 rounded-lg object-cover"
                />
                <p className="mt-5 text-[#b3b3b3]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* home section Our Facilities container */}

        <div className="w-full mx-auto grid justify-center items-center pb-30">
          {/* home section our facilities title  */}

          <div className="mx-auto font-bold text-4xl py-20">
            <h1>Our Facilities</h1>
          </div>

          {/* home section our facilities card  */}

          <div className="w-[80%] mx-auto grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max:lg:mt-[-20rem]">
            {ourFacilities.map((items) => {
              const Icon = items.icon;
              return (
                <div
                  key={items.id}
                  className="bg-[#1e1e1e] text-center rounded-2xl px-4"
                >
                  <Icon size={50} className="mx-auto my-5" />
                  <h2 className="font-semibold text-2xl my-5">{items.title}</h2>
                  <p className="text-[#b3b3b3] my-10 capitalize">
                    {items.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* home section Nearby Collages  */}

        <div className="min-w-full grid justify-center items-center pb-30">
          <div>
            <h1 className="w-full text-4xl font-bold text-center py-20">
              Nearby College
            </h1>
          </div>
          <div className="min-w-full grid justify-center items-start grid-cols-4 max-lg:grid-cols-2">
            {nearByCollage.map((items) => (
              <div key={items.id} className="w-[80%] mx-auto text-center">
                <img
                  src={items.src}
                  alt={items.alt}
                  className="w-80 h-80 max-sm:h-50 mb-10 rounded-sm "
                />
                <p className="text-xl max-md:text-sm font-semibold capitalize max-md:mb-10">
                  {items.collegeName}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />
      </section>
    </>
  );
};

export default Home;
