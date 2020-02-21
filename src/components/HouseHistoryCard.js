import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class HouseHistoryCard extends React.Component {
  constructor() {
    super()
    this.state = {
      househistory: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/houses/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)

      .then(res => this.setState({ househistory: res.data }))
      .catch(err => console.log(err))
  }

  CapitlizeString() {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  render() {
    console.log('char', this.state.househistory)
    return (
      <section className="single-househistory hero is-fullheight">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title">School: {this.state.househistory.school}</p>
                  <p className="subtitle">Head of house: {this.state.househistory.headOfHouse}</p>
                </article>
                <article className="tile is-child notification">
                  {/* capitalise the first letter */}
                  <p className="title ">Mascot {this.state.househistory.mascot}</p>
                  <p className="title">Colors {this.state.househistory.colors}</p>
                  {/* <p className="subtitle">{this.state.househistory.house}</p> */}
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                {/* <p className="title">Wide tile</p> */}
                <p className="subtitle">House Ghost {this.state.househistory.houseGhost}</p>
                <p className="subtitle">House colors: {this.state.househistory.colors}</p>          
                <div className="content">
                  {/* <!-- Content --> */}
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <p className="title">house name {this.state.househistory.name}</p>
                {/* if statement to return no known aliass */}
                <p className="title">founder: {this.state.househistory.founder}</p>
                <p className="subtitle"> House values: {this.state.househistory.values}</p>
                <div className="content">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <figure className="image is-3by3">
                        <img src="https://i.imgur.com/sIuqs9a.jpg" />
                        <p className="subtitle"> {this.state.househistory.founder} founded this great house. It is said, {this.state.househistory.founder} valued {this.state.househistory.values} and wanted those who shared those values to enter their founding house.</p>
                        {/* <p className="subtitle">Hall of Fame: {this.state.househistory.members} </p> */}
                        {/* <p className="subtitle">When {this.state.househistory.name} first encountered a Boggart, it revealedtheir worst fears- {this.state.househistory.boggart}!</p> */}
                        <p className="subtitle"> {this.state.househistory.name} Hall of Fame: {this.state.househistory.members} </p>

                      </figure>
                    </article>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </div>
            </article>
          </div>
        </div>
        <Link to="/houses">
          <div className="box has-text-centered button is-black center">
                          Return to hogwarts history
          </div>
        </Link>
      </section>
    )
  }
}



export default HouseHistoryCard