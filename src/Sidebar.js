import React from 'react'

const Sidebar = () => (
  <div className="_f9a8f487">
    <div className="_649629ae">
      <span className="_8655a8a7"></span>
      <a className="_cd8c9a18" href="/resume.pdf" download="Andrew Jarrett’s resume">Download my resume</a>
    </div>
    <div className="_649629ae">
      <span className="_7eff5132"></span>
      <a className="_cd8c9a18" onClick={() => window.print()} href="#">Print my resume</a>
    </div>
    <div className="_649629ae">
      <span className="_648da435"></span>
      <a className="_cd8c9a18" href="/">View my portfolio</a>
    </div>
  </div>
)

export default Sidebar

