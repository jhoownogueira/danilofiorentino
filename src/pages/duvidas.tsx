import Head from "next/head";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionRoot,
  Accordions,
  DuvidasContainer,
  AccordionHeader,
  AccordionItem,
  AccordionContent,
} from "../styles/pages/Duvidas";

import { CaretRight } from "phosphor-react";

export default function Duvidas() {
  return (
    <>
      <Head>
        <title>Dúvidas</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Dúvidas" />
        <meta
          name="description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danilofiorentino.com/" />
        <meta property="og:title" content="Dúvidas" />
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
          content="Dúvidas"
        />
        <meta
          property="twitter:description"
          content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
        />
        <meta property="twitter:image" content="/images/meta.jpg" />
      </Head>
      <DuvidasContainer>
        <header>
          <div className="grid">
            <div className="title">
              <h1>Dúvidas?</h1>
            </div>
          </div>
        </header>
        <Accordions>
          <div className="grid">
            <AccordionRoot type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Pra que  serve a ART? (Anotação de Responsabilidade Técnica).</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Como dimensionar um circuito elétrico ideal?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Projeto Elétrico de Loteamento Urbano e Rural, por onde começar?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Padrão de Energia, qual o ideal para meu uso?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>O que é Universalização, que a concessionária de energia propõe?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Energia Solar, qual a melhor para meu uso?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionHeader>
                  <Accordion.Trigger>
                    <CaretRight size={32} />
                    <span>Qual a potência máxima que a concessionaria de energia é obrigada a nos atender sem o transformador?</span>
                  </Accordion.Trigger>
                </AccordionHeader>
                <AccordionContent>
                  <p>
                    Engenheiro Eletricista pós-graduado em Engenharia de
                    Segurança do Trabalho, formado em 2013, experiência com
                    projetos de instalação elétrica de baixa e media tensão,
                    projetos de Loteamento, posto de Transformação Rural, micro
                    e minigeração solar. Aposta na inovação, na tecnologia para
                    gerar soluções de engenharia que contribuem para o
                    desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </div>
        </Accordions>
      </DuvidasContainer>
    </>
  );
}
