import { Fragment } from 'react'
import fs from 'fs/promises'
import path from 'path'
const ProductDetailPage = (props) => {
  const { loadedProduct } = props
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  const product = data.products.find((p) => p.id === productId)
  return {
    props: {
      loadedProduct: product,
    },
  }
}
export default ProductDetailPage
