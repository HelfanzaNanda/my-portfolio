import React from 'react';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
import HeroComponent from './components/HeroComponent';
import PortfolioComponent from './components/PortfolioComponent';
import SidebarComponent from './components/SidebarComponent';


const App = () => {
	const callback = function (entries) {
		entries.forEach((entry) => {
		  console.log(entry);
	  
		  if (entry.isIntersecting) {
			entry.target.classList.add("animate-fadeIn");
		  } else {
			entry.target.classList.remove("animate-fadeIn");
		  }
		});
	  };
	  
	  const observer = new IntersectionObserver(callback);
	  
	  const targets = document.querySelectorAll(".js-show-on-scroll");
	  targets.forEach(function (target) {
		target.classList.add("opacity-0");
		observer.observe(target);
	  });
	  
	return (
		<div className="overflow-x-hidden">
			<SidebarComponent/>
			<div className="w-screen ">
				<main className=" dark:bg-true-gray-900">
					<HeroComponent/>
					<AboutComponent/>
					<PortfolioComponent/>
					<FooterComponent/>
				</main >
			</div >
		</div>
	);
};

export default App;