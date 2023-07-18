import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './sections/Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={() => null} />
          <Route path="*" component={() => null} />
        </Switch>
      </Router>
    </>
  )
}

export default App
