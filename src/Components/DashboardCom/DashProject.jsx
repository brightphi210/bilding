import React from 'react'
import './dashProject.css'
const DashProject = () => {
  return (
    <div>
        <section className='dashProjectSectionGen'>
            <h2>My Projects</h2>

            <div className='dashProjectSectionDiv'>
                <ul className='dashProjectONE'>
                    <li>ALL</li>
                    <li>Active</li>
                    <li>Complete</li>
                    <li>drafts</li>
                    <li>1 - 3 of 3</li>
                </ul>
                <hr />


                <ul className='dashProjectTWO'>
                    <div>
                        <li>Electrician to wire a building in Asaba.</li>
                        <span>Created 2 days ago.</span>
                    </div>

                    <div>
                        <li>Applications</li>
                        <span>0</span>
                    </div>

                    <div>
                        <li>Hired</li>
                        <span>15</span>
                    </div>
                    <button className='view'>View</button>
                </ul>
                <hr />


                <ul className='dashProjectTWO'>
                    <div>
                        <li>Electrician to wire a two storey building in...</li>
                        <span>Created 2 days ago.</span>
                    </div>

                    <div>
                        <li>Applications</li>
                        <span>0</span>
                    </div>

                    <div>
                        <li>Hired</li>
                        <span>15</span>
                    </div>
                    <button className='view'>View</button>
                </ul>
                <hr />


                <ul className='dashProjectTWO'>
                    <div>
                        <li>Electrician to wire a building in Asaba.</li>
                        <span>Created 2 days ago.</span>
                    </div>

                    <div>
                        <li>Applications</li>
                        <span>0</span>
                    </div>

                    <div>
                        <li>Hired</li>
                        <span>15</span>
                    </div>
                    <button className='view'>View</button>
                </ul>
                <hr />
            </div>
        </section>
    </div>
  )
}

export default DashProject