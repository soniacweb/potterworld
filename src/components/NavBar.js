import react from 'react';
import { Link } from 'react-router-dom'


const navbar = (props) => {
  return (
  <header>
    <nav>
      <div> <div>
        <div><a href="/">THE LOGO </a> </div>
        <div>
          <ul>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/spells/">Spell Cards</a></li>
            <li><a href="/">School Houses</a></li>
          </ul>
        </div>
    </nav>
  </header>
  )
}

export default navbar
