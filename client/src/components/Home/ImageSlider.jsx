import { useState } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    if (!Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    return (
        <section className='slider'>
            <div>
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='travel image' className='image w-[550px] h-[550px]' />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className='bg-[#E8F6FD]'>
                <div>
                    <h2 className='py-3 px-6 font-[550] leading-6 '>
                        Empower the Youth Today
                    </h2>
                    <p className='px-6 font-[200] leading-4 '>
                        Unlock Your Potential and Make a Difference
                    </p>
                </div>
                <div className='flex items-center py-[1rem] justify-between px-3'>
                    <div className='slider-dots flex gap-[2px]  '>
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === current ? 'active' : ''}`}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    background: index === current ? '#106690' : '#9DC0D1',
                                    borderRadius: '99999px',
                                }}
                            />
                        ))}
                    </div>

                    <div className='flex items-center gap-[1rem]'>
                        <FiArrowLeftCircle className='left-arrow cursor-pointer text-[#106690] h-[1rem]' onClick={prevSlide} />
                        <FiArrowRightCircle className='right-arrow cursor-pointer text-[#106690] h-[1rem]' onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </section>
    );
};

ImageSlider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ImageSlider;
