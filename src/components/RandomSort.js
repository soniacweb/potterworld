import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HouseSort extends React.Component {
  constructor() {
    super()
    this.state = {
      randomsort: ''
    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then(res => this.setState({
        randomsort: res.data
      }))
  }



  render() {
    console.log(this.state.randomsort)
    return (
      <div className="fade-in"> 
        <section className="after-sorting hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="image is-2by1">

               
                <p className="subtitle has-text-white has-text-centered title is-3" >Congratulations! The magical Sorting Hat has determined you are in {this.state.randomsort} house!</p>
                <p className="subtitle has-text-centered "></p>
                
              
                
                <div className="floating2">
                  <div className="tossing2"> 
                    {/* <Link>
                      <div className="house-box has-text-centered button is-black center " >
                        {this.state.randomsort}
                      </div>
                    </Link> */}
                  </div>
                </div>

                <div className="floating">
                  <div className="tossing"> 
                    <Link to="/house" >
                      <div className="house-box has-text-centered button is-black center " 
                        // () => {
                        // if (this.state.house === 'Syltherin') {
                        //   console.log('is Syltherin')
                        // } else if (this.state.house === 'Ravenclaw') {
                        //   console.log('is Ravenclaw')
                        // } else if (this.state.house === 'Griffindor') {
                        //   console.log('is Griffindor')
                        // } else {
                        //   console.log('is Hufflepuff')
                        // }
                      // }
                      >
                        Go Again!
                      </div>
                    </Link>
                  </div>
                </div>
                <div id="blackbackground" className="section">

                  <article id="house-image" className="tile is-child notification">
                    <figure className="house-image">
                      <img id="house-image" src="https://i.imgur.com/0NALdmf.png" />
                    </figure>
                  </article>
                </div>

                <div className="columns">

                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    ) 
  }
}

export default HouseSort