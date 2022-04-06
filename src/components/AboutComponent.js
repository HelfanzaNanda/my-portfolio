import React from 'react';
import AboutImage from '../images/about_img.jpg'

function AboutComponent() {
	const about = {
		'me': 'Hallo, Saya adalah Freelance seorang Web Developer yang berfokus pada Web Framework Laravel, dan saya juga bisa menggunakan React JS',
		'title': 'Web Developer'
	}
	const skills = [
		{ 'name': 'Laravel', 'percent': '70%', },
		{ 'name': 'Tailwind CSS', 'percent': '70%', },
		{ 'name': 'Boostrap', 'percent': '70%', },
		{ 'name': 'Jquery', 'percent': '70%', },
		{ 'name': 'Golang', 'percent': '60%', },
	]
	return (
		<section id="about" className="pt-10 h-screen md:px-36 dark:bg-true-gray-900 js-show-on-scroll">
			<div className="text-center text-2xl uppercase font-bold text-gray-700 dark:text-gray-300">Tentang</div>
			<div className="flex flex-wrap justify-center text-blue-800 dark:text-blue-900 my-2">
				<svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg>
			</div>
			{/* <div className="px-5 md:px-14 text-center text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque culpa vitae asperiores ut tenetur vero nesciunt similique sit fugiat veritatis eos harum amet, blanditiis mollitia. Maiores, doloribus. At, repudiandae doloremque.</div> */}
			<div className="mt-10 block md:flex justify-center items-center m-3">
				<div className="mb-3 md:mb-0 md:w-3/6 md:mr-5 flex-shrink-0"><img className="rounded-lg" src={AboutImage} alt="" /></div>
				<div className="justify-start">
					<div className="mb-3 text-xl font-bold text-gray-500 dark:text-gray-300 capitalize">{about.title}</div>
					<div className="text-gray-700 dark:text-gray-300">
						{about.me}
					</div>
					<div className="block md:flex mt-2 w-full pr-8">
						<div className="w-full mt-6 md:mt-0">
							<div className="text-xl font-bold text-gray-500 dark:text-gray-300 capitalize">Keahlian</div>
							<div className="block md:flex md:flex-wrap md:justify-between w-full">
								{
									skills.map((item, index) => (
										<div className="mb-2 mx-3 md:mx-0 w-full" key={index}>
											<div className="flex w-full justify-between font-sans uppercase font-semibold text-gray-700 dark:text-gray-300">
												<div>{item.name}</div>
												<div>{item.percent}</div>
											</div>
											<div className="shadow w-full bg-gray-100 dark:bg-gray-800">
												<div className="bg-blue-800 dark:bg-gray-700 text-xs leading-none h-3 text-center text-white" style={{ width: item.percent }} />
											</div>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutComponent;