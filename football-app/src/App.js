import React from 'react'
import Teams from './components/Teams'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }
  }
  
  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/2021/teams', {
      headers: {
        'X-Auth-Token': 'fa3884a581df49b18b6c2c4483114f2a'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        teams: data.teams
      })
    })
    .catch(console.log)
  }

  render() {

    const { teams } = this.state
 
    return (
      <>
        <h1 className="mb-4">Premier League Teams</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap">
                {
                    teams.map(teams => {
                        return (
                            <Teams team={teams} key={teams.id} />
                        )
                    })
                }
        </div>
      </>
    )
  }
}

export default App
