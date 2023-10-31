
import ImageSlider from "../components/Home/ImageSlider"
import { SliderData } from "../assets/data/SliderData"
import { BiChevronRight } from "react-icons/bi"
import img4 from "../assets/images/img4.png"
import img3 from "../assets/images/img3.png"
import img2 from "../assets/images/img2.png"
import ServiceList from "../components/Services/ServiceList"
import TestimonailList from "../components/Testimonails/TestimonailList"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
import SignUp from "../components/Home/SignUp"
import { useState, useEffect } from "react"
import { RxCross2 } from "react-icons/rx"
import axios from "axios";



const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  // Define a function to handle form submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = () => {
    console.log("Sending Email");

    if (formData.name && formData.email && formData.message) {
      axios
        .post("http://localhost:5000/send_contact_email", formData)
        .then(() => {
          setIsSuccess(true);
          setIsError(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setIsSuccess(false);
          setIsError(true);
          console.error("Error sending email:", error);
        });
    } else {
      alert("Fill in all the fields to continue");
    }
  };

  return (
    <>
      {/* ==========Hero Section ================= */}
      <section className="hero__section pt-[10px] 2xl:h-[750px]  ">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center pl-[5rem] gap-[12rem]">

            {/* =======Hero Content ========== */}

            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-black font-[600] md:text-[64px] md:leading-[70px] ">
                  Empowering Youth for a Brighter Future</h1>
                <p className="text__para  py-7">
                  United Youth Network (UNYN) is a dynamic and impactful
                  international student society committed to nurturing the talents and potential of young individuals across colleges and universities of different countries. Join us today to be a part of our mission to create a brighter and more promising future.
                </p>

                <div className="flex gap-[4rem]">
                  <button className="btn w-[200px]" onClick={openModal}>Join</button>
                  <button className="btn bg-[#fff] text-[#1AA7EC] w-[175px] hover:btn flex items-center text-center">Learn More<BiChevronRight /></button>
                </div>

              </div>


            </div>
            {/* ====== Hero Content ========= */}

            <ImageSlider slides={SliderData} />

          </div>
        </div>
      </section>
      {/* ==========Hero Section End================= */}


      {/* ========Intro Section ============= */}
      <section className="pt-[147px]  ">
        <div className="container flex ">
          <div className="flex items-center flex-col  lg:flex-row lg:gap-[15rem]  pl-[5rem] gap-[12rem]">
            {/* <div className="w-[602px] h-[174px]"> */}
            <h2 className="text-[48px] leading-[120%] font-[700] lg:w-[602px] ">
              Empowering Youth for a Brighter Future: <span className="text-[#106690]">UNYN's Impact on Youth Individuals</span>
            </h2>
            {/* </div> */}

            {/* <div className="w-[493px] h-[132px] "> */}
            <p className="text-[18px] font-[400] leading-[120%] text-[#888E95] lg:w-[493px]">
              United Youth Network (UNYN) is dedicated to empowering young
              individuals by providing them with opportunities for growth and development. Through our international student society, we aim to nurture their talents and unlock their full potential. By investing in the youth today,
              we believe that we can create a brighter and more promising future for tomorrow.
            </p>
            {/* </div> */}
          </div>


        </div>
        <div className="flex justify-center items-center pt-[80px] ">
          <img src={img4} alt="" className="w-[1140px] h-[690px]" />
        </div>

      </section>
      {/* ========Intro Section ============= */}

      {/* ================Services Section============== */}

      <section>
        <div className="container">
          <div className="xl:w-[797px] mx-auto">
            <p className="text-center text-[18px] font-[600] leading-[120%] pb-2">
              Empower
            </p>
            <h2 className="heading text-center text-[48px] font-[700] leading-[120%]">
              Unlock Your Potential with UNYN
            </h2>
            <p className="text__para text-center">
              At UNYN, we offer a range of impactful programs and events designed to empower young individuals. From mentorship programs to networking events and international collaborations, we provide the resources and support needed to help you thrive.
            </p>
          </div>

          <ServiceList />

          <div className="flex justify-evenly">
            <div className="flex gap-[4rem] ">
              <button className="btn w-[200px]" onClick={openModal}>Join</button>
              <button className="btn bg-[#fff] text-[#1AA7EC] w-[175px] hover:btn flex items-center text-center">Learn More<BiChevronRight /></button>
            </div>

          </div>

        </div>
      </section>
      {/* ==============Services Section End============ */}

      {/* ============Feature Section ============ */}

      <section className="hero__section pt-[10px] 2xl:h-[600px]  ">
        <div className="container">
          <div className="flex flex-col lg:flex-row  items-center pl-[5rem] gap-[12rem]">

            <div>
              <div className="lg:w-[500px] ">
                <h1 className="text-[36px] leading-[120%] text-black font-[700] md:text-[48px] md:leading-[70px] ">
                  Unlock Your Potential and Make a Lasting Impact with UNYN
                </h1>
                <p className="text__para text-[18px] text-[#888E95] font-[400] leading-[120%] py-4">
                  Joining UNYN offers a unique opportunity for personal growth, professional development, and making a positive difference in the world. Our dynamic and impactful international student society is dedicated to nurturing the talents and potential of young individuals across colleges and universities worldwide. Through our diverse range of programs, events, and initiatives, we empower the youth today to create a brighter and more promising future for tomorrow.
                </p>
              </div>

            </div>

            <img src={img3} alt="" />
          </div>
        </div>
      </section>
      {/* ============Feature Section End============ */}


      {/* =========== Testimonails =============== */}
      <section>
        <div className="container">
          <div className="xl:w-[500px] pl-[5rem]">
            <h2 className="heading text-[48px] font-[700] leading-[120%]">
              Member Testimonials
            </h2>
            <p className="text__para text-[18px] font-[400] leading-[120%] text-[#888E95]">
              Here what our members have to say about their experience with UNYN
            </p>
          </div>
        </div>
        <TestimonailList />
      </section>
      {/* =========== Testimonails End=============== */}

      {/* =========Join Us ============= */}
      <section className="hero__section pt-[75px] 2xl:h-[400px] bg-[#1AA7EC] text-center ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[10px] items-center justify-center">

            {/* =======Hero Content ========== */}

            <div>
              <div className="lg:w-full">
                <h1 className="text-[36px] leading-[120%] text-white font-[700] md:text-[48px] md:leading-[70px] ">
                  Empowering Your Potential with UNYN </h1>
                <p className="text-[18px] font-[400] leading-[120%]  py-7 text-white  ">
                  Join UNYN and unlock endless opportunities for growth
                </p>

                <div className="flex gap-[4rem] justify-center items-center">
                  <button className="btn bg-[#fff] text-[#1AA7EC] w-[148px] h-[48px]" onClick={openModal}>Join</button>
                  <button className="btn  bg-[#1AA7EC] border-[#fff] border-solid border-[1px] w-[148px] h-[48px] hover:btn flex items-center text-center hover:bg-[#fff] hover:border-[#1AA7EC] hover:border-[2px] hover:border-solid hover:text-[#1AA7EC]">Get Envolved</button>
                </div>

              </div>


            </div>
            {/* ====== Hero Content ========= */}



          </div>
        </div>
      </section>
      {/* =========Join Us End============= */}

      {/* ============NewsLetter ============= */}
      <section className="hero__section pt-[75px] 2xl:h-[500px]  ">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center pl-[5rem] gap-[12rem]">

            <div>
              <div className="lg:w-[555px] ">
                <h1 className="text-[36px] leading-[120%] text-black font-[700] md:text-[48px] md:leading-[70px] ">
                  Stay Updated with UNYN Newsletter
                </h1>
                <p className="text__para text-[18px] text-[#888E95] font-[400] leading-[120%] py-4">
                  Gets the latest updates, news and exciting opportunities for UNYN.
                </p>
              </div>
              <div className="flex items-center w-full gap-[30px]">
                <div className="max-w-[570px] mt-[30px] mx-auto bg-[#fff] rounded-full flex items-center ">
                  <input
                    type="email"
                    className="py-4 pl-4 pr-2 h-[48px] bg-[#fff] w-[360px] text-[#888E95] focus:outline-none cursor-text border-[1px] border-[solid] border-[#1AA7EC] rounded-full"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="btn mt-[30px] rounded-full w-[165px] h-[48px] text-center">
                  Sign Up
                </button>
              </div>
              <p className="text__para text-[14px] text-[#888E95] font-[400] leading-[120%] py-0">
                By signing up, you agree to our Term and Conditions.
              </p>
            </div>

            <img src={img2} alt="" />
          </div>
        </div>
      </section>
      {/* ============NewsLetter End============= */}

      {/*==========Contact Us==============  */}
      <section className="hero__section pt-[60px] 2xl:h-[700px] ">
        <div className="container">
          <div className="flex flex-col lg:flex-row pl-[5rem] gap-[12rem] items-center">

            <div>
              <div className="lg:w-[555px] ">
                <h1 className="text-[36px] leading-[120%] text-black font-[700] md:text-[48px] md:leading-[70px] ">
                  Get in touch
                </h1>
                <p className="text-[18px] text-[#5F6368] font-[400] leading-[120%] py-2">
                  <span className="text-[#0B4765]">Contact with our team</span>  to talk about how we can help your business process at scale, or sign up for more info
                </p>
                <div className="py-[3rem]">
                  <p className=" gap-[1rem] flex items-center w-[318px]">
                    <span><IoLocationSharp className="w-[24px] h-[24px] " /> </span>
                    1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032
                  </p>
                  <p className="py-[1rem] gap-[1rem] flex items-center w-[318px]">
                    <span><BsFillTelephoneFill className="w-[24px] h-[24px] " /> </span>
                    +91-8888888888
                  </p>
                  <p className="py-[1rem] gap-[1rem] flex items-center w-[318px]">
                    <span><IoMdMail className="w-[24px] h-[24px] " /> </span>
                    info@unyn.com
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-[80px]">
              <h2 className="text-[48px] font-[700] leading-[120%] px-7">Say Something</h2>
              <form
                className="mt-[30px] bg-[#fff] w-[555px] h-[552px] px-7 flex-col justify-center items-center space-y-5 relative z-[99]"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[480px] h-[54px] px-4 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                  placeholder="Your Name..."
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[480px] h-[54px] px-4 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                  placeholder="Your Mail...."
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-[480px] h-[188px] px-4 pt-4 text-[#888E95] bg-[#fff] border-[1px] border-[solid] border-[#1AA7EC] rounded-[10px] focus:outline-none"
                  placeholder="Message..."
                />
                <div>
                  <button className="btn w-[480px] h-[48px] rounded-[10px]" type="submit" onClick={sendMail}>
                    Submit
                  </button>
                </div>
              </form>
              <div className="relative bottom-[3rem] z-[99] pl-[2rem]">
                {isSuccess && (
                  <p className="text-green-600 ">Your message has been sent successfully!</p>
                )}
                {isError && (
                  <p className="text-red-600">Sorry, there was an error sending your message. Please try again later.</p>
                )}
              </div>
            </div>


          </div>
        </div>
      </section>
      {/*==========Contact Us End==============  */}

      {/* Modal Window which opens whenever one clicks on Join Us */}
      {/* ============Sign Up =========== */}
      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content w-[500px]">
            <div className="flex items-center justify-end">
              <button className="close-btn" onClick={closeModal}>
                <RxCross2 className="w-[24px] h-[24px] text-[grey]" />
              </button>
            </div>
            <SignUp />
          </div>
        </div>
      )}
      {/* ============Sign Up =========== */}



    </>
  )
}

export default Home