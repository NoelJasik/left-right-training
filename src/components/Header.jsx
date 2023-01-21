import React from 'react'
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/header.css'

export default function Header() {
  return (
    <header>
        <h1>Left and Right Training</h1>
        <nav>
            <a href='https://twitter.com/NoelJasik1' target="_blank" ><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='https://discord.gg/6VrgAyT3Yg' target="_blank" ><FontAwesomeIcon icon={faDiscord} /></a>
            <a href='https://github.com/NoelJasik' target="_blank" ><FontAwesomeIcon icon={faGithub} /></a>
        </nav>
    </header>
  )
}
