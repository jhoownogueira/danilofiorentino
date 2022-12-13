import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const ContatoContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    height: 220px;
    background: ${(props) => props.theme["primary-color-light"]};
    padding: 88px 0 0;
    display: flex;
    justify-content: center;

    .grid {
      width: 100%;
      max-width: 80.75rem;
      padding: 0 1rem;
      display: flex;
      align-items: flex-start;

      .title {
        width: 100%;
        max-width: 436px;
        background: ${(props) => props.theme.background};
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;

        h1 {
          font-weight: 700;
          font-size: 4rem;
          line-height: 137px;
          letter-spacing: -0.01em;
          color: ${(props) => props.theme["primary-color"]};
        }
      }
    }
  }
`;

export const ContatoContent = styled.section`
  width: 100%;
  padding: 8rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .grid {
    width: 100%;
    max-width: 80.75rem;
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-between;

    .left {
      width: 100%;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      .title {
        margin-bottom: 3rem;
        h2 {
          font-weight: 700;
          font-size: 3rem;
          line-height: 106.5%;
          letter-spacing: -0.01em;
          color: ${(props) => props.theme["primary-color"]};
        }

        span {
          display: block;
          font-weight: 500;
          font-size: 1rem;
          line-height: 22px;
          letter-spacing: -0.01em;
          color: ${(props) => props.theme["primary-color"]};
        }
      }
      a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: flex-start;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 100%;
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    .right {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    .grid {
      gap: 3rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .left {
        text-align: center;
        .title {
          margin-bottom: 2rem;
        }
        a {
          justify-content: center;
        }
      }
    }
  }
`;

export const FormEng = styled.form`
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

  @media (max-width: 900px) {
      margin: 0 auto;
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
