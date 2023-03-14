import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Navbar'
import moon from '../assets/img/undraw_on_the_office_fbfs.svg'
import '../assets/css/dashboard.css'
export default function Notes() {
	return (
		<>
		<Header />
			<div className=''>
      <section className=" pt-5 px-sm-3 px-5 cdin">
				<div className="container ">
					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">NOTES<span></span></h1>
							<p className="lead my-4">
								Get started with your notes here
							</p>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={moon} alt="in office" />
					</div>
				</div>
			</section>
				<div className='p-5'>
					<div className="container">
						<p>
							<ul style={{
								listStyleType: 'none',
							}}>
								<li><a href='engmath1' className='text-var notes-link'>Engineering Maths I</a></li>
								<li><a href='engmath2' className='text-var notes-link'>Engineering Maths II</a></li>
								<li><a href='engphy' className='text-var notes-link'>Engineering Physics</a></li>
								<li><a href='engchem' className='text-var notes-link'>Engineering Chemistry</a></li>
								<li><a href='engi' className='text-var notes-link notes-link'>English I</a></li>
								<li><a href='engii' className='text-var notes-link notes-link'>English II</a></li>
								<li>
									<a href='basic-electronics' className='text-var notes-link notes-link'>Basic Electronics</a>
								</li>
								<li>
									<a href='basic-electrical' className='text-var notes-link notes-link'>Basic Electrical</a>
								</li>
								<li>
									<a href='cprog' className='text-var notes-link'>C Programming</a>
								</li>
								<li>
									<a href='dsa' className='text-var notes-link'>Data Structures & ALgorithms</a>
								</li>
								<li>
									<a href='ci' className='text-var notes-link'>Constitution of India</a>
								</li>
								<li>
									<a href='envs' className='text-var notes-link'>Environmental Science</a>
								</li>
							</ul>
						</p>
						<hr 
						style={{	
						maxWidth: '100%',
						}}
						/>
						<p>
							<ul style={{
								listStyleType: 'none',
							}}>
								<li><a href='engmath1' className='text-var notes-link'>Engineering Maths I</a></li>
								<li><a href='engmath2' className='text-var notes-link'>Engineering Maths II</a></li>
								<li><a href='engphy' className='text-var notes-link'>Engineering Physics</a></li>
								<li><a href='engchem' className='text-var notes-link'>Engineering Chemistry</a></li>
								<li><a href='engi' className='text-var notes-link'>English I</a></li>
								<li><a href='engii' className='text-var notes-link'>English II</a></li>
								<li>
									<a href='basic-electronics' className='text-var notes-link'>Basic Electronics</a>
								</li>
								<li>
									<a href='basic-electrical' className='text-var notes-link'>Basic Electrical</a>
								</li>
								<li>
									<a href='cprog' className='text-var notes-link'>C Programming</a>
								</li>
								<li>
									<a href='dsa' className='text-var notes-link'>Data Structures & ALgorithms</a>
								</li>
								<li>
									<a href='ci' className='text-var notes-link'>Constitution of India</a>
								</li>
								<li>
									<a href='envs' className='text-var notes-link'>Environmental Science</a>
								</li>
							</ul>
						</p>
						<hr style={{
							borderStyle: 'dotted',
						}} />
					</div>
					</div>
			</div>

		<Footer />
		</>
	)
}