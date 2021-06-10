import './App.css';
import {ThemeProvider} from 'styled-components'
import Background, {MainBox, Header, Body, SideBar, InfoDisplay} from './code/layout.js'

const theme = {
  color1: "#f0ddab",
  color2: "#d6c28e",
  color3: "#DF7373",
  color4: "#DA5552"
}

function App() {
  fetch ('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:
      'grant_type=client_credentials&client_id=tmjSrE6LE4qhqUE3f4CRcXqUhjgJ4dtbUvn71gptKnS6ER73vA&client_secret=MqbdqXDWWjXraXk1MnimhVddm27wT04yEBNLMMM3'
  })
  .then (response => response.json())
  .then(data => {
    const result = data;
    console.log(result);
    fetch("https://api.petfinder.com/v2/animals", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${result.access_token}`
      }
    })
    .then (response => response.json())
    .then (data => console.log(data))
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Background>
          <MainBox>
            <Header>Find Your Next Pet</Header>
            <Body>
            <SideBar></SideBar>
            <InfoDisplay></InfoDisplay>
            </Body>
          </MainBox>
        </Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
