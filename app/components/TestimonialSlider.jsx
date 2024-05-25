import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const testimonials = [
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    message: 'This is an amazing portfolio site! Highly recommended.',
  },
  {
    name: 'Jane Smith',
    designation: 'Project Manager',
    message: 'Great work! The design is clean and professional.',
  },
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    message: 'This is an amazing portfolio site! Highly recommended.',
  },
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    message: 'This is an amazing portfolio site! Highly recommended.',
  },
  // Add more testimonials here
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
              <p className="mt-2 text-gray-700 text-center">{testimonial.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
