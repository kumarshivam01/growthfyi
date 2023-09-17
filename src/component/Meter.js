import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Meter = ({ bgColor, color, textColor, percentage }) => {

    

    return (
        <div className='m-auto'>
            <div style={{ width: 200, height: 200, backgroundColor: bgColor, borderRadius: '50%' }} className='m-auto'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,


                    // Text size
                    textSize: '18px',
                    fontWeight: 'bolder',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 3000,

                    // Colors
                    pathColor: color,
                    textColor: textColor,
                    trailColor: 'white',
                    backgroundColor: 'white',
                })} />
            </div>
                <p className='text-center font-semibold text-4xl'>Onpage Score</p>
                </div>
        
    )
}
