import TestimonialImg from "@/public/images/large-testimonial.jpg";
import Image from "next/image";

export default function LargeTestimonial() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 text-center relative">
          {/* Quotation Icon */}
          <div className="absolute top-6 left-6 text-4xl text-gray-200 dark:text-gray-700 opacity-50 select-none">
            &ldquo;
          </div>

          {/* Testimonial Text */}
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed z-10 relative">
            FLC has transformed the way I manage tasks.{" "}
            <span className="text-gray-500 dark:text-gray-400 italic">
              It’s intuitive, fast, and reliable. I can’t imagine working
              without it anymore.
            </span>
          </p>

          {/* User Profile */}
          <div className="mt-8 flex flex-col items-center space-y-2">
            <Image
              src={TestimonialImg}
              width={64}
              height={64}
              alt="Testimonial avatar"
              className="rounded-full border-4 border-white dark:border-gray-700 shadow-md"
            />
            <div className="text-sm text-gray-800 dark:text-gray-100 font-semibold">
              Mary Sullivan
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              CTO at{" "}
              <span className="text-blue-600 dark:text-blue-400">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
