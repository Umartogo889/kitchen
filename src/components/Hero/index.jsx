// images
import flower from "../../images/flower.png";
import circle from "../../images/circle.png";
import leaf from "../../images/leaf.png";
import food from "../../images/food.png";
import spices from "../../images/spices.png";
const Hero = () => {
  return (
    <div className="relative pb-7 w-[94%] max-w-[1200px] ss:h-[350px] sm:h-[450px] h-[auto] xs:h-[900px] mx-auto bg-green mt-14 rounded-[50px] ss:flex gap-20 z-[2]">
      <img
        src={flower}
        className="-top-3 absolute w-[120px] right-10 xs:right-[30px] xs:w-[140px] ss:w-[80px] ss:top-[280px] sm:top-[370px] rotate-[90deg] ss:-rotate-[73deg] ss:-left-[0px]"
        alt="flower"
      />
      <div className="mt-10 ml-[20px]  ss:ml-14 ms:ml-20 flex  justify-center items-start flex-col md:mt-14 lg:ml-28">
        <h1 className=" mt-10 w-[300px] ss:w-[200px] xs:text-[47px] ss:mt-0 text-[35px] ss:text-[24px] sm:text-[40px] lg:text-[60px]  ms:w-[240px] md:w-[350px]  font-montserrat font-bold ms:leading-[65px]  text-white uppercase break-words">
          Your personal cook
        </h1>
        <p className="text-[22px] ss:text-[19px] w-[300px] ss:w-[auto] ms:text-[20px] font-montserrat mt-6">
          The balanced diet for every day
        </p>
        <button className="mt-6 bg-yellow px-7 py-3 rounded-3xl text-white font-montserrat font-medium hover:text-green hover:bg-white duration-500">
          Make your choice
        </button>
      </div>
      <div className="relative -left-2 ss:-ml-10">
        <img
          src={flower}
          className="absolute hidden ss:block w-[80px] ms:w-[120px]  ss:-top-[10px]  ss:-left-[50px]"
          alt=""
        />
        <div className="mt-0 ml-5 relative flex justify-center ss:mt-14  items-center ms:mt-5">
          <img
            className=" w-[500px]  ss:w-[500px] md:w-[650px] mt-10  ss:mt-4 sm:mt-10 ms:ml-5 ms:mt-20 md:mt-10"
            src={circle}
            alt=""
          />
          <img
            src={food}
            className="absolute w-[280px] xs:w-[85%] xs:mt-14 ss:w-[auto] mt-7 ss:mt-32  ms:mt-10 ms:ml-10 md:w-[430px]"
            alt=""
          />
        </div>
        <img
          src={leaf}
          className="absolute w-[120px] -bottom-5 ss:-bottom-14 ss:-left-16"
          alt=""
        />
        <img
          src={spices}
          className="absolute  ss:hidden right-2 -bottom-8 ms:block ss:-bottom-10 w-[130px] ss:-right-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
