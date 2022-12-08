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
        <title>Dúvidas | Eng.Danilo</title>
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
                    <span>Teste</span>
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
                    <span>Teste</span>
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
                    <span>Teste</span>
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
                    <span>Teste</span>
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
