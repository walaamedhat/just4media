import React from "react"
import { Link } from "gatsby"
import Image from "./image"


const Home = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh'
  }}
       id={'home'}
  >
    <div style={{width: '60%'}}>
      <Image />
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '40%'
    }}>
      <h1>JUST 4 MEDIA</h1>
      <p>Welcome to Just 4 Media site.</p>
      <Link to="/page-2/" style={{textDecoration: `none`}}>
        <div style={{color: '#fff', background: `rgb(0, 117, 193)`, width: '200px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}>
          Book Online
        </div>
      </Link>
    </div>
  </div>
)

export default Home;