import logo from "../../assets/images/logo-blue.png";

const SignUp = () => {
    return (
        <div className="container h-[550px] w-[500px]">
            <div className="flex-col justify-center items-center text-center">
                <div className="flex items-center justify-evenly">
                    <img src={logo} alt="" className="w-[100px] h-[90px] " />
                </div>
                <h2 className="text-[32px] font-[700] leading-[120%] px-7">
                    Fill details to join
                </h2>
            </div>

            <form className=" mt-[30px] bg-[#fff] mx-auto flex-col justify-center items-center space-y-5">
                <input
                    type="text"
                    className="w-[400px] h-[50px] px-3 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                    placeholder="Enter your name"
                />
                <input
                    type="email"
                    className="w-[400px] h-[50px] px-3 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                    placeholder="Enter your email"
                />
                <input
                    type="text"
                    className="w-[400px] h-[50px] px-3 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                    placeholder="Enter your phone number"
                />
                <input
                    type="text"
                    className="w-[400px] h-[50px] px-3 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                    placeholder="Enter your college name"
                />
                <div>
                    <button className="bg-[#1AA7EC] px-[35px] py-[15px] mt-[25px]  text-white font-[400]  w-[400px] h-[48px] rounded-[10px] ">Join</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp