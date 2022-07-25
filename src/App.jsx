import lemonImg from './img/lemon.png'
import linkedinLogo from './img/linkedinLogo.png'
import githubLogo from './img/githubLogo.png'
import cssLogo from './img/skillLogo/cssLogo.png'
import flaskLogo from './img/skillLogo/flaskLogo.png'
import framerMotionLogo from './img/skillLogo/framerMotionLogo.png'
import htmlLogo from './img/skillLogo/htmlLogo.png'
import javascriptLogo from './img/skillLogo/javascriptLogo.png'
import nodejsLogo from './img/skillLogo/nodejsLogo.png'
import pandasLogo from './img/skillLogo/pandasLogo.png'
import pythonLogo from './img/skillLogo/pythonLogo.png'
import reactLogo from './img/skillLogo/reactLogo.png'
import reactRouterLogo from './img/skillLogo/reactRouterLogo.png'
import sassLogo from './img/skillLogo/sassLogo.png'

import {SkillBannerWrapper, ProjectLinks, ProjectTemplate} from './Components'
import {useState} from 'react'
import {motion, useAnimation} from 'framer-motion'

import ytSS1 from './img/screenShots/youtubeClone/01.png'
import ytSS2 from './img/screenShots/youtubeClone/02.png'
import ytSS3 from './img/screenShots/youtubeClone/03.png'
import ytSS4 from './img/screenShots/youtubeClone/04.png'
import ytSS5 from './img/screenShots/youtubeClone/05.png'
import ytSS6 from './img/screenShots/youtubeClone/06.png'

import youtubeLogo from './img/youtubeLogo.png'
import navigate from './img/navigate.png'

import weatherVideo from './video/weatherApp.mp4'
import todoVideo from './video/todoApp.mp4'
import employeeVideo from './video/employeeApp.mp4'
import memeVideo from './video/memeApp.mp4'

