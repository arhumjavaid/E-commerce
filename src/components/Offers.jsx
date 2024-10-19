import exclusive_image from "../assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className="w-[75%] h-[60vh] flex m-auto px-[110px] py-0 mb-[150px] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]">
        <div className="offers-left flex flex-1 flex-col justify-center">
            <h1 className="text-[#171717] text-[60px] leading-[1.6] font-[500]">Exclusive</h1>
            <h1 className="text-[#171717] text-[60px] leading-[1.3] font-[500]">Offers For You</h1>
            <p className="text-[#171717] text-[20px] font-[600]">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="w-[268px] h-[62px] rounded-[35px] bg-[#ff4141] text-white text-[20px] border-none font-medium mt-[30px] cursor-pointer">Check Now</button>
        </div>
        <div className="offers-right flex flex-1 items-center justify-end pt-[50px]">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers