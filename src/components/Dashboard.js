import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import baby from './../images/baby.png'
import risk from './../images/risk.png'
import walking from './../images/walking.png'
import Animate from '../Animate'

function Dashboard() {
    const list = [
        {
          name: "Monthly Saving",
          color: "primary",
          image:baby
        },
        {
          name: "Yearly Saving",
          color: "warning",
          image:risk
        },
        {
          name: "Total Saving",
          color: "info",
          image:walking
        },
      ]
    return (
        <div className='container bg-style'>
           <Animate>
           <div className='row'>
                {
                    list.map((item) => {
                        return <div className='col-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class={`card-body  border border-${item.color}`}>
                                    <h5 class={`card-title text-${item.color}`}>{item.name} <img src={item.image}/></h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
           </Animate>
            
           
            
            <div>
                <div className='m-2'>
                    <Link to={'graph'}><button className='btn btn-sm btn-outline-primary'>Graph</button></Link>
                    <Link to={'profit'}><button className='btn btn-sm btn-outline-primary'>Profit</button></Link>
                    <Link to={'loss'}><button className='btn btn-sm btn-outline-primary'>Loss</button></Link>
                   
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Dashboard