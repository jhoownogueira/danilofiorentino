import styled from "styled-components";

export const ServicosContainer = styled.section`
  width: 100%;
  height: 720px;
  padding: 88px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/images/bgServicos.png") no-repeat center center;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 50%;

      span {
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: ${(props) => props.theme.white};
      }

      h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 106.5%;
        letter-spacing: -0.01em;
        color: ${(props) => props.theme.white};
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }

      p {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 150%;
        color: ${(props) => props.theme.white};
        margin-bottom: 3rem;
      }
    }

    .right {
      width: 50%;
      height: 732px;
      position: relative;
      margin-top: 15rem;

      .capacete {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
      .circulo_interno {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
      }
      .circulo_externo {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 8;
      }
    }
  }

  @media (max-width: 1150px) {
    height: 930px;
    background: url("/images/bgServicos.png") no-repeat top center;
    align-items: flex-start;
    .grid {
      flex-direction: column;
      margin-top: 2rem;
      text-align: center;
      gap: 2rem;
      .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .right {
        width: 100%;
        margin: 0;
        height: 350px;
        
        img {
            width: 50%;
        }

        .capacete {
            left: calc(50% - 25%);
        }

        .circulo_interno {
            left: calc(50% - 25%);
            opacity: 0.5;
        }

        .circulo_externo {
            left: calc(50% - 25%);
        }
      }
      
    }
  }

  @media (max-width: 600px) {
   height: 720px;

  }
`;

export const ButtonOrcamento = styled.a`
  width: 100%;
  max-width: 25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2370d5;
  border: 1px solid #63a0f0;
  border-radius: 4px;

  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme["primary-color-hover"]};
    transition: all 0.2s;
  }
`;

export const AllServices = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
      width: 100%;
      text-align: center;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 48px;
      color: ${(props) => props.theme["gray-600"]};
      margin-bottom: 4rem;
    }

    .swiper {
        width: 100%;
    }

    .swiper-slide {
      width: 100%;
      max-width: 26.25rem;
    }
  }

  @media (max-width: 600px) {
   .grid {
    .swiper-slide {
      width: 100%;
      max-width: 20rem;
    }
   }

  }
`;

export const SlideServico = styled.div`
  width: 100%;
  max-width: 26.25rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme["gray-200"]};
  border-radius: 20px;

  padding: 4rem 1.75rem;

  svg {
    color: ${(props) => props.theme["primary-color-light"]};
  }

  h4 {
    height: 4.25rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 33px;
    color: ${(props) => props.theme["gray-600"]};
    text-align: center;
    margin-top: 1.8125rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 40px;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
  }

  @media (max-width: 600px) {
   h4 {
    font-size: 1.5rem;
   }
   }

`;

export const ButtonCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 4rem;
  background: transparent;
  border: 0;
  border-radius: 8px;
  margin-top: 1rem;
  color: ${(props) => props.theme["primary-color-light"]};
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    border: 1px solid ${(props) => props.theme.green};
    color: ${(props) => props.theme.green};
    filter: brightness(0.8);
    transition: all 0.2s;
  }

  @media (max-width: 600px) {
    width: 75%;
   }
`;
