import React from 'react'
import { SectionContainer } from './Containers'

const items = [{
  title: 'Northwestern University',
  subtitle: 'English, Critical Theory',
  time: '2008-2012',
  location: null, 
  bullets: []
}]

const sectionTitle = 'Education'

const Education = () => (
  <SectionContainer>
    <h2 className="section-header">{sectionTitle}</h2>
    {items.map((item, i) => (
      <div key={i} className="section-item">
	<div className="hr-left"></div>
	<div className="section-item-content">
	  <h3 className="section-item-title">
	    <span className="section-item-title-left">{item.title}</span>
	    <span className="ellipses">
	      <span className="ellipses-spacer"></span>
	      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
	      <span className="ellipses-spacer"></span>
	    </span>
	    <span className="hl-regular">{item.time}</span>
	  </h3>
	  <p className="section-item-subtitle">
	    <span className="section-item-subtitle-left">{item.subtitle}</span>
	  </p>
	</div>
      </div>
    ))}
  </SectionContainer>
)

export default Education

