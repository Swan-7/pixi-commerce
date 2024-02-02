import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
          <Switch>
          <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
        </Switch> 
    </Router>
  )
}

export default App
