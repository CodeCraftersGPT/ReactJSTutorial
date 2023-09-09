import React, { Component } from 'react'

class Welcome extends Component {

    //props
  render() {
    
    return <h1>Welcome {this.props.name} with age {this.props.age} </h1>
  }
}

export default Welcome