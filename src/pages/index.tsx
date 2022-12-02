import Head from "next/head";
import { ButtonOrcamento, HomeContainer, Slide } from "../styles/pages/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
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
          slidesPerView={1}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide backgroundImage="/images/slide01.jpg">
              <h1>Projetos Elétricos</h1>
              <p>
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
              <ButtonOrcamento>Faça um orçamento</ButtonOrcamento>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide02.jpg">
              <h1>ART</h1>
              <p>
                ART para ligação de padrão à pedido da concessionária de
                energia.
              </p>
              <ButtonOrcamento>Faça um orçamento</ButtonOrcamento>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide03.jpg">
              <h1>Projeto de energia solar</h1>
              <p>
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
              <ButtonOrcamento>Faça um orçamento</ButtonOrcamento>
            </Slide>
          </SwiperSlide>
        </Swiper>
      </HomeContainer>
    </>
  );
}
