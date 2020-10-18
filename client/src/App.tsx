import React, { ChangeEvent } from 'react';
import './App.css';
import stackImage from './assets/stack-overflow.png'
import gitImage from './assets/git_branch.png'
import kaggleImage from './assets/kaggle.png'
import linkedinImage from './assets/linkedin.png'
import codewarsImage from './assets/codewars.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chart from './Components/Chart'
import ChartFilter from './Components/ChartFilter'

const data = [
  {
    name: '2011', uv: 1.91
  },
  {
    name: '2012', uv: 1.81
  },
  {
    name: '2013', uv: 1.82
  },
  {
    name: '2014', uv: 1.74
  },
  {
    name: '2015', uv: 1.83
  },
  {
    name: '2016', uv: 2.28
  },
  {
    name: '2017', uv: 1.89
  },
  {
    name: '2018', uv: 3.06
  }
];


function App() {

  return (
    <Router>
      <div>
        <header>
          <ul className="nav-list">
            <li><div><Link to="/" className="nav-bar-link">Home</Link></div></li>
            <li><div><Link to="/projects" className="nav-bar-link">Projects</Link></div></li>
            <li><div><Link to="/graphs" className="nav-bar-link">Graphs</Link></div></li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route path="/graphs">
              <Graphs />
            </Route>
          </Switch>
        </main>
        <footer>
          <ul className="profile-list">
            <li><a href="https://stackoverflow.com/users/9743957/joe-marin"><div><img src={stackImage} /></div></a></li>
            <li><a href="https://github.com/joethegaucho"><div><img src={gitImage} /></div></a></li>
            <li><a href="https://www.kaggle.com/joemarin"><div><img src={kaggleImage} /></div></a></li>
            <li><a href="https://www.linkedin.com/in/joe-marin-1374b380/"><div><img src={linkedinImage} /></div></a></li>
            <li><a href="https://www.codewars.com/users/JoetheGaucho"><div><img src={codewarsImage} /></div></a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

const Graphs = () => {

  const [filterValue, setFilterValue] = React.useState("2015")

  const filteredData = React.useMemo(() => {
    return (
      data.filter(x => x.name <= filterValue)
    )
  }, [filterValue])

  const handleSlider = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setFilterValue(e.target.value);
  };

  return (
    <div className="chart">
      <h1>Difference in Population Growth (South vs the rest of the United States)</h1>
      <Chart chartData={filteredData} />
      <h2>Pick a year to filter</h2>
      <ChartFilter filterValue={filterValue} onChange={handleSlider} />
      <br />
      <caption>Numbers displayed are difference in growth rates.<br />
      For example, in 2016 the growth rates for the South and the Rest of the US were around .99% and .44% respectively<br />
      Dividing these two numbers gives around 2.28, therefore the South grew 2.28x faster than the rest of the United States</caption>
      <br />
    </div>
  )
}

export default App;
