import Head from "next/head";
import { EmConstrucao } from "../components/EmConstrução";
import { SobreMimContainer } from "../styles/pages/sobreMim";

export default function Sobremim() {
  return (
    <>
      <Head>
        <title>Sobre mim | Eng.Danilo</title>
      </Head>
      <SobreMimContainer>
        <EmConstrucao />
      </SobreMimContainer>
    </>
  );
}
