import Head from "next/head";
import {
  AllServices,
  ButtonCard,
  ButtonOrcamento,
  ServicosContainer,
  SlideServico,
} from "../styles/pages/Servicos";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper";
import {
  FileText,
  House,
  LightbulbFilament,
  Lightning,
  Sun,
  File,
  Fire,
} from "phosphor-react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Servicos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Serviços | Eng.Danilo</title>
      </Head>
      <ServicosContainer>
        <div className="grid">
          <div className="left">
            <span data-aos="fade-right" data-aos-duration="1000">
              Posso te ajudar?
            </span>
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Conheça os meus serviços
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              Profissionalismo, confiança, qualidade e comprometimento.
            </p>
            <ButtonOrcamento
              href="https://api.whatsapp.com/send?phone=5517996353232"
              target="_blank"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Faça um orçamento
            </ButtonOrcamento>
          </div>
          <div className="right">
            <img
              src="images/helmet.png"
              className="capacete"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <img
              src="images/circleborder.png"
              className="circulo_externo"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <img
              src="images/circlecenter.png"
              className="circulo_interno"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </ServicosContainer>
      <AllServices>
        <div className="grid">
          <h2 data-aos="fade-in" data-aos-duration="1000">
            Todos os meus serviços
          </h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={3}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: -25,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SlideServico>
                <House size={80} weight="fill" />
                <h4>Instalação Elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico>
                <Sun size={80} weight="fill" />
                <h4>Projeto de energia solar</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico data-aos="fade-right" data-aos-duration="1000">
                <LightbulbFilament size={80} weight="fill" />
                <h4>Projeto elétrico de loteamento</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico data-aos="fade-up" data-aos-duration="1000">
                <FileText size={80} weight="fill" />
                <h4>ART elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico data-aos="fade-left" data-aos-duration="1000">
                <Lightning size={80} weight="fill" />
                <h4>Entrada de energia elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico>
                <File size={80} weight="fill" />
                <h4>Laudo e perícia elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
            <SwiperSlide>
              <SlideServico>
                <Fire size={80} weight="fill" />
                <h4>Projeto de combate ao incêndio</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </SlideServico>
            </SwiperSlide>
          </Swiper>
          <ButtonCard
            href="https://api.whatsapp.com/send?phone=5517996353232"
            target="_blank"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Fazer um orçamento
          </ButtonCard>
        </div>
      </AllServices>
    </>
  );
}
