import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
function HomePage(props) {
  const { products } = props

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <>
            <Link href={`/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  // If there is no data
  if (data.products.length === 0) {
    return { notFound: true }
  }
  // If we have problem accessing the data
  if (!data) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  // If we have data and every thin is fine
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}
export default HomePage
