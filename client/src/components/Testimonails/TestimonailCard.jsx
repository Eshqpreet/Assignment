import { HiStar } from "react-icons/hi"

const TestimonailCard = ({ item, index }) => {
    const { img, name, text, place, nStyle, pStyle, tStyle } = item;
    return (
        <div className="py-[25px] px-3 lg:px-5 w-[555px] ">
            <div className="flex items-center gap-[2px] pb-5">
                <HiStar className='text-[#1AA7EC] w-[18px] h-5' />
                <HiStar className='text-[#1AA7EC] w-[18px] h-5' />
                <HiStar className='text-[#1AA7EC] w-[18px] h-5' />
                <HiStar className='text-[#1AA7EC] w-[18px] h-5' />
                <HiStar className='text-[#CED1D4] w-[18px] h-5' />
            </div>
            <h2 className={tStyle}>
                {text}
            </h2>
            <div className="flex items-center gap-6 py-5">
                <img src={img} alt="" />
                <p className={pStyle} >
                    {name}
                    <br></br>
                    {place}
                </p>
            </div>
        </div >
    )
}

export default TestimonailCard