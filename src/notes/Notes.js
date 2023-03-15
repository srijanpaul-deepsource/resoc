import React from 'react'
import programming from '../assets/img/programming.svg'
export default function Notes() {
	return (
		<>
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
						<img className="img-fluid w-50 d-none d-sm-block" src={programming} alt="in office" />
					</div>
				</div>
			</section>
				<div className='p-5'>
					<div className="container">
						
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
						<hr/>
							<ul style={{
								listStyleType: 'none',
							}}>
								<li><a href='engmath3' className='text-var notes-link'>Engineering Maths III</a></li>
								
							</ul>
					</div>
					</div>
			</div>
		</>
	)
}