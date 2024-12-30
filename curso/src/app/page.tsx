import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do Zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador!',
  openGraph: {
    title: 'Home - Aula Next JS do Zero!',
    description: 'Aprendendo Next JS do zero com Sujeito Programador!',
    images: ['https://conteudo.imguol.com.br/c/esporte/99/2023/05/13/teddy-riner-celebra-medalha-de-ouro-em-seu-11-mundial-de-judo-1684010640708_v2_450x600.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function Home() {
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
}