import React from 'react'
import Link from 'gatsby-link'

import Socials from '../components/socials';

const IndexPage = () => (
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <img id="profile" width="150" src={require("../images/profile.png")}></img>
      <h1>Saatvik Arya</h1>
      <p id="description">I am a sophomore studying Informatics and Psychology at the University of Washington. I am passionate about product focused development for change.</p>
      <Socials />
    </div>
  </div>
</div>
)

export default IndexPage
