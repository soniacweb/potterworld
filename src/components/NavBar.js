import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

const NavBar = () => {
  const [navClassName, setNavClassName] = React.useState('navbar-menu')

  const clickBurger = () => {
    if (navClassName === 'navbar-menu') {
      setNavClassName('navbar-menu is-active')
    } else {
      setNavClassName('navbar-menu')
    }
  }

  return (
    <div className="navbar has-background-black">
      {/* <div className="container"> */}
      <div className="navbar-brand">
        <Link className="harrypotter navbar-item" to="/">
          <img className="hplogo" src='../images/hp-logo.png'/></Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={clickBurger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>
      <div className="navbar-menu is-active">
        <div id="navbarBasicExample" className={navClassName}>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link className='white' to={'/'}>Welcome</Link>
            </div>
            <div className="navbar-item">
              <Link className='white' to={'/house'}>House Sort</Link>
            </div>
            <div className="navbar-item">
              <Link className='white' to={'/spells'}>Spells</Link>
            </div>
            <div className="navbar-item">
              <Link className='white'to={'/characters'}>Characters</Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default NavBar