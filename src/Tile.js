import React from 'react'
import "./App.css";
function Tile({data}) {
    
    let crs=data.courses;
  return (
    <div className='tile'>
        <div className="tilehd">
            <h3>{data.name}</h3>
            <p>{data.date}</p>
        </div>
        <p>Courses Enrolled ({data.cno})</p>
        <div className='crstl'>
            {crs.map((i)=>{
                return(<div className="itl">{i}</div>)
            })  
            }
        </div>
        <h4>Referral Amount <b>{data.rfrlamnt}</b></h4>
    </div>

  )
}

export default Tile