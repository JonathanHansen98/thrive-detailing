import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ fileName, alt, style, className }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1920) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName).fluid

  return (
    <>
      <Img fluid={fluid} alt={alt} style={style} className={className}/>
    </>
  )
}

export default Image;