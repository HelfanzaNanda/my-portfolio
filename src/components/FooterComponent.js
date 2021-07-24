import React from 'react';

function FooterComponent() {
	const year = new Date().getFullYear()
	return (
		<section id="footer" className="flex py-3 bg-gray-200  dark:bg-true-gray-800" >
			<div className="w-full md:w-1/3 items-center m-auto text-center font-semibold dark:text-gray-300">
				<p>© Copyright {year}</p>
				<p>Designed by Helfanza Nanda Alfara</p>
			</div>
		</section >
	);
}

export default FooterComponent;