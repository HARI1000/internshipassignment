import React,{useState} from 'react'
import Tile from "./Tile";
import "./App.css";
function Friendsrfrl() {
  const datas=[{"name":"Dhiraj Saxsena","date":"14 Sep,2022","cno":6,"courses":["UI/UX","Photoshop","Illustrator"," Python","MERN","Java"],"rfrlamnt":185},{"name":"Subash Mishra","date":"14 Sep,2022","cno":23,"courses":["UI/UX","Photoshop","Illustrator"," Python","MERN","Java","c++","c","bootstrap","javascript"],"rfrlamnt":485},{"name":"Prafull Kumar","date":"14 Sep,2022","cno":23,"courses":["UI/UX","Photoshop","Illustrator"," Python","MERN","Java"],"rfrlamnt":485}];
  const rfrlcode="E D C H 5 4";
  const balance="500";
  const frndno="3";
  const [toogle,setToogle]=useState(true);  
  
  function call()
  {if(window.innerWidth<480)
    {if(toogle===false)
      {console.log("false->true");
        
        setToogle(true);
      }
      else{
        console.log('true->false');
      setToogle(false);
      }
    }
  }
  return (
    <div>
        <div className="navbar">
        <nav >
          <img src="logo.png" alt="none"/>
          <ul className="nav">
            <li ><a style={{ display: toogle? "block" : "none" }} className="prpl myas" href="#">My Assignment</a></li>
            <li ><a style={{ display: toogle? "block" : "none" }} className="prpl chtmntr" href="#">Chat with Mentor</a></li>
            <li onClick={call}>
              <a className="prpl prflnm" href="#"><i class="fa-regular fa-user"></i> Profile Name <i class="fa-solid fa-caret-down"></i></a>
            </li>
          </ul>
        
        </nav>
      </div>
      
      <div className="scndrow">
        <p><a href="#"> UI/UX </a>{'>'} <a href="rfr">Refer&Earn </a> {'>'} <a href="/frndsrfl"> Freinds Referred </a></p>
      </div>

      <div className="thrdrow">
        <div className="rfrl">
            <p className="prpl">Your Referral Code</p>
            <div className="codebox">
              <p>{rfrlcode}</p>
            </div>
        </div>
        <div className="balance">
              <p className="prpl">Wallet Balance</p>
              <p>{balance}</p>
        </div>
      </div>

      <div className="frthrow">
        <h3>Freinds who enrolled <span className="gry">({frndno})</span></h3>
        <div className="tilediv">
            {
              datas.map((p)=>{
                return(<Tile data={p}/>)
              })
            }
        </div>
      </div>
      <div className="endcrd">
        <h4 className="prpl">Terms & Conditions</h4>
      </div>
    </div>
  )
}

export default Friendsrfrl