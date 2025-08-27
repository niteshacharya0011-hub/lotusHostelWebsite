import { footerAbout } from "../../mockData/footer/about";
import { IoIosArrowForward } from "react-icons/io";
import { footerExpert } from "../../mockData/footer/expert";
import { footerContact } from "../../mockData/footer/contact";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const arrowStored = [{ arrow: <IoIosArrowForward /> }];

const Footer = () => {
  return (
    <footer>
      <div className="w-[70%] grid grid-cols-1 items-start text-center mx-auto py-10 capitalize ">
        {/* | first containe of footer section about */}
        <div className="w-[90%] mx-auto grid grid-cols-1 py-8">
          {footerAbout.map((items) => (
            <div key={items.id}>
              <div>
                {items.title && (
                  <div className="py-5 text-3xl font-bold">
                    <h1>{items.title}</h1>
                  </div>
                )}
              </div>
              {items.content && (
                <div>
                  <p className="md:text-lg text-sm text-[#b3b3b3]">
                    {items.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* | second main container of footer section expert */}
      <div>
        <div className="w-[40%] max-lg:w-[70%] grid grid-cols-2 justify-between items-start text-center mx-auto pb-10 capitalize">
          <div>
            {footerExpert.map((items) => (
              <div key={items.id} className="flex items-center">
                {items.title && (
                  <div className="text-3xl font-bold py-5">
                    <h1>{items.title}</h1>
                  </div>
                )}
                {items.content && arrowStored[0].arrow}
                <ul className="list-none cursor-pointer ml-1">
                  <li className="md:text-xl text-sm text-[#b3b3b3] transition-all delay-100 duration-300 ease-in-out hover:text-orange-700">
                    {items.content}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* first contact in second main container  */}
          <div>
            {footerContact.map((items) => (
              <div key={items.id}>
                {items.title && (
                  <div>
                    <h1 className="text-3xl font-bold py-5">{items.title}</h1>
                  </div>
                )}
                {items.content && (
                  <div>
                    <p className="md:text-xl text-sm text-[#b3b3b3]">
                      {items.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* for real footer  */}
      <div className="bg-[#1e1e1e] h-fit flex flex-col justify-center items-center py-5">
        <div className="text-2xl font-semibold capitalize">
          <h1>social media handle</h1>
        </div>
        <div className="flex justify-center items-center gap-3 py-3 text-2xl">
          <a href="#" className="text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-500">
            <FaInstagram />
          </a>
          <a href="#"></a>
        </div>
        <h1 className="w-[80%] text-center text-sm ">
          Copyright © 2025 LOTUS BOY'S HOSTEL. All rights reserved | Design by
          <a
            href="https://ww.facebook.com/nischalacharya01"
            className="text-red-800 transition-all delay-100 duration-300 ease-in-out hover:text-red-600 font-semibold"
          >
             NiTeSH AcHaRyA
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
