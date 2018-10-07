import React from 'react'
import Resume from './Resume'
import Sidebar from './Sidebar'

const Web = ({ classNames='', hideSidebar=false }) => {
  return (
    <div className={classNames}>

      <div className="_61072d82 wrapper_3">
	{ hideSidebar ? null : <Sidebar /> }
	<div className="_ac630aed paper-wrapper">
	  <Resume />
	</div>
      </div>
    </div>

  )
}

export default Web

