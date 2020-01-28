import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteLogo }) =>
{
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo2.png" }) {
      childImageSharp {
        fixed(width: 110, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    }
  `)
  return (
  <header
    style={{
      background: `rgb(0, 117, 193)`,
      marginBottom: `1.45rem`,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
    <h5 style={{ margin: 0 }}>
        <Link
          to="/#home"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/#aboutUs"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About Us
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/#ourTeam"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Our Team
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/#ourServices"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Our Services
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/#contactUs"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact Us
        </Link>
      </h5>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
