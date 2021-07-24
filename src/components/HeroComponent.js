import React from 'react';
import HeroImage from '../images/hero_img.jpg'
import Typical from 'react-typical'


const HeroComponent = () => {
	return (
		<section id="hero" className="h-screen relative js-show-on-scroll">
			<div>
				<img className="h-screen w-screen object-cover object-right md:object-top" src={HeroImage} alt="" />
			</div>
			<div className="relative">
				<div className="absolute bottom-0 bg-white dark:bg-black opacity-75 dark:opacity-0 h-screen w-full" />
			</div>
			<div className="absolute md:top-52 md:left-40 z-10 top-1/3 left-2">
				<div className="text-4xl mb-3 md:text-5xl text-gray-700 dark:text-gray-200 font-bold font-sans  text-center ">Helfanza Nanda Alfara</div>
				<div className="text-gray-700 mb-10 dark:text-gray-200 text-2xl flex font-sans ">
					<p className="mr-2">i'm</p>
					<Typical 
						steps={['Web Developer', 500, 'Laravel Developer', 500]}
						loop={Infinity}
						wrapper="h3"/>
				</div>
				<button className="bg-blue-500 text-white px-5 py-2 rounded-md">Download CV</button>
			</div>
			
		</section>

	);
};

export default HeroComponent;