import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const SobreMimContainer = styled.section`
  width: 100%;
  height: 690px;
  padding: 88px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 4rem 1rem;
    display: flex;

    .left {
      width: 50%;

      h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 106.5%;
        letter-spacing: -0.01em;
        color: ${(props) => props.theme["primary-color-light"]};
      }

      span {
        display: block;
        font-weight: 500;
        font-size: 1rem;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: ${(props) => props.theme["primary-color"]};
        margin-top: 0.5rem;
        margin-bottom: 3rem;
      }

      p {
        width: 100%;
        max-width: 32.125rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 30px;
        color: ${(props) => props.theme["gray-600"]};
      }
    }

    .right {
      position: relative;
      width: 50%;

      .engenheiro {
        position: absolute;
        bottom: -13.4375rem;
        left: 0;
        z-index: 10;
      }

      .circles {
        position: absolute;
        bottom: -15.4375rem;
        left: -2rem;
        z-index: 9;
      }
    }
  }

  @media (max-width: 1150px) {
    height: unset;
    padding-bottom: 0;
    .grid {
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      padding-bottom: 0;

      .left {
        width: 100%;
        text-align: center;

        h1,
        span,
        p {
          width: 100%;
          max-width: unset;
        }
      }

      .right {
        width: 100%;

        .engenheiro {
          position: unset;
          margin: 0 auto;
        }

        .circles {
          display: none;
        }
      }
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  background: ${(props) => props.theme["primary-color"]};
  margin-bottom: 20rem;

  .grid {
    position: relative;
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .info {
      padding: 0 1rem;

      &:nth-child(2) {
        border-left: 1px solid ${(props) => props.theme.white};
        border-right: 1px solid ${(props) => props.theme.white};
        margin-left: 1rem;
        margin-right: 1rem;
      }

      h4 {
        font-weight: 800;
        font-size: 4rem;
        line-height: 106.5%;
        text-align: center;
        letter-spacing: -0.1em;
        color: ${(props) => props.theme.white};
      }

      span {
        font-weight: 500;
        font-size: 1rem;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: ${(props) => props.theme["gray-200"]};
      }
    }
  }

  @media (max-width: 1150px) {
    margin-bottom: 45rem;
    .grid {
      justify-content: center;
    }
  }
`;

export const FormEng = styled.form`
  position: absolute;
  bottom: -312px;
  right: 0;
  z-index: 90;
  width: 100%;
  max-width: 633px;
  height: 623px;
  background: ${(props) => props.theme.white};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 106.5%;
    color: ${(props) => props.theme["primary-color"]};
  }

  .field {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      font-weight: 400;
      font-size: 1rem;
      line-height: 106.5%;
      color: ${(props) => props.theme["primary-color"]};
    }

    input {
      height: 3rem;
      border: 0;
      outline: 0;
      border-bottom: 1px solid ${(props) => props.theme["gray-200"]};

      &:focus {
        border-bottom: 1px solid ${(props) => props.theme["primary-color"]};
      }
    }

    textarea {
      min-width: 100%;
      max-width: 100%;
      margin-top: 1rem;
      min-height: 12rem;
      max-height: 12rem;
      outline: 0;
      border: 1px solid ${(props) => props.theme["gray-200"]};
      border-radius: 4px;
      padding: 1rem;

      &:focus {
        border: 1px solid ${(props) => props.theme["primary-color"]};
      }
    }
  }

  button {
    width: 100%;
    height: 3rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["primary-color"]};
    background: ${(props) => props.theme["primary-color"]};
    color: ${(props) => props.theme.white};

    &:hover {
      border: 1px solid ${(props) => props.theme["primary-color-light"]};
      background: ${(props) => props.theme["primary-color-light"]};
      transition: all 0.2s;
    }
  }

  @media (max-width: 1150px) {
    bottom: -660px;
    left: 25%;
  }

  @media (max-width: 1050px) {
    left: 25%;
  }

  @media (max-width: 1000px) {
    left: 20%;
  }

  @media (max-width: 840px) {
    left: 12%;
  }

  @media (max-width: 730px) {
    left: 7%;
  }

  @media (max-width: 690px) {
    left: 4%;
  }

  @media (max-width: 640px) {
    left: 0;
    gap: 2rem;
  }
`;

export const Overlay = styled(AlertDialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 99;
`;

export const AlertContent = styled(AlertDialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .title {
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
      background: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const ButtonAlert = styled(AlertDialog.Cancel)`
  width: 100%;
  height: 3rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme["primary-color-light"]};
  border-radius: 6px;
  color: ${(props) => props.theme["primary-color-light"]};
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    transition: all 0.2s;
    background: ${(props) => props.theme["primary-color-light"]};
    color: ${(props) => props.theme.white};
  }
`;
