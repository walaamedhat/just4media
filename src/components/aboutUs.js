import React from "react"


const About = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    background: `rgb(0, 117, 193)`,
    color: '#fff'
  }}
       id={'aboutUs'}
  >
    <h1> ABOUT US </h1>
    <h3>JUST 4 MEDIA</h3>
    <p style={{textAlign: 'center', width: '60%'}}>
      Our company established in Dubai, UAE in 2010. With offices in Dubai, UAE we managed to grow into a multinational company with people in almost every continent.
    </p>
  </div>
)

export default About;