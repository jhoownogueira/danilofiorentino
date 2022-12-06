import Link from "next/link";
import { Envelope } from "phosphor-react";
import { FooterContainer } from "../styles/Footer";

export function Footer() {
  return (
    <FooterContainer>
      <div className="grid">
        <main>
          <ul>
            <li>
              <img src="../images/logobig.svg" className="logo" />
            </li>
            <li>
              <strong>Danilo Fiorentino</strong>
              <span>Engenheiro Eletricista</span>
              <span>Engenheiro de segurança do trabalho</span>
              <span>CREA 5069263903</span>
            </li>
            <li>
              <strong>Contato</strong>
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
            </li>
          </ul>
        </main>
        <div className="bottom">
          <small>© Copyright 2022</small>
          <a
            className="dev"
            href="https://jhonatanogueira.com/"
            target="_blank"
          >
            <small>Desenvolvido por</small>
            <img src="/icons/logo-jhoow.svg" alt="Jhonata Nogueira" />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}
