import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class SpellCard extends React.Component {
  constructor() {
    super()
    this.state = {
      spell: [[]]
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/spells/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW&id=5b74ebd5fb6fc0739646754c`)
    // axios.get(`https://www.potterapi.com/v1/characters/5a0fa54aae5bc100213c232f?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
      .then(res => this.setState({ spell: res.data }))
      .catch(err => console.log(err))
  }

  CapitlizeString() {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  render() {
    console.log('spell', this.state.spell)
    console.log('spell detail', this.state.spell[0].spell)
    return (
      <section className="single-spell hero is-fullheight">
        <main role="main">
          <div className="card has-text-centered is-wide">
            <header className="card-header">
              {/* <p>Header info</p> */}
            </header>
            
            <div className="single-spell card-content">
              <h1>Name: {this.state.spell[0].spell}</h1>
              <p>Type: {this.state.spell[0].type}</p>
              <h1>According to the world of witchcraft and wizardry, it {this.state.spell[0].effect}</h1>
            </div>
          
      
            {/* <footer className="card-footer">
                            &copy; 2017 Footer info
            </footer> */}
          </div>
        </main>
        <Link to="/spells">
          <div className="box has-text-centered button is-black center">
                            Return to Spells
          </div>
        </Link>
      </section>
      



    )
  }
}


export default SpellCard