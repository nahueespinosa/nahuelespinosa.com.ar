import React, {Component} from 'react'
import Switch from 'react-switch'
import Style from './toggle.module.css'

export default class Toggle extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme')

    if (theme === 'dark') {
      this.state = { checked: true };
      this.handleChange(true)
    } else {
      this.state = { checked: false };
    }   
  }
 
  handleChange(checked) {
    this.setState({ checked });

    if (checked === false) {
      typeof window !== 'undefined' && localStorage.removeItem('theme')
      const link = document.querySelectorAll('#dark-mode')

      if (link) {
        link.forEach((el) => el.remove())
      }
    } else {
      typeof window !== 'undefined' && localStorage.setItem('theme', 'dark')

      const head = document.getElementsByTagName('head')[0]
      const link = document.createElement('link')

      link.rel = 'stylesheet'
      link.id = 'dark-mode'
      link.href = '../dark.css'

      head.appendChild(link)
    }
  }
 
  render() {
    return (
      <div className={Style.toggle}>
        <span>Dark Mode</span>
        <Switch 
          onChange={this.handleChange}
          checked={this.state.checked}
          height={20}
          width={40}
          handleDiameter={25}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          aria-label="Dark Mode"
        />
      </div>
    );
  }
}
