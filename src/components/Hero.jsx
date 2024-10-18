import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="h-screen flex bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] font-['Poppins']">
      <div className="hero-left flex flex-1 flex-col justify-center  gap-5 pl-44 leading-none">
        <h2 className="text-[#090909] text-[26px] font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="icon flex items-center gap-5">
            <p className="text-[#171717] text-[85px] font-[500]">new</p>
            <img className="w-[100px]" src={hand_icon} alt="" />
          </div>
          <p className="text-[#171717] text-[85px] font-[500]">colections</p>
          <p className="text-[#171717] text-[85px] font-[500]">for everyone</p>
        </div>
        <div className="latest-btn flex items-center justify-center gap-4 w-[290px] h-[62px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex flex-1 justify-center items-center">
        <img className="w-[60%]" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
