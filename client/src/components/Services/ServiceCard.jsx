import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
    const { img, title, hStyle, desc, pStyle } = item;

    return (
        <div className="lg:py-[70px] py-[65px] px-4 lg:px-7">
            <figure className="flex items-center justify-center pb-[40px]">
                <img src={img} alt="" />
            </figure>

            <div className="text-center">
                <h2 className={hStyle} style={{ paddingBottom: '20px' }}>
                    {title}
                </h2>
                <p className={pStyle}>
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
