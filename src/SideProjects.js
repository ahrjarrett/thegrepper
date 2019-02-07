import React from "react"
import Section from "./Section"

const SideProjects = () => (
  <div>
    <Section heading="Projects" items={items} />
    {/* <p className="section-footer">
      …more at{" "}
      <a className="section-footer-link" href="https://github.com/ahrjarrett">
        github.com/ahrjarrett
        <img className="resume-icon" src="svg/link.svg" alt="" />
      </a>
    </p> */}
  </div>
)

const items = [
  {
    title: null,
    location: null,
    subtitle: "Elevate",
    time: "2019",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/Lambda-School-Labs/LabsPT1_Backwoods"
          className="_36d32072"
        >
          Elevating the maps experience for active users
        </a>{" "}
        • <span className="hl">D3 / Google Maps</span>
      </p>
    ]
  },
  {
    title: null,
    location: null,
    subtitle: "React Speak",
    time: "2018",
    bullets: [
      <p className="section-item-bullet">
        <a
          href="https://github.com/ahrjarrett/react-speak"
          className="_36d32072"
        >
          An HOC for Talking to Your Browser
        </a>{" "}
        • <span className="hl">React / Redux</span>
      </p>
    ]
  },
  {
    title: null,
    location: null,
    subtitle: "Polygon",
    time: "2017",
    bullets: [
      <p className="section-item-bullet">
        <a href="https://github.com/ahrjarrett/polygon" className="_36d32072">
          Google Maps for Realtors
        </a>{" "}
        • <span className="hl">Google Maps / MongoDB</span>
      </p>
    ]
  }
  // {
  //   title: null,
  //   location: null,
  //   subtitle: "Github OAuth Module",
  //   time: "2018",
  //   bullets: [
  //     <p className="section-item-bullet">
  //       Client-side GitHub auth: <span className="hl">React / JWT</span>
  //     </p>
  //   ]
  // },
]

export default SideProjects

/*
    <SectionContainer>
    <h2 className="section-header">Side projects
    </h2>
    <div className="_d24ff00c">
      <div className="_321f7c83">
      </div>
      <div className="_606748b9">
	<h3 className="_2054074c">
	  <span className="_506dd536">
	    React Speak
	  </span>
	  <span className="ellipses">
	    <span className="ellipses-spacer">
	    </span>
	    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
	    <span className="ellipses-spacer">
	    </span>
	  </span>
	  <span className="_27361ab">
	    2018
	  </span>
	</h3>
	<p className="_40036fd">
	  Handling Voice Data: <span className="_ab78367e">React / Redux</span>
	</p>
      </div>
    </div>
    <div className="_d24ff00c">
      <div className="_321f7c83">
      </div>
      <div className="_606748b9">
	<h3 className="_2054074c">
	  <span className="_506dd536">
	    Github OAuth Module
	  </span>
	  <span className="ellipses">
	    <span className="ellipses-spacer">
	    </span>
	    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
	    <span className="ellipses-spacer"></span>
	  </span>
	  <span className="_27361ab">2018
	  </span>
	</h3>
	<p className="_40036fd">
	  Client-side GitHub auth: <span className="_ab78367e">React / JWT</span>
	</p>
      </div>
    </div>
    <div className="_d24ff00c">
      <div className="_321f7c83">
      </div>
      <div className="_606748b9">
	<h3 className="_2054074c">
	  <span className="_506dd536">
	    Polygon
	  </span>
	  <span className="ellipses">
	    <span className="ellipses-spacer">
	    </span>
	    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
	    <span className="ellipses-spacer"></span>
	  </span>
	  <span className="_27361ab">
	    2017
	  </span>
	</h3>
	<p className="_40036fd">
	  Google Maps for Realtors: <span className="_ab78367e">Express.js</span>
	</p>
      </div>
    </div>
  </SectionContainer>

*/
