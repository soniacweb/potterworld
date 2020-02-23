![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 
 
 <img src="https://i.imgur.com/Bo65c7f.jpg" style="width: 500px; display: block; margin: 0 auto;"/>

## Project 02- Potterly

### Pair programming exercise with fellow student developer, Coung Tran.

# Intro 

Potterly is fantasy media app, delving into the fictional universe centered around the Harry Potter novel series by writer, J. K. Rowling. This project is for personal use, and no copyright infringement is intended. We used an unnofficial Harry Potter API - https://www.potterapi.com/.


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
2 days - v1
5 days - v2

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
- Mockplus

# Wireframing- Mockups Architecture

Our app comprises of 5 main pages: Welcome, House Sorting, Characters, Spells, and Hogwarts- A History.

`Welcome` page: the user can enter by selecting the button to direct them to the house Sorting Page with more options.

Within `House Sorting`, there are 4 options the user can select: House Sorting, Characters, Spells, and Hogwarts- A History.

`House Sorting` is a feature we are still working on- where the API provides random allocatiobn of house, we wanted to construct a quiz to then 'sort' the user into a house. 

The `Characters` page, when clicked, the user is taken to an index page listing all of the characers known in the fantasy world JK Rowling's created for Harry Potter franchise. If any of the character cards are clicked on, the user is directed to a `single character` index page, listing further information about the character. 

The general design was fun and interesting to create. We decided to use Bulma fullheight hero images to bring our mockups to life, with the general theme for users to navigate using buttons at the bottom. We also added a responsive navbar fopr mobile.

### Welcome Page

<img src="https://i.imgur.com/Uxmu70n.png" style="400px margin: 0 auto;" />

### House Sort

<img src="https://i.imgur.com/KNCnYPr.png" style="400px margin: 0 auto;" />

### Individual Character Page 

We played around with the opacity for the Bulma article backgrounds to get the desired modal background effect. 

<img src="https://i.imgur.com/lla76ds.png" style="400px margin: 0 auto;" />

### Hogwarts History Page Mockup

<img src="https://i.imgur.com/H8DwM81.png" style="400px margin: 0 auto;" />


### Individual Spell Page 

<img src="https://i.imgur.com/bU4BOsR.png" style="400px margin: 0 auto;" />

## Project Structure and Fetching from the API
In order to request the correct data, it was important to read through the Harry Potter API documentation. We spent sometime on testing the url endpoints using Insomnia. 

#### Testing Endpoints using Insomnia

<img src="https://i.imgur.com/uQ1mcC6.png" style="400px margin: 0 auto;" />

## Rendering




For the `HOUSE HISTORY` and `SPELLS` page, the JSON api response we were receiving back was an object in an array- therefore we needed to add [0] to the dot notation first to access the data from the object and render is successfully. The below is an excerpt of this:

```
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

```

We had to map through the 'values' and 'colors' key to list the values from the object in the array.

## Filtering and Search Features: Building a basic React.js form with no additional libraries

For the Spells page, we have a filter form consisting of types of spells the user can read through and select. We also have a basic search funtionality too.

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

We accessed spells, and 'types' from `this.state` syntax. 

# Wins
- I like the overall look of the app. We wanted to stick with old-school looking illustrations, a nod to the books rather than the movies. 

- Retrieving different types of data from the API and exploring it using different combination of urls. The excercise helped me better understand how APIs work. Explored the use of Bulma, and CSS animation combination.



# Challenges  
We had initially only spent just over a week on React before getting assigned a 2-day project. Out dreams were a tad on the ambitious side, and soon realised we couldn't get the design polished up in time. Wel also realised too late in the day, the images weren't unfortunately sufficiant for this app to take inspiration from to the Wizarding World app, so we therefore needed to improvise with the design.

# Key Learnings

While working on the project, I had to refer to the React documentation a great deal, read, learn, and code at the same time. It was challenging  to provide a completely finished app, but I'm happy Cuong and I could continue working on it after the deadline, in our spare time. 

I learned a lot about pair programming through this exercise. We had a lot of fun working together but it really highlighted to me how a different pace of learning in combination with working towards a strict 2-day deadline, can impact the workflow. It inspired me to want to explore React further after the exercise!

# Future Features

- Adapting the app to be mobile friendly.
- I would like to play around with a React animation library and try and incorporate some animation in to really make the information stand out like on WizardingWorld or Pottermore. 
