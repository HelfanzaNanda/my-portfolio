import React, {useState} from 'react';
import { portfolio } from '../data/portfolio';
function PortfolioComponent() {
	const [portfolios, setPortfolios] = useState(portfolio)
	const filter = (key = null) => {
		if(key == null){
			setPortfolios(portfolio)
		}else{
			const filter = portfolio.filter(item => {
				if(key === 'mobile'){
					return item.isMobile === true
				}
				return item.isMobile === false
			})
			setPortfolios(filter)
		}
	}

	return (
		<section id="portfolio" className="pt-20 md:pt-10 md:px-24 dark:bg-true-gray-900 js-show-on-scroll">
			<div className="text-center text-2xl uppercase font-bold text-gray-700 dark:text-gray-300">Portofilio</div>
			<div className="flex flex-wrap justify-center text-blue-800 dark:text-blue-900 my-2">
				<svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg>
			</div>
			{/* <div className="px-5 md:px-14 text-center text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa vitae asperiores ut tenetur vero nesciunt similique sit fugiat veritatis eos harum amet, blanditiis mollitia. Maiores, doloribus. At, repudiandae doloremque.</div> */}
			<div className="w-52 mx-auto mt-10 mb-4">
				<div className="flex justify-evenly uppercase">
					<button onClick={() => filter()} className="hover:text-blue-700 focus:text-blue-700
						dark:hover:text-blue-900  text-gray-700 dark:text-gray-300 font-semibold">Semua</button>
					<button onClick={() => filter('mobile')} className="hover:text-blue-700 focus:text-blue-700
						dark:hover:text-blue-900 text-gray-700 dark:text-gray-300 font-semibold">Mobile</button>
					<button onClick={() => filter('web')} className="hover:text-blue-700 focus:text-blue-700
						dark:hover:text-blue-900 text-gray-700 dark:text-gray-300 font-semibold">Web</button>
				</div>
			</div>
			<div className="flex flex-col md:grid md:auto-rows-max md:grid-cols-3 md:gap-4 w-screen items-center
				text-center md:w-5/6 mx-auto md:justify-items-center">
					{
						portfolios.map((item, index) => (
							<div className="mb-2 mx-3 md:mx-0" key={index} >
								<img className="rounded-xl w-full md:w-72 object-cover object-center" alt="" 
								src={process.env.PUBLIC_URL + '/'+ item.source} />
								<div className="text-gray-900 dark:text-green-200">{item.title}</div>
							</div>
						))
					}
			</div>
		</section>

	);
}

export default PortfolioComponent;