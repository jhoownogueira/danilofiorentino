import styled from "styled-components";

interface HeaderProps {
    menuMobile: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  z-index: 97;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  .grid {
    position: relative;
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-desktop {
      width: 100%;
      max-width: 47.25rem;
      display: flex;
      justify-content: space-between;
      padding-left: 4rem;

      ul {
        width: 100%;
        max-width: 33.375rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: 500;
        font-size: 1rem;
        line-height: 112%;
        color: ${(props) => props.theme["gray-900"]};

        li {
          a {
            color: ${(props) => props.theme["gray-900"]};

            &.activeLink {
              color: ${(props) => props.theme["primary-color-light"]};
            }
          }
        }
      }
    }

    .menu-mobile {
      position: absolute;
      z-index: 98;
      right: 0;
      top: -25px;
      width: ${props => props.menuMobile ? "250px" : "0"};
      height: 100vh;
      display: none;
      background: ${props => props.theme["primary-color-light"]};
      transition: all 0.2s ease-out;

      ul {
        width: 80%;
        margin: 88px 2rem 0;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
        opacity: ${props => props.menuMobile ? "1" : "0"};
        transition: all 0.2s ease-out;

        font-weight: 500;
        font-size: 1rem;
        line-height: 112%;

        li {
            height: 2rem;
            a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${(props) => props.theme.white};

            img {
                width: 1rem;
            }

            &.activeLink {
              color: ${(props) => props.theme["gray-200"]};
            }
          }
        }
      }

    }

    .btn-mobile {
        position: absolute;
        z-index: 99;
        right: 16px;
        top: -8px;
        display: none;

        background: transparent;
        border: none;
    }
  }

  @media (max-width: 850px) {
    .grid {
      .menu-desktop {
        display: none;
      }

      .menu-mobile, .btn-mobile {
        display: block;
      }
      
    }
  }
`;

export const ButtonWhatsapp = styled.a`
  width: 100%;
  max-width: 8rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  background: ${(props) => props.theme.green};
    border: 1px solid ${(props) => props.theme.green};

  line-height: 2.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.white};

  img {
    width: 1rem;
  }

  &:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme["primary-color-light"]};
    border: 1px solid ${(props) => props.theme["primary-color-light"]};
  }
`;
