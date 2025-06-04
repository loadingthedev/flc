"use client";

import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    name: "Michael Cairney",
    platform: "Google Reviews",
    rating: 4.9,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    review:
      "Generating and lodging a Will in the UAE as a British ex-pat Couple used to be a big challenge...",
  },
  {
    name: "Steve",
    platform: "ShopperApproved",
    rating: 4.8,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://cdn.legalinz.com/imgs/shopper.svg",
    review: "Great communication and everything explained and kept simple...",
  },
  {
    name: "Prashanth R",
    platform: "ShopperApproved",
    rating: 4.8,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://cdn.legalinz.com/imgs/shopper.svg",
    review:
      "Very satisfied with their professional services. Prompt support and info were provided...",
  },
  {
    name: "Andrea Mordini",
    platform: "Google Reviews",
    rating: 4.9,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    review: "Extremely quick service, they came back to me within few hours...",
  },
  {
    name: "Wissam Riad",
    platform: "ShopperApproved",
    rating: 4.8,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://cdn.legalinz.com/imgs/shopper.svg",
    review: "Excellent and professional service, very accurate and reliable.",
  },
  {
    name: "Sanjeev Goel",
    platform: "Google Reviews",
    rating: 4.9,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    review: "I have used Legal Inz a couple of times. Found them the best...",
  },
  {
    name: "Anjali Verma",
    platform: "ShopperApproved",
    rating: 4.7,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://cdn.legalinz.com/imgs/shopper.svg",
    review:
      "Quick, smooth process and very user-friendly approach. Highly recommended!",
  },
  {
    name: "Nina Dsouza",
    platform: "Google Reviews",
    rating: 4.9,
    stars:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    review:
      "The team helped us get our Will sorted without any stress. Perfect service.",
  },
];

export default function RecentReviewsCarousel() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#001d47]">
        Recent Reviews
      </h2>

      <Swiper
        modules={[Grid, Autoplay]}
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition-transform duration-300 hover:scale-105 flex flex-col gap-3 w-[200px] h-[250px] mx-auto">
              <div className="flex items-center gap-2">
                <img src={review.logo} alt="logo" className="w-6 h-6" />
                <p className="text-sm font-semibold text-gray-700">
                  {review.platform}
                </p>
              </div>
              <p className="text-sm text-gray-600 flex">
                {" "}
                {review.rating}
                <img
                  src={review.stars}
                  alt="stars"
                  className="w-24 h-5 object-contain"
                />{" "}
              </p>

              <p className="font-semibold text-gray-800 text-md">
                {review.name}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3"></p>
              <p className=" text-gray-800 text-sm">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
