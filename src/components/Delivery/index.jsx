import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Delivery = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-2 lg:p-0">
      <h1 className="font-bold text-[28px] ss:text-[32px] tracking-wide uppercase mt-10 ss:mt-20">
        Delivery areas
      </h1>
      <label className="relative flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter your address"
          className="font-normal w-full bg-[#0000000c] p-3 ss:p-3 rounded-2xl mt-5 outline-none text-[20px]"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-green absolute mt-5 right-5 "
          size="xl"
        />
      </label>
      <iframe
        className=" w-[100%] h-[600px] ss:h-[450px] rounded-2xl mt-10"
        src="https://yandex.com/map-widget/v1/?um=constructor%3A77f9aae6a5e0fbec722f6b599667959ff0aeb79bff951a745c238c122b8a3037&amp;source=constructor"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Delivery;
