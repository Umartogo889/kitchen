import { product } from "../../layout/Context";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carusel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1080, min: 920 },
      items: 3,
    },
    ipad: {
      breakpoint: { max: 920, min: 624 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 624, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        showArrows={true}
        responsive={responsive}
        className="max-w-[1200px] w-full gap-2 select-none flex  items-center "
      >
        {product.map((item, index) => {
          return (
            <>
              <div className="relative mt-10 rounded-3xl p-5 bg-white w-[250px] mx-auto ">
                <p className="absolute right-[-5px] bg-yellow px-[15px] py-[8px] text-white font-montserrat font-bold rounded-[100px] top-[0px]">
                  {index + 1}
                </p>
                <img src={item.img} alt="" />
                <p className="text-green ml-1 text-xl">{item.name}</p>
                <p className="font-medium  mt-1 font-roboto">{item.info}</p>
                <p className="">protain-{item.protain}</p>
                <p className="">fat-{item.Fat}</p>
                <p className="">Carbohydrates-{item.Carbohydrates}</p>
                <p className="">Energy-{item.Energy}</p>
                <p className="">total-{item.total}</p>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carusel;
