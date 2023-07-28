import { stripe } from "@/lib/stripe"
import { ImageContainer } from "@/styles/pages/product"
import { SuccessContainer } from "@/styles/pages/sucess"
import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"

interface SuccessProps{
  customerName: string
  product:{
    name: string;
    imgUrl: string
  }
}


const Success = ({customerName, product}: SuccessProps)=> {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
{/* 
      <ImageContainer>
         <Image src={product.imgUrl} width={120} height={110} alt=""></Image>
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa
      </p>

      <Link href='/'>
        voltar ao catálogo
      </Link> */}
    </SuccessContainer>
  )
}

export const getServerSideProsps: GetServerSideProps = async ({ query })=>{

  const sessionId = String(query.session_id);
  
  console.log(sessionId);
  
  
  // const session = stripe.checkout.sessions.retrieve(sessionId, {
  //   expand: ['line_items', 'line_items.data.price.product']
  // })

  // const customerName = session.;
  // const product = session.line_items?.data[0].price?.product as Stripe.Product
  
  return {
    props:{
      // customerName,
      // product: {
      //   name: product.name,
      //   imgUrl: product.images[0]
      // }
    }
  }
}

export default Success