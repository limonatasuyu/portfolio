import {motion, useAnimation} from 'framer-motion'

import githubBlackLogo from './img/githubBlackLogo.png'
import webLogo from './img/webLogo.png'

export function ProjectLinks(props) {
	return(
	<div className='project-links flex'>
		<a href={props.sourceLink} target='_blank' rel="noreferrer" ><img src={githubBlackLogo} alt='github-logo'/>Source Code</a>
		<a href={props.appLink} target='_blank' rel="noreferrer" ><img src={webLogo} alt='world-icon'/>App</a>
	</div>
	)
}

export function ProjectTemplate(props) {

	return(
	<div className='single-project-container'>
		<h1 className='project-header'>{props.header}</h1>
		<video muted autoPlay loop className='project-video'>
			<source src={props.video} type='video/mp4' />
		</video>
		<p className='project-description'>{props.description}</p>
		<ProjectLinks sourceLink={props.sourceLink} appLink={props.appLink}/>
	</div>
	)
}

export function SkillBannerWrapper(props) {
	
	const imgVars = {normal: {scale: 1}, scaled: {scale: 1.2}}
	const section1Images = props.section1.map((i, x) => {
		return <motion.img 
		onMouseEnter={() => {props.setHoveredLogo(i.name)}}
		onMouseLeave={() => {props.setHoveredLogo(null)}}
		variants={imgVars} className={`skill-logo ${i.name}-logo`} key={x} src={i.logo} alt='logo' whileHover='scaled'/>
	})
	
	var section2Images = []
	if (props.section2) {section2Images = props.section2.map((i, x) => {return <motion.img
		onMouseEnter={() => {props.setHoveredLogo(i.name)}}
		onMouseLeave={() => {props.setHoveredLogo(null)}}
		variants={imgVars} className={`skill-logo ${i.name}-logo`} key={x} src={i.logo} alt='logo' whileHover='scaled'/>})}
	
	const control = useAnimation()
	
	const secondaryClassName = props.tier + '-banner-wrapper'
	
	return(<>
	{props.section2 ?
	<motion.div
		className={`skill-banner-wrapper ${secondaryClassName} flex`}
		animate={control}
		variants={{hideSub: {}, showSub: {}}}
		onMouseEnter={() => {control.start('showSub')}}
		onMouseLeave={() => {control.start('hideSub')}}>
		<div className='yellow-block'/> {/*I'm gonna put it on top of left space on window in order to make skills invisible on all different screens*/}
		<div className='skill-banner flex'>
			{section1Images}
		</div>	
		<motion.div
			className='skill-sub-banner flex'
			variants={{hideSub: {x: '-33vw'}, showSub: {x: '0vw'}}}
			initial='hideSub'
			animate={control}>
			{section2Images}
		</motion.div>
	</motion.div>
	:
	<div className='skill-banner-wrapper second-banner-wrapper flex'>
		<div className='skill-banner flex'>
			{section1Images}
		</div>
	</div>
	}
	</>)

}
