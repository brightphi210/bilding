import React from 'react'

const WorkerApplicationDes = ({isOpen, onClose, selectedData}) => {
    if (!isOpen) return null;
  return (
    <section className='modal-overlay-view'>
        <div className='modal-view'>
            <div className='modal-view-One'>
                <p>Company</p>
                <h3>{selectedData.project.owner.firstname} {selectedData.project.owner.lastname}</h3>
            </div>
            <div className='modal-view-Two'>
                <p>Project Details</p>
                <h2>{selectedData.project.title}</h2>
                <h4>{selectedData.project.categories}</h4>
                <h4>{selectedData.project.description}</h4>
                <h4>{selectedData.project.duration}</h4>
                <h4>{selectedData.project.experience}</h4>
                <h4>{selectedData.project.skills}</h4>

            </div>

            <div className='modal-view-Three'>
                <p>Application Details</p>
                <h4>{selectedData.applicationletter}</h4>
                <h4>{selectedData.duration}</h4>
                {/* <h4>Cv <a href="selectedData.images">Download</a></h4> */}
            </div>
            {console.log(selectedData)}
            <button onClick={onClose}>close</button>
        </div>
    </section>
  )
}

export default WorkerApplicationDes