import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class househistoryHistoryCard extends React.Component {
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
      <section className="single-character hero is-fullheight">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title"> Head of house: {this.state.househistory.headOfHouse}</p>
                  <p className="subtitle">{this.state.househistory.school}</p>
                </article>
                <article className="tile is-child notification">
                  {/* capitalise the first letter */}
                  <p className="title "> {this.state.househistory.founder} founded this great house. It is said, they valued {this.state.househistory.values} and wanted those who shared those values to enter their founding house.</p>
                  <p className="title"> House Colours: {this.state.househistory.colors}</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="subtitle">House Ghost: {this.state.househistory.houseGhost} </p> 
                <p className="subtitle">House Mascot: {this.state.househistory.mascot} </p> 
                <div className="content">
                  {/* <!-- Content --> */}
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <p className="title">{this.state.househistory.name}</p>
                {/* <p className="title">{this.state.character.househistory}</p> */}
                <p className="subtitle">{this.state.househistory.values}</p>
                <div className="content">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <figure className="image is-3by3">
                        <img src="https://i.imgur.com/sIuqs9a.jpg" />
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
                            Return to House History
          </div>
        </Link>
      </section>
    )
  }
}




export default househistoryHistoryCard