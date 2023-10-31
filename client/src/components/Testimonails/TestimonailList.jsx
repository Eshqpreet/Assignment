import TestimonailCard from "./TestimonailCard";
import { Testimonails } from "../../assets/data/Testimonails";

const TestimonailList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[320px] mt-[30px] lg:mt-[55px] lg:pl-[255px]">
      {Testimonails.map((item, index) => (
        <TestimonailCard item={item} index={index} key={index} />
      ))}
    </div>
  )
}

export default TestimonailList