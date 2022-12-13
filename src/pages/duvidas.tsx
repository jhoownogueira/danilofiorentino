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
                  ART é o documento que define, para os efeitos legais, os responsáveis técnicos pelo desenvolvimento de atividade técnica no âmbito das profissões abrangidas pelo Sistema Confea/Crea.
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
                  O primeiro passo é sempre saber a potência do equipamento e ser energizado, para que assim chegue ao cabo e disjuntor ideal,  sem correr risco de acidentes.
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
                  O Inicio se dá sempre pelo levantamento da infraestrutura de rede primaria da concessionaria, fazendo assim a derivação para ampliação da rede, com a distribuição dos transformadores para atendimento dos clientes.
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
                  Em primeiro passo, é feito o levantamento das potência de todos os equipamentos elétricos para assim um dimensionamento ideal do padrão de energia, sendo ele monofásico, bifásico ou trifásico.
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
                  Universalização é quando a propriedade rural não tem nenhum ponto de energia, e vai ser colocado o primeiro, pode ser feito o pedido pela universalização na concessionaria de energia local, podendo não haver custos na construção da rede de energia para o proprietário.
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
                  O funcionamento da energia solar acontece da seguinte maneira: os módulos fotovoltaicos captam a luz do sol e produzem a energia. Essa é transportado até o inversor solar que irá converter a energia gerada pelo sistema para as características da rede elétrica.
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
                  De acordo com as normas, a concessionaria de energia é obrigada a fornecer até 75KVA de potência para um padrão em atendimento de rede secundaria, acima dessa potência, deve ser entrado com projeto particular para construção de um posto de transformação para atendimento do cliente.
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
