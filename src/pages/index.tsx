import Head from "next/head";
import {
  ButtonOrcamento,
  CardServicos,
  HomeContainer,
  SecondaryButton,
  ServicosContainer,
  Slide,
  SobreMim,
} from "../styles/pages/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FileText, Fire, House, Lightning } from "phosphor-react";
import { ButtonWhatsapp } from "../styles/Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Projetos Elétricos | ART Elétrica</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Projetos Elétricos | ART Elétrica" />
        <meta
          name="google-site-verification"
          content="PxNpBexejv-cXKQHKOtsV1mVMmVjnCRCdIvQcyRlyU0"
        />
        <meta
          name="description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danilofiorentino.com/" />
        <meta property="og:title" content="Projetos Elétricos | ART Elétrica" />
        <meta
          property="og:description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />
        <meta property="og:image" content="/images/meta.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.danilofiorentino.com/"
        />
        <meta
          property="twitter:title"
          content="Projetos Elétricos | ART Elétrica"
        />
        <meta
          property="twitter:description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />
        <meta property="twitter:image" content="/images/meta.jpg" />
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
            <Slide backgroundImage="/images/slide01A.jpg">
              <h1 data-aos="fade-right">Projetos Elétricos</h1>
              <p data-aos="fade-left">
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
              <ButtonOrcamento
                href="https://api.whatsapp.com/send?phone=5517996353232"
                target="_blank"
                data-aos="fade-in"
                data-aos-duration="500"
              >
                Entrar em contato
              </ButtonOrcamento>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide02B.jpg">
              <h1>ART</h1>
              <p>
                ART para ligação de padrão à pedido da concessionária de
                energia.
              </p>
              <ButtonOrcamento
                href="https://api.whatsapp.com/send?phone=5517996353232"
                target="_blank"
              >
                Entrar em contato
              </ButtonOrcamento>
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide backgroundImage="/images/slide03C.jpg">
              <h1>Projeto de energia solar</h1>
              <p>
                Residencial, comercial, industrial, loteamento, posto de
                transformação rural e sob medida para sua empresa.
              </p>
              <ButtonOrcamento
                href="https://api.whatsapp.com/send?phone=5517996353232"
                target="_blank"
              >
                Entrar em contato
              </ButtonOrcamento>
            </Slide>
          </SwiperSlide>
        </Swiper>
        <ServicosContainer>
          <div className="grid">
            <h2>Serviços</h2>
            <div className="servicos">
              <CardServicos data-aos="fade-up" data-aos-duration="800">
                <Fire size={60} weight="fill" />
                <h4>Projeto de combate ao incêndio</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Lightning size={60} weight="fill" />
                <h4>Entrada de energia elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <House size={60} weight="fill" />
                <h4>Instalação elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
              <CardServicos
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <FileText size={60} weight="fill" />
                <h4>ART elétrica</h4>
                <p>
                  Collect reviews, Q&A and other content from your customers
                  started.
                </p>
              </CardServicos>
            </div>
            <SecondaryButton>
              <Link
                href="/servicos"
                className={router.pathname == "/" ? "activeLink" : ""}
              >
                Todos os serviços
              </Link>
            </SecondaryButton>
          </div>
        </ServicosContainer>
        <SobreMim data-aos="fade-up" data-aos-duration="800">
          <div className="grid">
            <h2>Sobre mim</h2>
            <div className="content">
              <div className="left">
                <h3>Danilo Fiorentino</h3>
                <span>
                  Engenheiro Eletricista & Engenheiro de Segurança do Trabalho
                </span>
                <p>
                  Engenheiro Eletricista pós-graduado em Engenharia de Segurança
                  do Trabalho, formado em 2013, experiência com projetos de
                  instalação elétrica de baixa e media tensão, projetos de
                  Loteamento, posto de Transformação Rural, micro e minigeração
                  solar. Aposta na inovação, na tecnologia para gerar soluções
                  de engenharia que contribuem para o desenvolvimento.
                </p>
              </div>
              <div className="line"></div>
              <div className="right">
                <img src="/images/daniloHome.png" />
              </div>
            </div>
            <div
              className="banner"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h3>Faça um orçamento comigo</h3>
              <ButtonWhatsapp
                href="https://api.whatsapp.com/send?phone=5517996353232"
                target="_blank"
              >
                <img src="/icons/wwp.svg" />
                Whatsapp
              </ButtonWhatsapp>
            </div>
          </div>
        </SobreMim>
      </HomeContainer>
    </>
  );
}
