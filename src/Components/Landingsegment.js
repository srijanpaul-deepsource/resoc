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
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={moon} alt="in office" />
					</div>
				</div>
			</section>
				<div className='px-3'>
					<div className="container">
						<p>
							Get-started <a href="/notes" className='text-var'> here</a>. We have a task section for you to manage your work :)
							You can post your requirements in the <a className='text-var' href='/chat-rrom'> coummunity-chat</a> page.
							Feel free to browse the site, create an account and post your requirements over there.
							</p>
							<p>
							This entire site has been built by like minded students of Silicon Institute for free ❤️. If you like our work, please consider donating to us. You can visit the <a href='/aboutus' className='text-var'> about section </a> and donate to the individual content creators. This really helps us to keep the site running and to keep adding new features.
							<div className='sponsor py-3'>
								<a href='https://www.buymeacoffee.com/anubhabr500' className='	' target='_blank' rel='noreferrer'>
									<img src='https://cdn.buymeacoffee.com/buttons/v2/default-white.png' alt='Buy Me A Coffee' style={{height: '30px', width: '108px'}} />
								</a>
							</div>
						</p>
					</div>	
				</div>
    </>
  )
}
