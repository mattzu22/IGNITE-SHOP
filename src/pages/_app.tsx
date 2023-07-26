import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from "../assets/logo-ignite-shop.svg"
import { Container, Header } from '@/styles/pages/app';

globalStyles();



export default function App({ Component, pageProps }: AppProps) {
  
  return (
  <Container>
    <Header>
      <Image src={logoImg.src} width={130}  height={52} alt="logo" />
    </Header>

    <Component {...pageProps} />
  </Container>
  )
}
