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
      .swiper-pagination-bullet {
        width: 60px;
        height: 5px;
        border-radius: 0;
        background: ${(props) => props.theme["primary-color-light"]};
        transition: all 0.3s;
        margin: 0.2rem;
      }
      .swiper-pagination-bullet-active-next, .swiper-pagination-bullet-active-next-next, .swiper-pagination-bullet-active-prev, .swiper-pagination-bullet-active-prev-prev {
        transform: scale(1);
        height: 4px;
        opacity: 1;
        background: ${(props) => props.theme["gray-200"]};
      }
    }
  }

  @media (max-width: 850px) {
    height: 450px;
    margin-bottom: 88px;
    .swiper {
      height: 450px;
    }
  }
`;

export const Slide = styled.div<ImageBackgroundProps>`
  width: 100%;
  height: 720px;
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
    color: ${(props) => props.theme["primary-color-light"]};
  }

  p {
    width: 100%;
    max-width: 37.5rem;
    margin: 1.5rem 0 2.625rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    color: ${(props) => props.theme["gray-600"]};
  }

  @media (max-width: 850px) {
    background-position: 65% 0;
    height: 450px;
  }
`;

export const ButtonOrcamento = styled.button`
  width: 100%;
  line-height: 48px;
  max-width: 37.5rem;
  border-radius: 4px;
  border: 1px solid transparent;
  background: ${(props) => props.theme["primary-color-light"]};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  font-size: 1rem;

  &:hover {
    transition: all 0.2s ease-out;
    background: ${(props) => props.theme["primary-color-hover"]};
  }
`;
