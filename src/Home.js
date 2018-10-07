import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

const Home = () => (
  <div id="Home">
    <h1 id="andrew-jarrett" style={{display: 'none'}}>I’m Andrew Jarrett</h1>
    <article>

      <ul>
	<li className="org-bullet-1"><p><span>I’m Andrew Jarrett</span></p></li>
	<br />

	<li className="org-bullet-2"><span>I am a Production Team Lead at <a href="https://ownlocal.com">OwnLocal</a> and a lover of all things functional programming.</span></li>
	<br/>
	
	<p>- Emacs is pretty cool</p>
	<p>- Currently I’m reading <a href="https://www.amazon.com/Mock-Mockingbird-Raymond-Smullyan/dp/0192801422">To Mock a Mockingbird</a></p>
	<br/>

	<li className="org-bullet-2"><span>I went to undergrad at Northwestern University’s <a href="https://www.weinberg.northwestern.edu/">Weinberg College of Arts & Sciences</a>.</span></li>
	<br />


	<li className="org-bullet-2">About me</li>
	<br />
	<p><i>Description:</i></p>
	<p className="description">I grew up in Denver and now live in Austin, Texas. My dog is named Ash and he’s cute as hell but also a tortured soul.</p>
	<br />

	<li className="org-bullet-2">Hire me</li>
	<br />
	<p>- Here’s my a link to my <Link to="/resume" className="error home-resume-link">resume</Link></p>
	<br />

	<li className="org-bullet-3">Contact info</li>
	<br />
	<p>- <a href="mailto:ahrjarrett@gmail.com">ahrjarrett@gmail.com</a></p>
	<p>- <a href="https://github.com/ahrjarrett/" target="_blank">GitHub</a></p>
	<p>- <a href="https://www.linkedin.com/in/andrewhjarrett/" target="_blank">LinkedIn</a></p>
	<br />

	<li className="org-bullet-3">Other cool stuff</li>
	<br />
	<p>1. <a href="https://blog.thegrepper.com">Blog</a></p>
	<p>2. <a href="https://github.com/fniessen/emacs-leuven-theme">Leuven</a>, the theme this page is based on</p>
	<p>3. <a href="https://github.com/ahrjarrett/.emacs.d/" target="_blank">My Emacs config</a></p>
	<p>4. <a href="http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html" target="_blank">Functors, Applicatives, And Monads In Pictures</a></p>
	<br />

      </ul>

    </article>
  </div>
)

export default Home

