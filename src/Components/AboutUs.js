import React from 'react'
import astronaut from '../assets/img/astronauthelmet.svg'
import anubhab from '../assets/img/anubhab.jpeg'
import '../assets/css/dashboard.css'
export default function Landingsegment() {
	return (
		<>
		<div className='container'>
			<section className=" pt-4 px-3 px-sm-0">
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
			<div className="container p-2 p-sm-5">
				<h1 className='ps-2'> Dev Team</h1>
				<div className="lead mt-3">
					<ul style={{
						listStyleType: "none",
						padding: "0"
					}}>
						<li>
							<img src={anubhab} style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								margin: "0 10px"
							}} alt="avatar" className="avatar p-2" />
							<a href="https://anubhavp.dev/" target="_blank" className='text-var' style={{ textDecoration: 'none' }} rel="noreferrer">Anubhab Patnaik</a>
						</li>
						<li>
							<img src="https://avatars.githubusercontent.com/u/90375759?v=4" style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								margin: "0 10px"
							}} alt="avatar" className="avatar p-2" />
							<a href="https://github.com/smrutid12/" target="_blank" className='text-var' style={{ textDecoration: 'none' }} rel="noreferrer">Smruti Dash</a>
						</li>
					</ul>
				</div>
				<h1 className='mt-3 ps-2'> Contributors</h1>
				<div className='mt-3'>
					<ul style={{
						listStyleType: "none",
						paddingLeft: "20px"
					}}>
						<li>
							<a href="https://anubhavp.dev/" target="_blank" className='text-var' style={{ textDecoration: 'none' }} rel="noreferrer">Anubhab Patnaik</a>

						</li>
						<li>
							Srijan Paul
						</li>
						<li>
							Swayam Vikash Pattanaik
						</li>
						<li>
							Abinash Parida
						</li>
						<li>
							<a href="https://github.com/smrutid12/" target="_blank" className='text-var' style={{ textDecoration: 'none' }} rel="noreferrer">Smruti Dash</a>
						</li>
					</ul>
				</div>
			</div>
			</div>
		</>
	)
}
