// app/components/VideoSwiper.tsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VideoSwiper = () => {
  const videos = [
    {
      id: "bBzpha0ZV_s",
      url: "https://www.youtube.com/embed/bBzpha0ZV_s",
    },
    {
      id: "v_pGe9_2AAc",
      url: "https://www.youtube.com/embed/v_pGe9_2AAc",
    },
    {
      id: "BYnIsl-RBzY",
      url: "https://www.youtube.com/embed/BYnIsl-RBzY",
    },
    {
      id: "j_Kv8-ALVmA",
      url: "https://www.youtube.com/embed/j_Kv8-ALVmA",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">
          Featured Property Walkthroughs
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-8">
                <iframe
                  src={video.url}
                  width="100%"
                  height="350px"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8">
          <a
            href="https://www.youtube.com/playlist?list=PLkShjTVyPsv_BNgFJoU4YDB-cFK2PvIsJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-bold"
          >
            See Full Playlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSwiper;
