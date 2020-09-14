import React from 'react'
import '../public/styles/styles.css'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
