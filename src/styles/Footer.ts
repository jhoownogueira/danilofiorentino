import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  margin-top: 6rem;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    main {
      width: 100%;
      padding: 5rem 0;
      border-bottom: 1px solid ${props => props.theme["gray-200"]};
      border-top: 1px solid ${props => props.theme["gray-200"]};

      ul {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        li {
          width: 100%;
          display: flex;
          flex-direction: column;

          font-weight: 500;
          font-size: 1.125rem;
          line-height: 2.25rem;
          color: ${(props) => props.theme["gray-500"]};

          .logo {
            width: 100%;
            max-width: 281px;
          }

          a {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-start;
            align-items: center;

            font-weight: 500;
            font-size: 1.125rem;
            line-height: 2.25rem;
            color: ${(props) => props.theme["gray-500"]};
          }
        }
      }
    }

    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;

      a {
            color: ${props => props.theme["gray-500"]};
        }

      .dev {
        display: flex;
        gap: 0.8rem;
        align-items: center;

      }
    }
  }

  @media (max-width: 850px) {
    .grid {
      main {
        ul {
            gap: 2rem;
            flex-direction: column;
            align-items: center;
            text-align: center;
            li {
                align-items: center;
            }
        }
      }
    }
  }
`;
