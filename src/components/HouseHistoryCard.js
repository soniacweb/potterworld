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
    console.log(this.state.househistory)
    
    // I add this so it won't complain while  app is still fetching the api data. 
    if (!this.state.househistory[0]) {
      return <h1>loading</h1>
    }
    // hp api is an object in an array so need to add [0] first to get the data from the object.
    return (
      <section className="single-househistory hero is-fullheight">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="fake tile is-child notification">
        
                </article>
                <article className="tile is-child notification">
                  {/* capitalise the first letter */}
              
                  <p className="house title">School: {this.state.househistory[0].school}</p>
                  <p>
                    <div className="subtitle"> House values: 
                      {this.state.househistory[0].values.map((value, i) => {
                        return <p key={i}>{value}</p>
                      })}
                    </div>
                  </p>
                  <p className="subtitle">Head of house: {this.state.househistory[0].headOfHouse}</p>
                  <article className="fake tile is-child notification">
                    {/* school is overlapped by your nav bar, so it's not showing. Just to let you know ;) */}
                  </article>
                  <p className="title ">Mascot: {this.state.househistory[0].mascot}</p>
                  {/* color is an array */}
                  <div className="title">Colors:
                    {this.state.househistory[0].colors.map((color, i) => {
                      return <p key={i}>{color}</p>
                    })}
                  </div>  
                  {/* dont think there is house key in your api so just comment it out */}
                  {/* <p className="subtitle">{this.state.househistory.house}</p> */}
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                {/* <p className="title">Wide tile</p> */}
                <p className="subtitle">House Ghost: {this.state.househistory[0].houseGhost}</p>
                {/* color is an array */}
                <div className="subtitle">House colors: 
                  {this.state.househistory[0].colors.map((color, i) => {
                    return <p key={i}>{color}</p>
                  })}
                </div>          
                <div className="content">
                  {/* <!-- Content --> */}
                </div>
              </article>
            </div>
          </div>

          {/* the house name is overlapped by your nav bar, so it's not showing. Just to let you know ;) */}
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <article className="tile is-child notification">
                  {/* school is overlapped by your nav bar, so it's not showing. Just to let you know ;) */}
        
                </article>

                <p className="title">{this.state.househistory[0].name}</p>
                {/* if statement to return no known aliass */}
                <p className="title">founder: {this.state.househistory[0].founder}</p>
               
                <div className="content">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <figure className="image is-3by3">
                        <img src="https://i.imgur.com/sIuqs9a.jpg" />
                        {/* value is an array, if you want them to have comma in between each other, will have to map it and add comma at the end */}
                        <div className="subtitle"> {this.state.househistory[0].founder} founded this great house. It is said, {this.state.househistory[0].founder} valued {this.state.househistory[0].values.map((value, i) => {
                          return <p className="valueTag" key={i}>{value},</p> 
                        })} and wanted those who shared those values to enter their founding house.</div>
                        {/* members is an array as well */}
                       
                        <article className="tile is-child notification">
                          {/* school is overlapped by your nav bar, so it's not showing. Just to let you know ;) */}
                        </article>
                        <div className="title">Hall of Fame: 
                        </div>
                        <div className="subtitle">
                          {this.state.househistory[0].members.map((member, i) => {
                            return <p key={i}> {member.name} </p>
                          })} 
                        </div>
                        {/* there is no boggart key in your object so comment it out */}
                        {/* <p className="subtitle">When {this.state.househistory.name} first encountered a Boggart, it revealedtheir worst fears- {this.state.househistory[0].boggart}!</p> */}
                        {/* think this one just doubled?? */}
                        {/* <p className="subtitle"> {this.state.househistory[0].name} Hall of Fame: {this.state.househistory[0].members} </p> */}
                      </figure>
                    </article>
                  </div>
                  {/* <!-- Content --> */}
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="floating2">
          <div className="tossing2"> 
            <Link to="/houses">
              <div id="returntohistory" className="box has-text-centered button is-black center">
                          Return to hogwarts history
              </div>
            </Link>
          </div>
        </div>
      </section>
    )
  }

}

export default HouseHistoryCard