import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const changeMode = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {changeMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
