import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    role: "Startup Founder",
    review:
      "Working with Muntasir was fantastic. The project was delivered on time with exceptional quality.",
  },
  {
    name: "James Lee",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    review:
      "Excellent communication and top-notch coding skills. The UI was stunning and backend rock solid.",
  },
  {
    name: "Emily Smith",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
    review:
      "Turned our idea into a fully functional web app that our customers love. Highly recommended!",
  },
  {
    name: "Michael Carter",
    role: "CEO",
    avatar:
      "hhttps://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Professional, efficient, and very creative. The project exceeded expectations in every way.",
  },
  {
    name: "Laura Martinez",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=200&auto=format&fit=crop&q=60",
    review:
      "Loved the attention to detail and modern design approach. Everything was pixel-perfect.",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328e29df?w=200&auto=format&fit=crop&q=60",
    review:
      "Code quality was excellent. The documentation was clear and the app ran flawlessly.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4  lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h4 className="text-spotify font-bold text-sm sm:text-lg mb-2">
            TESTIMONIALS
          </h4>
          <h2 className="text-2xl sm:text-5xl font-extrabold">
            What <span className="text-spotify">People</span> Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // 2 seconds
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
