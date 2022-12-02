import styled from "styled-components";

interface ImageBackgroundProps {
  backgroundImage: string;
}

export const HomeContainer = styled.section`
  width: 100%;
  padding: 100px 0;

  .swiper {
    width: 100%;
    height: 720px;
  }

  @media (max-width: 850px) {
    padding: 88px 0;
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
