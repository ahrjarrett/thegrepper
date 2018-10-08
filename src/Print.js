import React, { Component } from 'react'
import Web from './Web'

export default class Print extends Component {
  constructor(props) {
    super(props)
    this.makePdf = props.makePdf
  }

  componentDidMount() {
    if(this.makePdf) this.print()
  }

  print() {
    window.print()
  }

  render() {
    return (
      <Web
	classNames={ this.makePdf ? '_e50a19c8 makePdfOverride' : '_e50a19c8' }
	hideSidebar={true}
	/>
    )
  }
}

