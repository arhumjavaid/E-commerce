/* eslint-disable react/prop-types */
const Item = (props) => {
  return (
    <div className="w-[300px] hover:scale-[1.05] hover:duration-[0.6s] cursor-pointer">
        <img className="" src={props.image} alt="" />
        <p className="mx-[0px] my-[6px]">{props.name}</p>
        <div className="price flex gap-5">
            <div className="new-price text-[#374151] text-lg font-semibold">
                ${props.new_price}
            </div>
            <div className="old-price text-[#8c8c8c] text-lg font-medium line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item