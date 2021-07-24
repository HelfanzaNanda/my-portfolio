import React, {useState, useEffect} from "react";

const NavbarComponent = ({ navigations }) => {
	const toogleSidebar = (isOpen) => {
		let iconOpen = document.querySelector("#icon-open");
		let iconClose = document.querySelector("#icon-close");
		let sidebarMobile = document.querySelector(".sidebar-mobile");
		iconOpen.classList.toggle("hidden");
		iconClose.classList.toggle("hidden");
		sidebarMobile.classList.toggle("hidden");
	};
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
	return (
		
		<div>
			{/* navbar icon */}
			<div className="fixed w-screen z-50 md:hidden">
				<div className="flex m-4 justify-end text-gray-700">
					<svg id="icon-open" onClick={() => toogleSidebar(true)} className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg id="icon-close" onClick={() => toogleSidebar(false)} className="hidden w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
						<path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>

			{/* navbar */}
			<div className="sidebar-mobile 
			items-center hidden fixed md:hidden 
			z-50 w-3/4 h-screen bg-white dark:bg-true-gray-900" 
			>
				<div className="m-3 w-11/12 flex flex-col h-full justify-center ">
					<div className="flex justify-end mb-3 mr-2 items-center space-x-2 ">
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
					
					{navigations.map((item, index) => (
						<a href={item.url} key={index}
							className="mb-3 ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 
							hover:text-white hover:bg-blue-800 rounded-full px-4 py-2 hover:-mt-1 dark:hover:-mt-1 flex items-center" >
							<div>
								<svg className="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
									{item.svg}
								</svg>
							</div>
							<div>{item.title}</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
