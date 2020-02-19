import React from 'react'
import axios from 'axios'

class HouseHistoryCard extends React.Component {
  constructor() {
    super()
    this.state = {
      house: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/houses/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
    // axios.get(`https://www.potterapi.com/v1/characters/5a0fa54aae5bc100213c232f?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)

      .then(res => this.setState({ house: res.data }))
      .catch(err => console.log(err))
  }

  CapitlizeString() {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  render() {
    console.log('char', this.state.house)
    return (
      <section className="single-character hero is-fullheight">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title"> Head of House: {this.state.house.headOfHouse}</p>
                  <p className="subtitle">{this.state.house.school}</p>
                </article>
                <article className="tile is-child notification">
                  {/* capitalise the first letter */}
                  <p className="title ">{this.state.house.founder} founded this great house. It is said, they valued {this.state.house.values} and wanted those who shared those values to enter their founding house.</p>
                  <p className="title">House Colours: {this.state.house.colors}</p>
                  {/* <p className="subtitle">{this.state.character.house}</p> */}
                </article>
              </div>
            
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="subtitle">House Ghost: {this.state.house.houseGhost} </p> 
                <p className="subtitle">House Mascot: {this.state.house.mascot} </p> 
                <div className="content">
                  {/* <!-- Content --> */}
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <p className="title">{this.state.house.name}</p>
                {/* <p className="title">{this.state.character.house}</p> */}
                <p className="subtitle">{this.state.house.values}</p>
                <div className="content">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <figure className="image is-3by3">
                        <img src="https://i.imgur.com/sIuqs9a.jpg" />
                        <p className="subtitle">Famous members include {this.state.house.members} for house {this.state.house.name} </p>
                      </figure>
                    </article>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
  }
}




export default HouseHistoryCard