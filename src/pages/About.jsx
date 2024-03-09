import React, { Suspense} from 'react'
import RootLayout from '../components/RootLayout'
import Loading from '../components/Loading'
const ProductLezy = React.lazy(()=>import('../components/Product.jsx'))
const About = () => {
  return (
    <>
      <RootLayout/>
        <Suspense className="mt-5" fallback={<Loading/>}>
          <ProductLezy/>
        </Suspense>
    </>
  )
}
export default About