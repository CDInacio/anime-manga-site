import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { useWindowSize } from "../../hooks/use-windowSize";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel({ airing }) {
  const { width } = useWindowSize();

  return (
    <div className="w-10/12	mx-auto mt-16">
      <p className="text-3xl	text-zinc-800 mb-10 font-bold	">Top Airing animes</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {airing?.map((item) => (
          <SwiperSlide key={item.mal_id} className="slide relative 	">
            <Image
              src={item.images.jpg.large_image_url}
              alt={item.title}
              width={370}
              height={400}
              objectFit="cover"
              className="rounded absolute "
            />
            <div
              style={{ textShadow: "0px 1px 1px #000000" }}
              className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-1xl md:text-5xl text-grey-100 font-semibold"
            >
              <Link href={`/detail/${item.mal_id}`} passHref>
                {item.title}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