const skillsObj = {
	CSS : {name: 'CSS', logo: cssLogo, description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML or XML'},
	Flask : {name: 'Flask', logo: flaskLogo, description: 'Flask is a micro web framework written in Python.'},
	'Framer Motion' : {name: 'Framer Motion', logo: framerMotionLogo, description: 'A production-ready motion library for React on the web.'},
	HTML : {name: 'HTML', logo: htmlLogo, description: 'HTML is the standard markup language for documents designed to be displayed in a web browser'},
	Javascript: {name: 'Javascript', logo: javascriptLogo, description: 'A Programming language that is one of core technologies of the Web'},
	Node: {name: 'Node', logo: nodejsLogo, description: 'JavaScript runtime environment'},
	Pandas: {name: 'Pandas', logo: pandasLogo, description: 'Pandas is a powerful data analysis and manipulation tool, built on top of Python'},
	Python: {name: 'Python', logo: pythonLogo, description: 'Python is a high-level, interpreted, general-purpose programming language.'},
	React: {name: 'React', logo: reactLogo, description: 'JavaScript library for building user interfaces'},
	'React Router' : {name: 'React Router', logo: reactRouterLogo, description: 'React Router is a client and server-side routing library for React'},
	Sass: {name: 'Sass', logo: sassLogo, description: 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS.'},
}

function YoutubeCloneSlide() {
	const mobileSlideAnim = useAnimation()
	const [mobileSlideRecord, setMobileSlideRecord] = useState(0)
	
	function handleSlide(anim) {
		var animSub = 92.88 + 4.13
		let animTotal;
		if (anim === 'to-left') {animTotal = mobileSlideRecord + animSub}
		else {animTotal = animTotal = mobileSlideRecord - animSub}
		mobileSlideAnim.start({x: `${animTotal}vw`})
		setMobileSlideRecord(animTotal)
	}

	return(
	<div className='youtube-project-slide-container'>
				{mobileSlideRecord >= -450 && <img className='youtube-navigate-to-right' onClick={() => handleSlide('to-right')} src={navigate} alt='navigate'/>}
				{mobileSlideRecord < 0 && <img className='youtube-navigate-to-left' onClick={() => handleSlide('to-left')} src={navigate} alt='navigate'/>}
				<motion.div className='youtube-ss-container-wrapper flex' animate={mobileSlideAnim}>
					{[ytSS2, ytSS3, ytSS1, ytSS4, ytSS5, ytSS6].map((i, x) => {
						return <div key={x} className='youtube-ss-container'><img className='youtube-ss' src={i} alt='screenshot'/></div>
						})}
				</motion.div>
			</div>
	
	)
}

function YoutubeCloneCollage() {

	return (
		<div className='youtube-project-collage-container'>
			<motion.div initial={{zIndex: 0, position: 'static'}} whileHover={{zIndex: 5, position: 'relative'}} className='youtube-collage-row flex'>
				<motion.div initial={{zIndex: 0, position: 'static'}} whileHover={{zIndex: 5, position: 'relative'}}>
					<motion.img initial={{opacity: 0.7, scale: 1}} whileHover={{opacity: 1, scale: 1.3}} className='youtube-ss youtube-ss1' src={ytSS2} alt='screenshot'/>
				</motion.div>
				<div><motion.img initial={{opacity: 0.7, scale: 1}} whileHover={{opacity: 1, scale: 1.3}} className='youtube-ss youtube-ss2' src={ytSS4} alt='screenshot'/></div>
				<div><motion.img initial={{opacity: 0.7, scale: 1}} whileHover={{opacity: 1, scale: 1.3}} className='youtube-ss youtube-ss3' src={ytSS6} alt='screenshot'/></div>
			</motion.div>
			<div className='youtube-collage-row flex'>
				<div><motion.img initial={{opacity: 0.7, scale: 1}} whileHover={{opacity: 1, scale: 1.3}} className='youtube-ss youtube-ss4' src={ytSS3} alt='screenshot'/></div>
				<div><motion.img initial={{opacity: 0.7, scale: 1, zIndex: 0}} whileHover={{opacity: 1, scale: 1.3, zIndex: 1}} className='youtube-ss youtube-ss5' src={ytSS5} alt='screenshot'/></div>
				<div><motion.img initial={{opacity: 0.7, scale: 1}} whileHover={{opacity: 1, scale: 1.3}} className='youtube-ss youtube-ss6' src={ytSS1} alt='screenshot'/></div>
			</div>
		</div>
	)

}

export default function App() {
	
	const [hoveredLogo, setHoveredLogo] = useState(null)
	
	return(
	<div className='app-container'>
		<div className='lines-on-top'>
			<hr/>
			<hr/>
			<hr/>
		</div>
		<div className='primary-text flex'>
			<div className='headers-container'>
				<h1 className='first-header'>Hi, I'm <br/> Emre Dilek.</h1>
				<h1 className='second-header'>I'm a <br/> Web Developer / Programmer</h1>
			</div>
			<div className='lemon-container'>
				<p>There is a lemon.</p>
				<img className='lemon-img' src={lemonImg} alt='lemon'/>
			</div>
			<div>
				<p className='about-me'>I’m a web developer located in Turkiye. I like creating software and solving programming problems. I like to push myself and learn new things. </p>
					<div className='links-container flex'> 
					<a style={{cursor: 'pointer'}} target='_blank' rel='noreferrer' href='https://github.com/limonatasuyu'><img src={githubLogo} alt='github-logo'/></a>
					<a style={{cursor: 'pointer'}} target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/emredilek/'><img src={linkedinLogo} alt='linkedin-logo'/></a>
				</div>
			</div>
		</div>
		<div className='skills-container flex'>
			<div>
				<h1 className='skills-header'>Some of the technologies i'm familiar with</h1>
				<SkillBannerWrapper setHoveredLogo={setHoveredLogo} hoveredLogo={hoveredLogo} tier='first'
					section1={[skillsObj.Javascript, skillsObj.Node, skillsObj.React]} section2={[skillsObj['Framer Motion'], skillsObj['React Router']]} />
				<SkillBannerWrapper setHoveredLogo={setHoveredLogo} hoveredLogo={hoveredLogo} tier='second'
					section1={[skillsObj.Python, skillsObj.Flask, skillsObj.Pandas]} />
				<SkillBannerWrapper setHoveredLogo={setHoveredLogo} hoveredLogo={hoveredLogo} tier='third'
					section1={[skillsObj.HTML, skillsObj.CSS]} section2={[skillsObj.Sass]} />
			</div>
			{hoveredLogo !== null ?
			<div className='skill-description-container flex'>
				<img className='skill-description-logo' src={skillsObj[hoveredLogo].logo} alt='logo'/>
				<div className='skill-description-text'>
					<h1>{hoveredLogo}</h1>
					<p>{skillsObj[hoveredLogo].description}</p>
				</div>
			</div>
			:	
			<div className='skill-description-container flex'>
				<h1 className='skill-description-placeholder'>Hover over one of the logos</h1>
			</div>
			}
			<div className='skill-description-empty-box'/>
		</div>
		<div className='projects-container'>
		<h1 className='projects-main-header'>Some of my projects</h1>
			<div className='youtube-container'>
				<h1 className='youtube-header-top'>Youtube clone written with React </h1>
				<YoutubeCloneSlide />
				<div className='youtube-collage-grand-parent flex'>
					<div className='youtube-collage-parent flex'>
						<YoutubeCloneCollage />
					</div>
				</div>
				<div className='youtube-text'>
					<div className='youtube-logos flex'><img src={youtubeLogo} alt='youtube-logo'/> <img src={reactLogo} alt='react-logo'/></div>
					<h1 className='youtube-header-paragraph'>Youtube clone written with React </h1>
					<p className='youtube-description'>This is a desktop youtube clone written with react. You can watch videos that you choose from homepage, you can read comments and comment to videos. It uses youtube data api v3 for fetching data about videos and there is a database of video ids i collect random places from internet and arrange them using python pandas library</p>
					<ProjectLinks sourceLink={'https://github.com/limonatasuyu/react-youtube-clone'} appLink={'https://limonatasuyu.github.io/react-youtube-clone/'}/>
				</div>
			</div>
			<div className='video-projects-container'>
				<ProjectTemplate 
					description={'A web app that displays current weather of some of the biggest cities in the world.'}
					header={'Weather App writted in React'}
					video={weatherVideo}
					sourceLink={'https://github.com/limonatasuyu/React-weather-app'} appLink={'https://limonatasuyu.github.io/React-weather-app/'}
				/>
				<ProjectTemplate 
					description={'Todo app written with Flask. You can create and edit your own todo list with your username. And you can see your todo list anytime you want.'}
					header={'Todo App written with Flask'}
					video={todoVideo}
					sourceLink={'https://github.com/limonatasuyu/Todo_app_Flask'} appLink={'http://limonyerinelimon.pythonanywhere.com/'}
				/>
				<ProjectTemplate
					description={'You can keep your data about your employees with this app.'}
					header={'Employee data with React'}
					video={employeeVideo}
					sourceLink={'https://github.com/limonatasuyu/react-employee-data'} appLink={'https://limonatasuyu.github.io/react-employee-data/'}
				/>
				<ProjectTemplate
					description={'Simple App written with react that generates random images that you can write something on top.'}
					header={'Meme Generator App'}
					video={memeVideo}
					sourceLink={'https://github.com/limonatasuyu/React-meme-generator-app'} appLink={'https://limonatasuyu.github.io/React-meme-generator-app/'}
				/>
			</div>
		</div>
	</div>
	)
}
