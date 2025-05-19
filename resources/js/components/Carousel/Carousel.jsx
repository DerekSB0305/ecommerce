import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = ({ children, spaceBetween = 20, ...props }) => {
    const unique_id = Math.random().toString(16).slice(2, 8);
    const pagination_button_next = "button-next-" + unique_id
    const pagination_button_prev = "button-prev-" + unique_id
    
    return (
        <div className="relative group">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={spaceBetween}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                loop={false}
                watchOverflow={true}
                navigation={{
                    nextEl: "." + pagination_button_next,
                    prevEl: "." + pagination_button_prev,
                }}
                {...props}
            >
                {children}
            </Swiper>
            
            <div className="flex items-center w-full absolute top-1/2 z-10 transform -translate-y-1/2">
                <button
                    aria-label="prev-button"
                    className={`${pagination_button_prev} absolute left-0 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm border border-amber-500/30 text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 opacity-0 group-hover:opacity-100`}
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    aria-label="next-button"
                    className={`${pagination_button_next} absolute right-0 translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm border border-amber-500/30 text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 opacity-0 group-hover:opacity-100`}
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    )
}

export default Carousel

export const CarouselItem = SwiperSlide;