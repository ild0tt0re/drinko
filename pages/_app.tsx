import React from 'react'
import '../public/assets/styles.css'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
