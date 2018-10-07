import React from 'react'
// import Paper from './Paper'
import Sidebar from './Sidebar'
import Header from './Header'
import HorizontalRule from './HorizontalRule'
import Main from './Main'
import Footer from './Footer'

const Web = ({
  classNames='',
  hideSidebar=false,
  makePdf=false
}) => (
  <div className={classNames} >
    <div className="_61072d82 wrapper_3">
      { hideSidebar ? null : <Sidebar /> }
      <div className="_ac630aed paper-wrapper">
	<div className="_c7b9ebe6 paper">
	  <Header />
	  <HorizontalRule />
	  <Main />
	  <div className="_b7bdb258"></div>
	  <Footer />
	</div>
      </div>
    </div>
  </div>
)

export default Web

