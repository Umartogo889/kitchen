import React from "react";
import { advantages } from "../../layout/Context";
const Advantages = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-2 lg:p-0 ">
      <h1 className="uppercase mt-10 ml-3 text-[28px] ss:text-[32px]  ss:mt-28 font-bold tracking-widenpm ">
        Our advantages
      </h1>
      <div className="grid grid-cols-2 mt-5 ss:grid-cols-3 ms:grid-cols-4 lg:grid-cols-5 ss:mt-10 p-1">
        {advantages.map((item) => {
          return (
            <div className="mt-5 mx-auto flex flex-col font-montserrat w-[165px] cursor-pointer">
              <div className="w-[70px] h-[70px]  ml-12 bg-green hover:shadow-2xl transition shadow-green rounded-[100px] overflow-hidden flex justify-center items-center  p-3 ">
                <img src={item.img} className="w-[90%]" alt="" />
              </div>
              <span className="w-[170px] mt-2 text-center font-bold">
                {item.info}
              </span>
              <span className="w-[170px] text-center mt-1">{item.abo}</span>
              {console.log(item.img)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
