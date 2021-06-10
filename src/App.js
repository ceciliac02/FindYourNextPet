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
  fetch("https://api.petfinder.com/v2/animals", {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0bWpTckU2TEU0cWhxVUUzZjRDUmNYcVVoamdKNGR0YlV2bjcxZ3B0S25TNkVSNzN2QSIsImp0aSI6Ijk2MGUzYzAyNWQ2MTFjMDcxN2FjOTU1ZDVhNGEzMTQwMDIxYTIwYzRhZWY2MWE3ZmMyN2JkYjhjYWM3NmYyZGJjMDM5M2I0YmZjNmI5NDk2IiwiaWF0IjoxNjIzMjA0NDczLCJuYmYiOjE2MjMyMDQ0NzMsImV4cCI6MTYyMzIwODA3Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.nxDHGFJBiHX2qOU3octyR_kxxha7XeIS6XPOB_S9XKeuJVW7xglWIvLptEVCzonOMd9w8BrB6HbOC88XUnjyv9yqMA5aJSAB_C67cI7fbSGhiW-qwcpT3Aja_i3YTdujz_nM8LLe_U6DCQzn_5V-o-sT2Nt-vsd6byFa3Igw1u9CQM8IT_870q0VdSY0mQWAFc0K6uT5DCJAhcOvuecDQGbPOgSn3QhJmdwKVS7EsZyEzbh628VzRXy0f7YzCLuWPjhPHq0TO6Ixx287B095_KmOyeXZ1dE-4D7_jX4XV3aZ_uZPoZFreMCSzgxw82E2ew1DQ3ue5c-xpjstpoJlqA'
    }
  })
  .then (response => response.json())
  .then(data => {console.log(data)});
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
