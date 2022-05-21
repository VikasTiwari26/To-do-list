import React from 'react';
import { addTaskIcon, elipse } from '../../images';
import './Footer.css'
const Footer = (props) => {

    const { noOfItems, currentFilter, addTaskMode,handleAddTaskMode, hanldleFilter } = props

    const getCurrentActiveClass =(filter)=>{
        
    }

    return (
        <div className='footer' >
            <div className='options' >
                <div className='add-task' >
                    <img onClick={handleAddTaskMode} className={addTaskMode?"rotate-icon":"no-rotation"} src={addTaskIcon} />
                    <p>{noOfItems==1?`${noOfItems} item`:`${noOfItems} items`}</p>
                </div>
                <div className='filters' >
                    <img className={`elipse filter-${currentFilter}`} src={elipse} />
                    <p onClick={()=>hanldleFilter('all')} className={getCurrentActiveClass('all')} >All</p>
                    
                    <p onClick={()=>hanldleFilter('completed')} className={`mid-border ${getCurrentActiveClass('completed')}`} >Completed</p>

                    <p onClick={()=>hanldleFilter('remaining')} className={getCurrentActiveClass('remaining')} >Remaining</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;