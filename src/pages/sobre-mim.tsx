import Head from "next/head";
import { Banner, FormEng, SobreMimContainer } from "../styles/pages/SobreMim";

export default function Sobremim() {
  return (
    <>
      <Head>
        <title>Sobre mim | Eng.Danilo</title>
      </Head>
      <SobreMimContainer>
        <div className="grid">
          <div className="left">
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
            <img src="/images/daniloSobreMim.png" className="engenheiro" />
            <img src="/images/circlesSobreMim.png" className="circles" />
          </div>
        </div>
      </SobreMimContainer>
      <Banner>
        <div className="grid">
          <div className="info">
            <h4>10+</h4>
            <span>Projetos concluídos</span>
          </div>
          <div className="info">
            <h4>9+</h4>
            <span>Anos de experiência</span>
          </div>
          <div className="info">
            <h4>50+</h4>
            <span>Projetos clientes</span>
          </div>
          <FormEng>
            <h4>Tire suas dúvidas comigo</h4>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea name="mensagem" id="mensagem" cols={30} rows={10} />
            </div>
            <button type="submit">Enviar mensagem</button>
          </FormEng>
        </div>
      </Banner>
    </>
  );
}
