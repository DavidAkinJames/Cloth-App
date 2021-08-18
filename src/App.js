import React from 'react'
import Homepage from './pages/homepage/homepage'
import {Route, Switch} from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)


function App() {
  return (
    <div>

      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/hats' component={HatsPage}/>
      </Switch>
    
{/*       <Homepage /> */}
    </div>
  )
}

export default App;
