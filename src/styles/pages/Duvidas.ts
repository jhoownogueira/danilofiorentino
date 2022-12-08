import styled, { keyframes } from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes`
from {
        height: 0;
    }

    to {
        height: var(--radix-accordion-content-height);

    }
`

const slideUp = keyframes`
from {
        height: var(--radix-accordion-content-height);
    }

    to {
        height: 0;
    }
`

export const DuvidasContainer = styled.section`
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

export const Accordions = styled.div`
  width: 100%;
  max-width: 80.75rem;
  padding: 7rem 1rem 0;
  display: flex;
  align-items: flex-start;
  .grid {
    width: 100%;
  }
`;

export const AccordionRoot = styled(Accordion.Root)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme.background};
`;

export const AccordionItem = styled(Accordion.Item)`
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme["gray-200"]};

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    border: 0;
    background: transparent;

    span {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 100%;
      color: ${(props) => props.theme["primary-color"]};
    }

    svg {
      color: ${(props) => props.theme["primary-color"]};
      transition: all 0.3s;
    }
  }
  [data-state="open"] {
        svg {
            transform: rotate(90deg);
        }
    }
`;

export const AccordionHeader = styled(Accordion.Header)`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccordionContent = styled(Accordion.Content)`
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 30px;
  color: ${(props) => props.theme["gray-600"]};

  p {
    padding: 1rem 3rem;
  }

  &[data-state="open"] {
    animation: ${slideDown} 0.3s;

  }

  &[data-state="closed"] {
    animation: ${slideUp} 0.3s;

  }
`;
