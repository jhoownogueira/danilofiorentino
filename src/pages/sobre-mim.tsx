import Head from "next/head";
import {
  AlertContent,
  Banner,
  ButtonAlert,
  FormEng,
  Overlay,
  SobreMimContainer,
} from "../styles/pages/SobreMim";
import { api } from "../services/api";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { useForm } from "react-hook-form";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Check } from "phosphor-react";

export default function Sobremim() {
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  async function sendForm(data: any) {
    await api
      .post("/send", data)
      .catch((error) => {
        console.log(error);
      })
      .then((response: any) => {
        if (response.status === 200) {
          console.log("Email Enviado");
          setIsOpen(true);
        }
      })
      .finally(() => {
        reset();
      });
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Engenheiro Eletricista | Danilo</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Engenheiro Eletricista | Danilo" />

        <meta
          name="description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danilofiorentino.com/" />
        <meta property="og:title" content="Engenheiro Eletricista | Danilo" />
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
          content="Engenheiro Eletricista | Danilo"
        />
        <meta
          property="twitter:description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />
        <meta property="twitter:image" content="/images/meta.jpg" />
      </Head>
      <SobreMimContainer>
        <div className="grid">
          <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <h1>Danilo Fiorentino</h1>
            <span>
              Engenheiro Eletricista & Engenheiro de Segurança do Trabalho
            </span>
            <p>
              Engenheiro Eletricista pós-graduado em Engenharia de Segurança do
              Trabalho, formado em 2013, experiência com projetos de instalação
              elétrica de baixa e media tensão, projetos de Loteamento, posto de
              Transformação Rural, micro e minigeração solar. Aposta na
              inovação, na tecnologia para gerar soluções de engenharia que
              contribuem para o desenvolvimento.
            </p>
          </div>
          <div className="right">
            <img
              src="/images/daniloSobreMim.png"
              className="engenheiro"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <img
              src="/images/circlesSobreMim.png"
              className="circles"
              data-aos="fade-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </SobreMimContainer>
      <Banner>
        <div className="grid">
          <div className="info" data-aos="fade-up" data-aos-duration="1500">
            <h4>100+</h4>
            <span>Projetos concluídos</span>
          </div>
          <div className="info" data-aos="fade-down" data-aos-duration="1500">
            <h4>9+</h4>
            <span>Anos de experiência</span>
          </div>
          <div className="info" data-aos="fade-up" data-aos-duration="1500">
            <h4>50+</h4>
            <span>Clientes</span>
          </div>
          <FormEng
            onSubmit={handleSubmit(sendForm)}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>Tire suas dúvidas comigo</h4>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" {...register("nome")} required/>
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" {...register("email")} required/>
            </div>
            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                cols={30}
                rows={10}
                {...register("mensagem")}
                required
              />
            </div>
            <button type="submit">Enviar mensagem</button>
          </FormEng>
        </div>
      </Banner>

      <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog.Trigger />
        <AlertDialog.Portal>
          <Overlay />
          <AlertContent>
            <AlertDialog.Title className="title">
              <div className="icon">
                <Check size={32} weight="bold" />
              </div>
            </AlertDialog.Title>
            <AlertDialog.Description>
              <p>Seu e-mail foi enviado com sucesso!</p>
            </AlertDialog.Description>
            <ButtonAlert>Voltar</ButtonAlert>
          </AlertContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}
