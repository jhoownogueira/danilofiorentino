import Head from "next/head";
import {
  ButtonOrcamento,
  CardServicos,
  HomeContainer,
  SecondaryButton,
  ServicosContainer,
  Slide,
} from "../styles/pages/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FileText, Fire, House, Lightning } from "phosphor-react";

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
        <ServicosContainer>
          <div className="grid">
            <h2>Serviços</h2>
            <div className="servicos">
              <CardServicos>
                <Fire size={60} weight="fill" />
                <h4>Projeto de combate ao incêndio</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos>
                <Lightning size={60} weight="fill" />
                <h4>Entrada de energia elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos>
                <House size={60} weight="fill" />
                <h4>Instalação elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos>
                <FileText size={60} weight="fill" />
                <h4>ART elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
            </div>
            <SecondaryButton>Todos os serviços</SecondaryButton>
          </div>
        </ServicosContainer>
      </HomeContainer>
    </>
  );
}
