import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './sections/Header';
import './App.css';
import { Vacancies } from './pages/Vacancies';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='main'>
          <Switch>
            <Route path="/vacancies" component={() => <Vacancies />} />
            <Route path="/" component={() => null} />
            <Route path="*" component={() => null} />
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App
