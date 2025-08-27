import { aboutUs } from "../../mockData/rules/aboutUs";
import { ourMission } from "../../mockData/rules/ourMission";
import { requirementForAdmission } from "../../mockData/rules/requirementForAdmission";
import { rulesAndRegulations } from "../../mockData/rules/rulesAndRegulations";

const Rules = () => {
  return (
    <section>
      <div className="w-[90%] grid grid-cols-1 mx-auto">
        {/* about us section in about us page  */}
        <div className="w-[90%] text-center mx-auto py-10">
          <div className="w-[90%] mx-auto text-center font-bold text-3xl py-10">
            <h1>About Us</h1>
          </div>
          <div className="grid grid-rows-1">
            {aboutUs.map((items) => (
              <div key={items.id}>
                {items.src && (
                  <div className="py-10">
                    <img
                      src={items.src}
                      alt={items.alt}
                      className="w-[50%] mx-auto"
                    />
                  </div>
                )}
                {items.content && (
                  <p className="mx-auto text-[#b3b3b3] text-xl py-5 capitalize">
                    {items.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* Our Mission section in about us page  */}
        <div className="w-[90%] grid grid-cols-1 mx-auto py-10">
          <div>
            <h1 className="text-center font-bold text-3xl py-10">
              Our Mission
            </h1>
          </div>
          {ourMission.map((items) => (
            <div key={items.id}>
              <p className="text-center text-[#b3b3b3] text-xl capitalize">
                {items.content}
              </p>
            </div>
          ))}
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* Our Requirement for Admission Section in about us page */}
        <div className="w-[90%] mx-auto text-center grid grid-cols-1 items-start py-10">
          {requirementForAdmission.map((items) => (
            <div key={items.id}>
              {items.title && (
                <div className="text-3xl font-bold py-10">
                  <h1>{items.title}</h1>
                </div>
              )}

              {items.content && (
                <div>
                  <p className="text-xl text-[#b3b3b3] leading-8">
                    {items.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />

        {/* Our Rules and Regulation section in about us page  */}
        <div className="w-[90%] mx-auto text-center grid grid-cols-1 items-start py-10">
          {rulesAndRegulations.map((items) => (
            <div key={items.id}>
              {/* rules & regulations title  */}
              {items.title && (
                <div className="text-3xl font-bold text-center mx-auto py-10">
                  <h1>{items.title}</h1>
                </div>
              )}

              {/* rules & regulations subTitle  */}
              {items.subTitle && (
                <h2 className="text-2xl font-semibold leading-10 capitalize">
                  {items.subTitle}
                </h2>
              )}

              {/* rules & regulation subTitle2 */}
              {items.subTitle2 && (
                <h3 className="list-none text-2xl font-semibold leading-10 capitalize py-2 pb-10">
                  {items.subTitle2}
                </h3>
              )}

              {/* rules & regulation content  */}
              {items.content && (
                <ul className="list-disc list-inside pl-0 w-[80%] mx-auto text-center text-xl text-[#b3b3b3] marker:text-orange-600 capitalize leading-9 ">
                  <li className="">{items.content}</li>
                </ul>
              )}
            </div>
          ))}
        </div>
        <hr className="w-[90%] h-[0.1px] mx-auto" />
      </div>
    </section>
  );
};

export default Rules;
