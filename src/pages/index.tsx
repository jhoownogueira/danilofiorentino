import Head from "next/head";
import { HomeContainer, Slide } from "../styles/pages/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Eng.Danilo</title>
      </Head>
      <HomeContainer>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide backgroundImage="/images/slide01.jpg">
              <h1>Projetos Elétricos</h1>
              <p>
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide02.jpg">
              <h1>ART</h1>
              <p>
                ART para ligação de padrão à pedido da concessionária de
                energia.
              </p>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide03.jpg">
              <h1>Projeto de energia solar</h1>
              <p>
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
            </Slide>
          </SwiperSlide>
        </Swiper>
      </HomeContainer>
    </>
  );
}
