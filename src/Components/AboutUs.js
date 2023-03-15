import React from 'react'
import astronaut from '../assets/img/Astronaut helmet.svg'
import '../assets/css/dashboard.css'
export default function Landingsegment() {
	return (
		<>
			<section className=" py-4 cdin px-4 px-sm-1">
				<div className="container ">
					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">TEAM<span></span><span className="text-secondary">SOC</span></h1>
							<p className="lead my-4">
								The coolest team!
							</p>
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={astronaut} alt="in office" />
					</div>
				</div>
			</section>
			{/* <div className='px-3 px-sm-4'>
				<div className="container">
					<div className="row">
						<div className="col-12 p-2">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
						<div className="col-12 p-2">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div> */}
		</>
	)
}
