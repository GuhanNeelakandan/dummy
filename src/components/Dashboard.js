import React from 'react'

function Dashboard() {
    const list = [
        {
          name: "Monthly Saving",
          color: "primary"
        },
        {
          name: "Yearly Saving",
          color: "warning"
        },
        {
          name: "Total Saving",
          color: "info"
        },
      ]
    return (
        <div className='container'>
            <div className='row'>
                {
                    list.map((item) => {
                        return <div className='col-4'>
                            <div class="card" style={{ width: "18rem" }}>
                                <div class={`card-body  border border-${item.color}`}>
                                    <h5 class={`card-title text-${item.color}`}>{item.name}</h5>
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
        </div>
    )
}

export default Dashboard