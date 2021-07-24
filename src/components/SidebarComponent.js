import React, {useEffect, useState} from 'react';
import NavbarComponent from './NavbarComponent';

function SidebarComponent() {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const checkDefaultTheme = () => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setIsDarkMode(true)
            document.querySelector('html').classList.add('dark')
        } else {
			setIsDarkMode(false)
            document.querySelector('html').classList.remove('dark')
        }
        localStorage.removeItem('theme')
	}

	const selectTheme = (theme) => {
		setIsDarkMode(theme)
		theme ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
		document.querySelector('html').classList.add(localStorage.getItem('theme'))
		theme ? document.querySelector('html').classList.remove('light') : document.querySelector('html').classList.remove('dark')
	}

	useEffect(() => {
		checkDefaultTheme()
	}, [])

	const navigations = [
		{
			'url': '#hero',
			'svg': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
			'title': 'Home'
		},
		{
			'url': '#about',
			'svg':  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
			'title': 'Tentang'
		},
		{
			'url': '#portfolio',
			'svg': <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
			'title': 'Portfolio'
		},
	];
	return (
		<div>
			<div className="ml-4 top-1/3 z-10 hidden fixed md:block">
				{
					navigations.map((item, index) => (
						<ul className="mb-3" key={index}>
							<li>
								<a href={item.url} 
									className="transition ease-in-out duration-700 hover-trigger navlink
									bg-gray-100 dark:bg-true-gray-800 text-gray-700 dark:text-true-gray-600 
										dark:hover:text-gray-300 hover:text-white hover:bg-blue-800 focus:bg-blue-800
										active:bg-blue-800
										rounded-full p-4 w-14 hover:w-full hover:-mt-1 flex items-center">
									<div>
										<svg className="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
											{item.svg}
										</svg>
									</div>
									<div className="hover-target text-sm">{item.title}</div>
								</a>
							</li>
						</ul>
					))
				}
			</div>

			{/* toggle dark mode */}
			<div className="fixed w-screen z-40 hidden md:block">
				<div className="flex justify-end items-center m-10 space-x-2">
					{
						isDarkMode ? 
						<svg className="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
						: 
						<svg className="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /> </svg>
					}
					<div>
						<input type="checkbox" id="darkmode" className="hidden darkmode" 
						onChange={() => selectTheme(!isDarkMode)} checked={isDarkMode}/>
						<label htmlFor="darkmode">
							<div className="w-9 h-5 bg-gray-400 rounded-full p-1 flex items-center">
								<div className="toggle-dot flex w-4 h-4 bg-white rounded-full shadow-md transform" />
							</div>
						</label>
					</div>
					{
						isDarkMode ? 
						<svg className="text-gray-100 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /> </svg>
						: 
						<svg  className="text-gray-700 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /> </svg>
					}
				</div>
			</div>

			<NavbarComponent navigations={navigations}/>
			
	</div >
	);
}

export default SidebarComponent;