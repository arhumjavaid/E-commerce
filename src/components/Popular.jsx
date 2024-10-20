import data_product from "../assets/data";
import Item from "./Item";
const Popular = () => {
  return (
    <div className=" flex flex-col items-center gap-[10px] h-[90vh] mb-6">
      <h1 className="text-[#171717] text-5xl font-[600]">POPULAR IN WOMEN</h1>
      <hr className="w-52 h-[4px] rounded-[10px] bg-[#252525]" />
      <div className="popular-item mt-12 flex gap-[30px] justify-center sm:flex-wrap">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
