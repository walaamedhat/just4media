import React from "react"

const styles = {
  avatar: {
    width: '100px',
    height: '100px',
    backgroundColor: 'grey',
    borderRadius: 50
  },
  member: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 3,
    textAlign:'center',
    justifyContent: 'space-around'
  }
}

const OurTeam = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  }}
       id={'ourTeam'}
  >
    <h1> Our Team </h1>
    <div style={{display: 'flex', justifyContent: 'space-around', width: '80%', height: '30%', marginTop: '80px'}}>
      <div style={styles.member}>
        <div style={styles.avatar} />
        <h3>Azubair Blata</h3>
        <h4>Managing Director</h4>
      </div>
      <div style={styles.member}>
        <div style={styles.avatar} />
        <h3>Mohanad</h3>
        <h4>Creative Art and content Chief</h4>
      </div>
      <div style={styles.member}>
        <div style={styles.avatar} />
        <h3>Abdullah</h3>
        <h4>Development Manager</h4>
      </div>
    </div>
  </div>
)

export default OurTeam;