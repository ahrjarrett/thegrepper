import React from 'react'
import Web from './Web'

import './Resume'

const Print = () => <Web classNames='_e50a19c8' hideSidebar={true} />

export default Print






/* 

const Print = () => (
  <div className="_e50a19c8">
    <div className="_c7b9ebe6">
      <header className="_3a47291c">
        <div className="_606748b9">
          <h1 className="_93f6c985">Dan Cecile</h1>
          <p className="_1121011e">Software developer, 10 years experience</p>
          <p className="_d7dc6b3d">View my portfolio website at <a className="_a3a84a32" href="https://dcecile.github.io">dcecile.github.io<img className="_9ac5dba3" src="/static/media/external-link.ac05cd4f.svg"/></a></p>
        </div>
        <nav className="_953d51e2"><a className="_36d32072" href="mailto:dancecile@gmail.com">dancecile@gmail.com<img className="_9ac5dba3" src="/static/media/mail.20e8982e.svg"/></a><a className="_36d32072" href="https://www.linkedin.com/in/dancecile/">linkedin.com/in/dancecile<img className="_9ac5dba3" src="/static/media/linkedin.48a2133d.svg"/></a><a className="_36d32072" href="https://github.com/dcecile">github.com/dcecile<img className="_9ac5dba3" src="/static/media/github.f5a069d2.svg"/></a><span className="_7c69c849">Kitchener, Ontario<img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/></span></nav>
      </header>
      <div className="_1be453ce"></div>
      <main className="_f276a4b7">
        <div className="_a2c561e">
          <section className="_955c1149">
            <h2 className="_639d6928">Tech skills</h2>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <p className="_ef383d05"><span className="_3dae7860">C#</span> <span className="_3dae7860">CSS</span> <span className="_3dae7860">FP</span> <span className="_3dae7860">JavaScript</span> <span className="_3dae7860">Python</span> <span className="_3dae7860">React</span> <span className="_3dae7860">Ruby</span> <span className="_3dae7860">Rails</span> <span className="_3dae7860">Scala</span> <span className="_3dae7860">SQL</span> <span className="_3dae7860">TDD</span> <span className="_3dae7860">Vue.js</span></p>
              </div>
            </div>
          </section>
          <section className="_955c1149">
            <h2 className="_639d6928">Side projects</h2>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_506dd536">Forks in the Road</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2018</span></h3>
                <p className="_40036fd">Value estimation tool: <span className="_ab78367e">React / Rails</span></p>
              </div>
            </div>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_506dd536">Off-Grid Orcs</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2017</span></h3>
                <p className="_40036fd">64x64 pixel web game: <span className="_ab78367e">Scala.js / FP</span></p>
              </div>
            </div>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_506dd536">Tiny Worker Bee</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2017</span></h3>
                <p className="_40036fd">Twitter scheduling bot: <span className="_ab78367e">Vue.js / Go</span></p>
              </div>
            </div>
            <p className="_80b01d83">…more at <a className="_a3a84a32" href="https://dcecile.github.io">dcecile.github.io<img className="_9ac5dba3" src="/static/media/external-link.ac05cd4f.svg"/></a></p>
          </section>
          <section className="_955c1149">
            <h2 className="_639d6928">Volunteering</h2>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">THEMUSEUM</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_29f8eb0"><img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/>Kitchener</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Makerspace Assistant</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2017–now</span></p>
                <p className="_6b9d0c5d">Helping lead maker workshops</p>
                <p className="_6b9d0c5d">Teaching kids STEAM mindsets</p>
              </div>
            </div>
          </section>
          <section className="_955c1149">
            <h2 className="_639d6928">Education</h2>
            <div className="_d24ff00c">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">University of Waterloo</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2004–2009</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Bachelor of Computer Science</span></p>
              </div>
            </div>
          </section>
        </div>
        <div className="_12415eaf">
          <section className="_955c1149">
            <h2 className="_639d6928">Work history</h2>
            <div className="_87593a56">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">Unitron</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_29f8eb0"><img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/>Kitchener, Ontario</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Software Developer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2009–2013</span></p>
                <p className="_edb0178f"><span className="_506dd536">Senior Software Developer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">2013–2018</span></p>
                <p className="_6b9d0c5d">Coded manufacturing subsystems in <span className="_ab78367e">C#</span></p>
                <p className="_6b9d0c5d">Built a hybrid <span className="_ab78367e">HTML / C#</span> desktop app</p>
                <p className="_6b9d0c5d">Investigated bugs using <span className="_ab78367e">SQL</span> and <span className="_ab78367e">Excel</span></p>
                <p className="_6b9d0c5d">Negotiated and documented requirements</p>
                <p className="_6b9d0c5d">Coordinated team’s development cycles</p>
                <p className="_6b9d0c5d">Led key improvements in team processes</p>
                <p className="_6b9d0c5d">Mentored team members</p>
              </div>
            </div>
            <div className="_87593a56">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">NexJ Systems</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_29f8eb0"><img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/>Toronto, Ontario</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Developer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">winter co-op, 2008</span></p>
                <p className="_edb0178f"><span className="_506dd536">Application Developer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">fall co-op, 2008</span></p>
                <p className="_6b9d0c5d">Simplified WiX installer using <span className="_ab78367e">Java</span></p>
                <p className="_6b9d0c5d">Wrote tests, fixed CRM bugs in <span className="_ab78367e">Scheme</span></p>
              </div>
            </div>
            <div className="_87593a56">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">Coreworx</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_29f8eb0"><img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/>Kitchener, Ontario</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Software Developer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">co-op, 2006/2007</span></p>
                <p className="_6b9d0c5d">Developed DMS personalization in <span className="_ab78367e">C#</span></p>
                <p className="_6b9d0c5d">Automated database migration via <span className="_ab78367e">SQL</span></p>
              </div>
            </div>
            <div className="_87593a56">
              <div className="_321f7c83"></div>
              <div className="_606748b9">
                <h3 className="_2054074c"><span className="_7c69c849">LSI Logic</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_29f8eb0"><img className="_9ac5dba3" src="/static/media/map-pin.b2f804bd.svg"/>Waterloo, Ontario</span></h3>
                <p className="_edb0178f"><span className="_506dd536">Software Engineer</span><span className="_42884883"><span className="_6bca7255"></span>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className="_6bca7255"></span></span><span className="_27361ab">co-op, 2005/2006</span></p>
                <p className="_6b9d0c5d">Fixed H.264 video decoder bugs in <span className="_ab78367e">C</span></p>
                <p className="_6b9d0c5d">Created a DSP log analysis tool in <span className="_ab78367e">C++</span></p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="_b7bdb258"></div>
      <footer className="_a3664427">
        <p className="_94bc3f1">I made this resume with <span className="_27361ab">Elm</span> and <span className="_27361ab">CSS</span> — view source at <a className="_a3a84a32" href="https://github.com/dcecile/dcecile-resume-portfolio">git.io/dcecile-resume<img className="_9ac5dba3" src="/static/media/external-link.ac05cd4f.svg"/></a></p>
      </footer>
    </div>
  </div>
)
*/
