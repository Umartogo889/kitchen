import Carusel from "../Carousel/Carousel";
import flower from "../../images/flower.png";
import { week } from "../../layout/Context";
const Menu = () => {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto mt-10 ss:mt-32">
        <h1 className="text-[30px] ml-5 ss:ml-0 font-bold tracking-wider font-montserrat uppercase">
          Our Menu
        </h1>
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-[1200px] w-full h-[810px] ss:h-[690px] sm:h-[640px] bg-green rounded-3xl  relative ">
            <div className="flex   gap-5 mt-10 ml-2 ss:ml-16  relative w-full no-scroll overflow-x-scroll ">
              {week.map((item) => {
                return (
                  <button className="bg-[#ffffff8a] text-[#000] font-medium font-montserrat  ss:px-5 ss:py-2 rounded-[3px] p-2 px-3 ss:rounded-md">
                    {item.name}
                  </button>
                );
              })}
            </div>{" "}
            <img
              className="absolute hidden lg:block z-50 right-20 top-0 w-[100px] rotate-[35deg]"
              src={flower}
              alt=""
            />
            <Carusel />
            <p className="w-[92%] mx-auto mt-5 font-montserrat text-white">
              A balanced menu helps to maintain health and a slim figure, allows
              you to be cheerful and active throughout the week. While preparing
              our dishes, we use products from the best suppliers and always
              choose products that correspond to the concept of healthy
              nutrition. For example, lean beef, turkey and chicken, low-calorie
              sauces, pasta of hard varieties. Delivery is carried out every 2
              days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
