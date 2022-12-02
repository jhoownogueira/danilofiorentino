import { ButtonWhatsapp, HeaderContainer } from "../styles/Header";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function Header() {
  const router = useRouter();
  const [isOpenBurguerMenu, setOpenBurguerMenu] = useState(true);

  function openMenuMobile() {
    setOpenBurguerMenu(!isOpenBurguerMenu);
  }
  return (
    <HeaderContainer menuMobile={isOpenBurguerMenu}>
      <div className="grid">
        <img src="../images/logobig.svg" />
        <nav className="menu-desktop">
          <ul>
            <li>
              <Link
                href="/"
                className={router.pathname == "/" ? "activeLink" : ""}
              >
                Página inicial
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className={router.pathname == "/servicos" ? "activeLink" : ""}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-mim"
                className={router.pathname == "/sobre-mim" ? "activeLink" : ""}
              >
                Sobre mim
              </Link>
            </li>
            <li>
              <Link
                href="/duvidas"
                className={router.pathname == "/duvidas" ? "activeLink" : ""}
              >
                Dúvidas
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={router.pathname == "/contato" ? "activeLink" : ""}
              >
                Contato
              </Link>
            </li>
          </ul>
          <ButtonWhatsapp
            href="https://api.whatsapp.com/send?phone=5517996353232"
            target="_blank"
          >
            <img src="/icons/wwp.svg" />
            Whatsapp
          </ButtonWhatsapp>
        </nav>
        <nav className="menu-mobile">
          <ul>
            <li>
              <Link
                href="/"
                className={router.pathname == "/" ? "activeLink" : ""}
              >
                Página inicial
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className={router.pathname == "/servicos" ? "activeLink" : ""}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-mim"
                className={router.pathname == "/sobre-mim" ? "activeLink" : ""}
              >
                Sobre mim
              </Link>
            </li>
            <li>
              <Link
                href="/duvidas"
                className={router.pathname == "/duvidas" ? "activeLink" : ""}
              >
                Dúvidas
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={router.pathname == "/contato" ? "activeLink" : ""}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5517996353232"
                target="_blank"
              >
                <img src="/icons/wwp.svg" />
                Whatsapp
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={openMenuMobile} className="btn-mobile">
          <Hamburger toggled={isOpenBurguerMenu} toggle={setOpenBurguerMenu} />
        </button>
      </div>
    </HeaderContainer>
  );
}
