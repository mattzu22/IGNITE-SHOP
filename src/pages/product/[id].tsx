import { useRouter } from "next/router"

const Product = ()=> {
  const { query } = useRouter()

  return (
    <div>product: {JSON.stringify(query)}</div>
  )
}

export default Product