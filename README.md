![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 
 
 <img src="https://i.imgur.com/Bo65c7f.jpg" style="width: 500px; display: block; margin: 0 auto;"/>

## Project 02- Potterly

### Pair programming exercise with fellow student developer, Coung Tran.

# Intro 

<a href="https://soniacweb.github.io/SEI-Project-02-Potterly/">Potterly</a> is fantasy media app, delving into the fictional universe centered around the Harry Potter novel series by writer, J. K. Rowling. This project is for personal use, and no copyright infringement is intended. We used an unnofficial Harry Potter API - https://www.potterapi.com/.

(Please be aware API as of Dec 2020 is under construction, therefore project will need ot be updated upon updated end points)

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
2 days - v1 - not deployed
4 days - v2 - 

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

Our app comprises of 5 main pages: Welcome, `House Sorting, Characters, Spells, and Hogwarts- A History.`

`Welcome` page: the user can enter by selecting the button to direct them to the `House Sorting` page with more options.

Within `House Sorting`, there are 4 options the user can select: `House Sorting`, `Characters`, `Spells`, and `Hogwarts- A History`.

The `Characters` page: When clicked, the user is taken to an index page (mapping through unique character `ids` for each) listing all of the characers known in the fantasy world JK Rowling's created for the Harry Potter franchise. If any of the character cards are clicked on, the user is directed to a `single character` index page, listing further information about the character. 

`House Sorting`: The button labelled `House Sorting` is a main feature we really wanted to incorporate. When clicked the user is directed to a 'sorting hat' page where it displays a randomly chosen house the user is allocated into. We fetch the random allocation from the response we recieve back each time from the API.

The general design was fun and interesting to create. We decided to use Bulma fullheight hero images to bring our mockups to life, with the general theme for users to navigate using buttons at the bottom. We also added a responsive navbar for mobile.

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

Below is an excerpt of code from the `Sorting Hat` page, built using a classical React component.

```
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
                   </div>
                </div>

                <div className="floating">
                  <div className="tossing"> 
                    <Link to="/house" >
                      <div className="house-box has-text-centered button is-black center ">
                        Go Again!
                      </div>
                    </Link>
                  </div>
                </div>

```
And below is the overall page design the user will see once 'sorted'- excluding the hero image: 

<img src="https://i.imgur.com/JwrZMde.png" style="400px margin: 0 auto;" />

### Character and Spells Page 

Classical React components were used- 2 seperate get requests were needed to fetch data from the API using different endpoints for these two pages. These pages had similar formats in information fetching. Another classical React component using a map function was utilised to list and display every character featured on the API. The user is first directed to `Characters` or `Spells`- once in, a list of spells or characters are displayed. The user is able to click on any to discover further information, directing them to a seperate page for each item. There, the pages display information about the characters and different types of spells that the user has selected from the `Characters` and `Spells` pages. 

In `Characters`, Name, School, House, Boggart form, and Wand information are available- accessed by keys. In `Spells`, the type and definition of use are available.

This was achieved for the `Character` page as per the below code snippet example:

```

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/characters/?key=XXXX')
      .then(res => this.setState({ characters: res.data }))
  }

  render() {

    console.log('hell')
    console.log(this.state.characters)
    console.log(this.state.filter)
    return (
    // <h1>hello</h1>
      <div className="fade-in">
        <div className="section">
          <div className="character hero is-fullheight"></div>
        </div>


        <div className="floating">
          <div className="tossing"> 
            <Link className="column" to="/house">
              <div id="housebuttons" className="box has-text-centered button is-black center ">Return to Homepage </div>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.characters

             .filter(elem => {
                return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
              })
              .map((characters, i) => {
                return (
                  <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                    <Link className="char-and-spells" to={`/characters/${characters._id}`}>
                      <div className="btn card has-background-black">
                        <div className="card-content">
                          <p className="has-text-white">{characters.name}</p>
                  

```

Spells Page: 

<img src="https://i.imgur.com/fQwAuaP.png" style="400px margin: 0 auto;" />

Characters Page: 

<img src="https://i.imgur.com/FdMSGui.png" style="400px margin: 0 auto;" />

To add on a seperate note, for the `HOUSE HISTORY` and `SPELLS` page, the JSON API response we were receiving back was an object in an array- something I hadn't personally experienced. We were required to add `[0]` to the dot notation to access the first `house` data from the object and map through, to render it successfully. The below is an excerpt is an example of this:


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
                  </article>
                  <p className="title ">Mascot: {this.state.househistory[0].mascot}</p>
                  {/* color is an array */}
                  <div className="title">Colors:
                    {this.state.househistory[0].colors.map((color, i) => {
                      return <p key={i}>{color}</p>
                    })}
                  </div>  

```

NB: We also had to map through the 'values' and 'colors' key to list the values from the object in the array.

View of the character page: 

<img src="https://i.imgur.com/AekyEsV.png" style="400px margin: 0 auto;" />
<img src="https://i.imgur.com/w7mizoa.png" style="400px margin: 0 auto;" />



## Filtering and Search Features: Building a basic React.js form with no additional libraries

For the `Spells` page, we have a filter form consisting of types of spells the user can read through and select. We also have a basic search funtionality too.

We used a `spells` form input box, which includes an input of type text, and a `spells` select list, which will display a unique list of spells based on the API's listing.

The code below is a short excerpt of this: 

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

We needed to capture the user's input for each of the `spells form` and its respective fields, and there are two approaches in React.js to achieve that- Controlled components vs Uncontrolled components.

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


Individual `Character`, `Spells`, and `House History` pages also required a classical React component that displayed each character/spell/house history by their unique ID key. This allows the user to view more information about the respective subjects that they have clicked on the `House Sort` index page. 


# Wins

- My biggest win was incorporating the `Sorting Hat` feature page for the novelty of it all.

- I like the overall look of the app. We wanted to stick with old-school looking illustrations, a nod to the books rather than the movies. 

- Retrieving different types of data from the API and exploring it using different combination of urls. The excercise helped me better understand how APIs work. Explored the use of Bulma, and CSS animation combination.


# Challenges  
We had initially only spent just over a week on React before getting assigned a 2-day project. Out dreams were a tad on the ambitious side, and soon realised we couldn't get the design polished up in time. We also realised too late in the day, the images from the API weren't unfortunately sufficiant for this app to take inspiration from to the Wizarding World app, so we therefore needed to improvise with the design.

# Key Learnings

While working on the project, I had to refer to the React documentation a great deal, read, learn, and code at the same time. It was challenging  to provide a completely finished app, but I'm happy Cuong and I could continue working on it after the deadline, in our spare time. 

I learned a lot about pair programming through this exercise. We had a lot of fun working together but it really highlighted to me how a different pace of learning, in combination with working towards a strict 2-day deadline, can impact the workflow. It inspired me to want to explore React further after the exercise!

# Future Features

- Adapting the app to be mobile friendly.
- I would like to play around with a React animation library and try and incorporate some animation in to really make the information stand out like on WizardingWorld or Pottermore. 
- Build a more complex quiz for the sorting hat functionality. 
