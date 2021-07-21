# Neurons Front-end developer Test

## Documentation by Sophia

### Demo
I've deployed the React app to a subpath of my existing personal website that is hosted via Github Pages:
https://sophiaauer.me/tvshow_search/

### Overall Setup & Considerations

#### Component Tree

The `App` component can be found in the `src` directory and all the toher components are in the `src/components` directory:

```bash
└── App
    ├── Nav
    ├── Casts
    │   ├── SearchBar
    │   ├── Filter
    │   └── CardContainer
    │       └── Card
    └── Episodes
    │   ├── SearchBar
    │   └── CardContainer
    │       └── Card
```
#### Custom hooks
All the custom hooks can be found in the `src/hooks` directory:

- **useApiData:** used in `App` component to call Cast and Episode data
- **useClickModal:** used in `Filter` component to open and close filter modal
- **useFilterData:** used in `Casts` component to process filter and search input and pass on `searchFilter` result to `CardContainer` component
- **useSearchData:** used in `Episodes` component to process search input and pass on search result to `CardContainer` component

#### Limitations & planned Improvements

- I know the requirement stated that you shouldn't use any React boilerplate, such as Create React App, but since it's been the first time using React I've used `create-react-app` to get started easily.
- I've used for now only plane JS and CSS since I'm still in the process of learning TS and it felt like another level of complexity that I wanted to avoid for now.
- I've used CSS quite simplistic via normal CSS file import but would like to dive deeper into styled components to use styling in a bit of a cleaner way.
- The solution for the Cast & Episode split between two tabs might not be the prettiest (using states to switch between Cast and Episode). For now, I couldn't find another way to do it but I'll be looking into some other solutions (just cuz I'm curious).
- I had some problems implementing the filter in a more sophisticated and clean way:
  - The Filter is only implemented for Cast tab. Therefore using those two separate hooks `useFilterData` for Cast and `useSearchData` for Episode.
  - The `Update` button within the Filter modal doesn't work. The `handleUpdate` function somehow isn't working or not correctly called. Therefore, the result changes as soon as you select a filter.
  -  for some reason when filtering after `Male`, it shows all the Cast, tho when filtering for `Female` it works correctly (I need to look into it more in depth).
  -  Each Filter & Search only works individually and not combined.
- API data call
  - I believe there is probably a cleaner and more sophisticated solution to make the `fetch()` between two API requests.
  - right now it's not the cleanest and ideally I wanted to return only one variable `apiData` that contains either the Cast or the Episode data. I couldn't resolve it in time so I've came up with the less sophisticated solution passing on the data in two different constants.
- Generic Card component
  - Initially I wanted to create a generic card component that takes props as inputs passed from CardContainer and Casts or Episodes. However, it failed due to the mapping of the Cards within the CardContainer. 
  - Hence, I've created two JSX divs for each Cast and Episode within the Card component and let it switch between those depending on the state set for the clicked buttons `Cast` or `Episodes`. 

## Neurons test description
Be sure to read **all** of this document carefully, and follow the guidelines within.

### Context

Use React w/ TypeScript to implement the following mock-up. You will need to leverage an open API for Tv Show data to fill in the details and functionality as described below. You are only required to complete the desktop views, unless otherwise instructed.

Use this Figma file to see the Product UX/Design guidelines, you are welcome to improve the design experience as you see fit. 

> [Source Figma file](https://www.figma.com/file/F6LUtupkwm21hrLLza4A5n/TV-Shows?node-id=0%3A1)
![Pipedpiper-front-end-test-mockup](./piped_piper_app.png)

Nb! Some screens are not designed but there are inspirations for implementation, part of the test is to see your approach to the more unknown. 

### Requirements

#### TV Show data API

TV Show and Cast data 
https://api.tvmaze.com/shows/143?embed=cast

Tv Show Episodes 
https://api.tvmaze.com/shows/143/episodes?specials=1

Full API and usage documentation.
https://www.tvmaze.com/api



#### Page Structure

```
Main
  - Navigation
    - List the Cast members of the TV show 
    - List the Episodes of the TV show 
  - Section (Cast)
    - Search bar 
    - Filtering menu 
      - List of cast members 
  - Section (Episodes)
    - Search bar 
    - Filtering menu 
      - List of episodes of the tv show
Detail Cards(Cast)
  - Profile image 
  - Gender icon 
  - Actor name, Age : Link to profile page 
  - Country
  - Character: Name in the show : Link to Character page 
  - Birthday
Detail Cards(Episodes)
  - Profile image 
  - Episode name : link til tvmaze 
  - Episode description 
  - Season nr / Episode nr 
  - Air time
```

#### Functionality
- There are 2 tab of content one for Cast members and one for the Episodes 
- Under each pages you can search for 
 - Cast : Name or Character name 
 - Episode: Name of the show or part of the description of the show. 
- Under each pages you can filter the list of content  
- Each page has options of filters e.g Country that can be dynamic created based on content. 
- Filtering options should be saved in the session as well as when I return to the application. 
- All data should come from Realtime API 



#### Tech stack

- TypeScript oriented (JavaScipt can be used, but we strongly prefer TypeScript)
  - Use **React**
  - _Do not_ use any React boilerplate, such as Create React App
- Feel free to use a preprocessor, CSS-in-JS, or JSS tool but _do not_ use any pre-styled frameworks or libraries
  - The general rule of thumb is: you should write your own styling for your components, do not use "pre-made" tools and utilities

  - There are a few reasons we do this:
    - we care about pixel perfect implementation
    - we want to see your understanding of CSS and styling practices
    - we want to see your understanding Design/UI/Components skills 

  - USE:
    - Styled-Components
    - Emotion
    - SCSS
    - SASS
    - LESS
    - CSS

  - AVOID:
    - Tailwind
    - Bootstrap
    - Material UI
    - Semantic UI

Not that we are against these frameworks but more that we can see how you would build these components yourself. 


#### Bonus

- Make the application accessible
- Write clear **documentation** on how the app was designed and how to run the code
- Implement useful testing
- Provide components in [Storybook (https://storybook.js.org)
- Write concise and clear commit messages
- Provide an online demo of the application
- Include subtle animations to focus attention
- Created a Responsive version of the application
- Describe improvement opportunities when you conclude

### What We Care About
Use any libraries that you would normally use if this were a real production App. Be prepared to justify those choices. Please note: _we care more about how you approach the problem than the end result. Code cleanliness and design are more important than using the "right" library._

Here's what you should strive for:

- Good use of current TypeScript, HTML, CSS, and performance best practices
- Solid testing approach
- Extensible code
- Thorough explanation of decisions and tradeoffs

### Questionnaire
Please fill out this questionnaire and commit your answers to the repo 
- What is your preferred reactjs stack today for building a modern SaaS application? What libraries and frameworks would be incl. And why? 
- How would you approach an application where multiple products and multiple teams working across the application? 
- Design / UI Component system, How would you deal with that? Build one, use a framework (e.g Ant, Materiale UI etc. ) and why your approach? 
- How to ensure good quality and high performance code? 
- Why is testing important, how would you embed it in a team and with what tools? 

### Q&A

> Where should I send back the result when I'm done?

Fork this repo and share the repo with the hiring manager via email when you think you are done. There is no deadline for this task unless otherwise noted to you directly.

> What if I have a question?

Please write the hiring manager an email with any questions you may have along the way. 


-------------------------------------------------------------------------------------
Credit to https://github.com/Superformula/frontend-test for the test inspiration 
