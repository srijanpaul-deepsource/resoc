import React from 'react'
import moon from '../assets/img/moonlight.svg'
import '../assets/css/dashboard.css'
export default function Landingsegment () {
  return (
    <>
      	<section className=" py-5 px-5 cdin">
				<div className="container ">
					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">RE<span></span><span className="text-secondary">SOC</span></h1>
							<p className="lead my-4">
								RESOC provides you with academic resources, notes for free!
							</p>
							{/* <a href="https://anubhavp.dev/">
								<button className="btn btn-sm prbt">Learn More</button>
							</a> */}
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={moon} alt="in office" />
					</div>
				</div>
			</section>

    </>
  )
}
