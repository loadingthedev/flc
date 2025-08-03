"use client";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    platform: "Google",
    logo: "/logos/google.svg",
    rating: "5.0",
    name: "John Doe",
    review:
      "Fantastic service! The team was professional and exceeded my expectations. Highly recommended.",
  },
  {
    platform: "Facebook",
    logo: "/logos/facebook.svg",
    rating: "4.8",
    name: "Jane Smith",
    review:
      "Very responsive and helpful throughout the process. Will definitely use their services again.",
  },
  {
    platform: "Trustpilot",
    logo: "/logos/trustpilot.svg",
    rating: "5.0",
    name: "Michael Lee",
    review:
      "Excellent experience from start to finish. The staff was knowledgeable and friendly.",
  },
  {
    platform: "Google",
    logo: "/logos/google.svg",
    rating: "4.9",
    name: "Emily Clark",
    review:
      "Quick turnaround and great communication. Highly satisfied with the results.",
  },
  {
    platform: "Facebook",
    logo: "/logos/facebook.svg",
    rating: "5.0",
    name: "David Kim",
    review:
      "Top-notch service! Everything was handled smoothly and efficiently.",
  },
  {
    platform: "Trustpilot",
    logo: "/logos/trustpilot.svg",
    rating: "4.7",
    name: "Sophia Turner",
    review:
      "Very pleased with the professionalism and quality of work. Will recommend to others.",
  },
  {
    platform: "Google",
    logo: "/logos/google.svg",
    rating: "5.0",
    name: "Chris Evans",
    review:
      "Outstanding support and attention to detail. Couldn't ask for more.",
  },
  {
    platform: "Facebook",
    logo: "/logos/facebook.svg",
    rating: "4.9",
    name: "Olivia Brown",
    review: "They went above and beyond to ensure my satisfaction. Great team!",
  },
];

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const totalStars = hasHalf ? fullStars + 1 : fullStars;

  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) =>
        i < fullStars ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
    </div>
  );
}

export default function RecentReviewsCarousel() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001d47] mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Grid, Autoplay]}
          slidesPerView={4}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-md p-5 h-[270px] w-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={review.logo}
                    alt="platform logo"
                    className="w-6 h-6"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {review.platform}
                  </p>
                </div>
                <div className="text-sm text-gray-600 mb-1 flex flex-col gap-1">
                  <span className="font-medium">Rating: {review.rating}</span>
                  {renderStars(parseFloat(review.rating))}
                </div>
                <p className="font-semibold text-gray-900 text-md mb-1">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
