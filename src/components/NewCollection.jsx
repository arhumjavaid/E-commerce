import new_collection from "../assets/new_collections";
import Item from "./Item";
const NewCollection = () => {
  return (
    <div className=" flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-5xl font-[500]">NEW COLLECTIONS</h1>
      <hr className="w-[200px] border-y-[2px] border-[#616161] rounded-[10px] " />
      <div className="collections grid md:grid-cols-4 mt-[50px] gap-[30px] sm:grid-cols-2">
        {new_collection.map((item, index) => {
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

export default NewCollection;
