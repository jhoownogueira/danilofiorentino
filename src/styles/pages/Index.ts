import styled from "styled-components";

interface ImageBackgroundProps {
  backgroundImage: string;
}

export const HomeContainer = styled.section`
  width: 100%;
  padding: 88px 0;

  .swiper {
    width: 100%;
    height: 720px;

    .swiper-pagination {
      margin-bottom: 1rem;
      .swiper-pagination-bullet {
        width: 60px;
        height: 5px;
        border-radius: 0;
        background: ${(props) => props.theme["primary-color-hover"]};
        transition: all 0.3s;
        margin: 0.2rem;
      }
      .swiper-pagination-bullet-active-next,
      .swiper-pagination-bullet-active-next-next,
      .swiper-pagination-bullet-active-prev,
      .swiper-pagination-bullet-active-prev-prev {
        transform: scale(1);
        height: 4px;
        opacity: 1;
        background: ${(props) => props.theme.white};
      }
    }
  }

  @media (max-width: 850px) {
    margin-bottom: 88px;
    .swiper {
      height: 450px;
    }
  }
`;

export const Slide = styled.div<ImageBackgroundProps>`
  width: 100%;
  height: 720px;
  padding: 0 1rem;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 66px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.white};
  }

  p {
    display: block;
    width: 100%;
    height: 7rem;
    max-width: 37.5rem;
    margin: 1.5rem 0 2.625rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 850px) {
    background-position: 65% 0;
    height: 450px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const ButtonOrcamento = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: 48px;
  max-width: 37.5rem;
  border-radius: 4px;
  border: 1px solid transparent;
  background: ${(props) => props.theme["primary-color-hover"]};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  font-size: 1rem;

  &:hover {
    transition: all 0.2s ease-out;
    background: ${(props) => props.theme["primary-color-light"]};
  }
`;

export const ServicosContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 8.75rem;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      display: block;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
      color: ${(props) => props.theme["gray-600"]};
    }

    .servicos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;
      margin-bottom: 3.75rem;
    }
  }

  @media (max-width: 850px) {
    .grid {
      .servicos {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const CardServicos = styled.div`
  width: 100%;
  max-width: 16.875rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: ${(props) => props.theme["primary-color-light"]};
  }

  h4 {
    width: 100%;
    max-width: 11.5625rem;
    height: 3.15rem;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5625rem;
    text-align: center;
    color: ${(props) => props.theme["gray-600"]};
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.875rem;
    text-align: center;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  max-width: 17.75rem;
  line-height: 3rem;
  background: transparent;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["primary-color-light"]};
  color: ${(props) => props.theme["primary-color-light"]};
  font-weight: 700;
  font-size: 1rem;

  &:hover {
    background: ${(props) => props.theme["primary-color-light"]};
    color: ${(props) => props.theme.white};
    transition: all 0.2s ease-out;
  }
`;

export const SobreMim = styled.section`
  width: 100%;
  height: 836px;
  background: url("/images/bgSobreMim.png") no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    gap: 3.5rem;
    flex-direction: column;
    align-items: center;

    h2 {
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
      color: ${(props) => props.theme.white};
    }

    .banner {
      display: flex;
      gap: 0.25rem;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 43.75rem;
      padding: 2.5rem 2.25rem;
      background: ${(props) => props.theme.background};
      margin-bottom: -13.75rem;

      h3 {
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 3rem;
        text-align: center;
        color: ${(props) => props.theme["gray-600"]};
      }
    }

    .content {
      width: 100%;
      display: flex;
      gap: 5rem;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 50%;

        h3,
        span,
        p {
          color: ${(props) => props.theme.white};
        }

        h3 {
          font-weight: 800;
          font-size: 2.5rem;
          line-height: 3.4375rem;
          letter-spacing: -0.01em;
        }

        span {
          display: block;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.375rem;
          letter-spacing: -0.01em;
          margin-top: 0.25rem;
          margin-bottom: 2.875rem;
        }

        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.875rem;
        }
      }
      .line {
        width: 1px;
        height: 450px;
        background: ${(props) => props.theme["gray-200"]};
      }
      .right {
        width: 50%;
        img {
          width: 100%;
          max-width: 420px;
        }
      }
    }

  }

  @media (max-width: 850px) {
    height: 780px;
    background-size: cover;
    align-items: flex-start;
    padding-top: 5rem;
    .grid {
      h2 {
        display: none;
      }
      .banner {
        margin-bottom: -10.75rem;
      }
      .content {
        width: 100%;
        flex-direction: column;
        .left {
          width: 100%;
          text-align: center;
        }
        .line {
          display: none;
        }
      }
    }
  }
`;
