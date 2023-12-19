// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Minha imagem em um restaurante"
        src="../images/foto-perfil.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title='About Me'/>

// Step 3: Export your component
export default AboutPage