![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 
 
 <img src="https://i.imgur.com/Bo65c7f.jpg" style="width: 500px; display: block; margin: 0 auto;"/>

## Project 02- PotterWorld

### Pair programming exercise with fellow student developer, Coung Tran.

# Intro 

PotterWorld is fantasy media app, delving into the fictional universe centered around the Harry Potter novel series by writer, J. K. Rowling. We used an unnofficial Harry Potter API and realised too late in the day, the images weren't unfortunately sufficiant for this app to take inspiration from to the Wizarding World app.


# Getting Started
Clone or download the repo
- npm init
- npm run serve to start

# Brief
Consume a public API – this could be anything but it must make sense for your project.

Have several components - At least one classical and one functional.
Include wireframes - that you designed before building the app.
The app should include a router - with several "pages".
Have a visually impressive design
Be deployed online and accessible to the public.

## Timeframe
2 days

# Technologies used
- HTML5
- CSS3
- JavaScript (ES6)
- React
- Unnofficial HP API 
- Webpack
- Bulma
- Babel
- Insomnia
- Git
- GitHub

# Wireframing

Our app has 4 main pages which is Welcome, Characters, Spells and House Sorting. 

# Project Structure
In order to request the correct data, it is important to read through the documentation. We spent sometime on testing the urls. 

## Fetching the API

#### Testing Endpoints using Insomnia

<img src="https://i.imgur.com/uQ1mcC6.png" style="500px margin: 0 auto;" />

## Rendering

## Filtering and Search Features: Building a basic React.js form with no additional libraries

For the Spells spage, we have a filter form consisting of types of spells the user can read through and select. We also have a basic search funtionality too.

A ‘spells from’ input box, which is an input of type text.
A ‘spells’ select list, which will display a unique list of spells based on the API's listing.

```
filter(e) {
    this.setState({ filter: e.target.value })
  }


  typeFilter(e) {
    e.preventDefault()
    this.setState({
      filterType: e.target.value
    })
   
  }
```

We needed to capture the users input for each of the ‘spells form’ and its respective fields, and there are two approaches in React.js to achieve that- Controlled components vs Uncontrolled components.

We used the controlled method, where a controlled input value is directly tracked and set/updated by React. The value for each input in a form is stored in local state and updated by calling `{this.filter.bind(this)}` from the onChange event handler.

```
 <form className="form" >
            <select onChange={(e) => this.typeFilter(e)}>
              <option value="All">All</option>
              <option value="Spell">Spells</option>
              <option value="Hex">Hex</option>
              <option value="Charm">Charms</option>
              <option value="Enchantment">Enchantments</option>
            </select>
            <input
              type="text"
              id='search-input'
              placeholder='Search...'
              name='query'
              onChange={this.filter.bind(this)}
            />
            <button className="button is small is rounded is-black">
                            Filter
            </button>
          </form>
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.spells  
                .filter(elem=>{
                  if (this.state.filterType === 'All'){
                    return elem
                  } else return elem.type === this.state.filterType
                })
                .filter(elem=>{
                  return elem.spell.toLowerCase().includes(this.state.filter.toLowerCase())
                })


```

We accessed spells, and 'types' from `this.state`. 

# Wins
Retrieving different types of data from the API and exploring it using different combinatio  of urls. The excercise helped me better understand how APIs work.
Explored the use of Bulma, and CSS animation combination.

I learned a lot about pair programming through this exercise. We had a lot of fun working together but it really highlighted to me how a different pace of learning in combination with working towards a strict 2-day deadline, can impact the workflow. It inspired me to want to explore React further after the exercise!

# Challenges  
We had initially only spent just over a week on React before getting assigned a 2-day project. Out dreams were a tad on the ambitious side, and soon realised we couldn't get the design polished up in time.

While working on the project, I had to refer to the React documentation a great deal, read, learn, and code at the same time. It was challenging  to provide a completely finished app, but I'm happy Cuong and I could continue working on it after the deadline, in our spare time. 

