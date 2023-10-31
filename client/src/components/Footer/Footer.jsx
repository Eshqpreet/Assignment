import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-white.png"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const quickLinks01 = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/",
        display: "About Us"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/",
        display: "Events"
    },
];

const quickLinks02 = [
    {
        path: "/news",
        display: "News"
    },
    {
        path: "/blog",
        display: "Blog"
    },
    {
        path: "/faqs",
        display: "FAQ's"
    },
    {
        path: "/contactus",
        display: "Contact Us"
    },
]

const quickLinks03 = [
    {
        path: "www.twitter.com",
        icon: <AiFillTwitterCircle className="group-hover:text-white w-[24px] h-[24px]" />,
        display: "Twitter"
    },
    {
        path: "www.facebook.com",
        icon: <BsFacebook className="group-hover:text-white w-[24px] h-[24px]" />,
        display: "Facebook"
    },
    {
        path: "www.instagram.com",
        icon: <AiFillInstagram className="group-hover:text-white w-[24px] h-[24px]" />,
        display: "Instagram"
    },
]

const Footer = () => {

    var year = new Date().getFullYear()

    return (
        <footer className="pb-16 pt-10 bg-[#106690] md:w-full">
            <div className="container md:w-full">
                <div className="flex justify-between flex-col md:flex-row flex-wrap lg:gap-[30px] lg:pr-[3rem]">

                    <div className="pl-[2rem] pt-[150px]">
                        <img src={logo} alt="" className="w-[200px] h-[50] pb-[100px]" />
                        <div className="relative bottom-[10rem]">
                            <div className="lg:w-[555px] ">
                                <p className="text__para text-[18px] text-[#E8F6FD] font-[400] leading-[120%] ">
                                    Stay up to date on the latest features and releases by joining our newslatter.
                                </p>
                            </div>
                            <div className="flex items-center w-full lg:gap-[30px]">
                                <div className="max-w-[570px] mt-[30px] mx-auto bg-[#fff] rounded-full flex items-center ">
                                    <input
                                        type="email"
                                        className="py-4 pl-4 pr-2 h-[48px] bg-[#106690] w-[360px] text-[#fff] focus:outline-none cursor-text border-[1px] border-[solid] border-[#fff] rounded-full"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <button className="btn text-[18px] font-[400] bg-[#fff] text-[#106690] mt-[30px] rounded-full w-[165px] h-[48px] text-center">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text__para text-[14px] text-[#fff] font-[400] leading-[120%] py-0 w-[451px]">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                            </p>
                        </div>
                    </div>

                    <div className="lg:pt-[200px] pt-[50px]">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-[white] ">
                            Quick Links
                        </h2>

                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-[white] hover:text-primaryColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:pt-[200px] pt-[50px] text-[#fff]">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
                            Updates
                        </h2>

                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:pt-[200px] pt-[50px] text-[white]">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
                            Follow Us
                        </h2>

                        <ul>
                            {quickLinks03.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor ">
                                        <div className="flex gap-5">
                                            {item.icon}  {item.display}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <hr className="h-[1px] relative lg:bottom-[5.5rem] md:pt-[20px]"></hr>
                    <div className="flex justify-between relative lg:bottom-[3rem]">
                        <ul className="flex gap-5 text-[white] text-[14px] font-[400] leading-[120%]">
                            <li>
                                @ {year} UNYN.All rights reserved.
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Term of Service
                            </li>
                        </ul>
                        <p className="text-[14px] leading-[120%] font-[400] text-[#fff]">Design and Developed by Eshqpreet Singh.</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer