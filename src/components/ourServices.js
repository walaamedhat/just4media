import React from "react"
import { Slide } from 'react-slideshow-image';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const styles = {
  eachSlide: {
    width: '100%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  slideContainer: {
    height: '100vh',
    background: `rgb(0, 117, 193)`,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  slide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: .5
  }
}
const OurServices = () => (
    <div id={'ourServices'} style={styles.slideContainer}>
      <div style={{marginTop: '30px'}}>
        <h1 style={{textAlign: 'center'}}>Our Services</h1>
      </div>
      <Slide {...properties} style={styles.slide}>
        <div style={styles.eachSlide}>
            <h3>Monthly advertisements in newspapers</h3>
        </div>
        <div style={styles.eachSlide}>
            <h3>Special edition advertisements</h3>
        </div>
        <div style={styles.eachSlide}>
            <h3>Online videos</h3>
        </div>
        <div style={styles.eachSlide}>
            <h3>Animations and graphic design</h3>
        </div>
        <div style={styles.eachSlide}>
            <h3>Content development</h3>
        </div>
        <div style={styles.eachSlide}>
            <h3>Websites</h3>
        </div>
      </Slide>
    </div>
)

export default OurServices;