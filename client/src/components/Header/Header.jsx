import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu, BiChevronDown, BiChevronUp } from "react-icons/bi";
import logo from "../../assets/images/logo-blue.png"

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/aboutus",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/events",
        display: "Events",
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const moreMenuRef = useRef(null);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

    const handleStickyHeader = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    };

    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('show__menu');
        }
    };

    const toggleMoreMenu = () => {
        setIsMoreMenuOpen(!isMoreMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleStickyHeader);

        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    return (
        <header className="header flex items-center pl-[5rem] pr-[2rem]" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[3rem]">
                        <div className="w-[150px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu flex items-center gap-[2.7rem]">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={link.path}
                                            className={navClass =>
                                                navClass.isActive
                                                    ? 'text-[#106690] text-[16px] leading-7 font-[600]'
                                                    : 'text-black text-[16px] leading-7 font-[500] hover:text-[#106690]'
                                            }
                                        >
                                            {link.display}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="flex cursor-pointer items-center text-[16px] leading-7 font-[500]" onClick={toggleMoreMenu}>
                                    More {isMoreMenuOpen ? <BiChevronUp /> : <BiChevronDown />}
                                    {isMoreMenuOpen && (
                                        <ul className="more-menu text-[16px] leading-7 font-[500]">
                                            <li>
                                                <NavLink to="/joinus">Join Us</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/learnmore">Learn More</NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/contactus">
                        <button className="bg-[#1AA7EC] py-2 px-6 text-white font-[600] h-[44px] flex item-center justify-center rounded-[50px]">
                            Contact Us
                        </button>
                    </Link>
                    <span className="md:hidden" onClick={toggleMenu}>
                        <BiMenu className="w-6 h-6 cursor-pointer" />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
