import Head from "next/head";
import Link from "next/link";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Check, Envelope } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import { AlertContent, ButtonAlert, ContatoContainer, ContatoContent, FormEng, Overlay } from "../styles/pages/Contato";

export default function Contato() {
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

  return (
    <>
      <Head>
        <title>Contato</title>
        <title>Dúvidas</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Contato" />
        <meta
          name="description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danilofiorentino.com/" />
        <meta property="og:title" content="Contato" />
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
          content="Contato"
        />
        <meta
          property="twitter:description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />
        <meta property="twitter:image" content="/images/meta.jpg" />
      </Head>
      <ContatoContainer>
        <header>
          <div className="grid">
            <div className="title">
              <h1>Contato</h1>
            </div>
          </div>
        </header>
      </ContatoContainer>
      <ContatoContent>
        <div className="grid">
          <div className="left">
            <div className="title">
              <h2>Danilo Diorentino</h2>
              <span>
                Engenheiro Eletricista & Engenheiro de Segurança do Trabalho
              </span>
            </div>
            <Link
              href="https://api.whatsapp.com/send?phone=5517996353232"
              target="_blank"
            >
              <img src="/icons/wwp-gray.svg" />
              (17) 99635-3232
            </Link>
            <Link href="mailto:danilofiorentino00@gmail.com">
              <Envelope size={24} />
              danilofiorentino00@gmail.com
            </Link>
          </div>
          <div className="right">
          <FormEng
            onSubmit={handleSubmit(sendForm)}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>Envie uma mensagem</h4>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" {...register("nome")} />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" {...register("email")} />
            </div>
            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                cols={30}
                rows={10}
                {...register("mensagem")}
              />
            </div>
            <button type="submit">Enviar mensagem</button>
          </FormEng>
          </div>
        </div>
      </ContatoContent>
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
