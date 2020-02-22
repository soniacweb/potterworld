import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class RandomSort extends React.Component {
  constructor() {
    super()
    this.state = {
      randomsort: []
      // query: '',
      // // search: false,
      // message: '',
      // filter: '',
      // filterType: 'All'
    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then(res => this.setState({ randomsort: res.data }))
  }


  filter(e) {
    this.setState({ filter: e.target.value })
  }


  typeFilter(e) {
    e.preventDefault()
    this.setState({
      filterType: e.target.value
    })
    console.log('TESSSSSTTTTYYY',this.state.filterType)
   
  }

  render() {
    // const { query } = this.state
    console.log(this.state.randomsort)
    console.log('state value',this.state.filter)
    // console.log(this.state.search)
    const items = [...this.state.randomsort]
    // console.log("items",items)
    // if (this.state.filter) {
    //     items = items.filter(item =>
    //         item.spell.toLowerCase()
    //             .includes(this.state.filter.toLocaleLowerCase()))
    // } 

    // console.log("mess",this.state.spells[1].spell)
        
    return (
    // <h1>hello</h1>
      <div className="fade-in"> 
        <section>
          <div className="hero is-fullheight"></div>
          <div className="section background">
           

                        <Link to={`/sortinghat/${randomsort._id}`}>
                          <div className="btn card has-background-black">
                            <div className="card-content">
                              <h1 className="has-text-white">{randomsort.house}</h1>
                              {/* {console.log(spell.spell)} */}
                              {/* <p className="has-text-white">A {spell.type}</p> */}
                              {/* <p className="has-text-white">Effect: {spell.effect}</p> */}
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
            
            {/* </div>
          </div> */}
        </section>
       </div>
//     )
//   }




export default RandomSort