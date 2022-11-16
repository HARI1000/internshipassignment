import React,{useState} from 'react';
import "./App.css";

function Refer() {
const rfrlcode="E D C H 5 4";
  const balance="500";
  const rfrlearnings="2500";
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
            <li><a style={{ display: toogle? "block" : "none" }} className="prpl myas"  href="#">My Assignment</a></li>
            <li><a style={{ display: toogle? "block" : "none" }} className="prpl chtmntr" href="#">Chat with Mentor</a></li>
            <li onClick={call}>
              <a className="prpl prflnm" href="#"><i class="fa-regular fa-user"></i> Profile Name <i class="fa-solid fa-caret-down"></i></a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="scndrow">
        <p><a href="#"> UI/UX </a>{'>'} <a href="rfr">Refer&Earn </a></p>
      </div>

      <div className='thrrdrow'>
            <div className='Account'>
                <div class="acc1rw">
                    <div>
                        <p className='prpl'>Referral Earning</p>
                        <h2>{rfrlearnings}</h2>
                    </div>
                    <div>
                        <p className='prpl'>Total Referrals</p>
                        <h2>7</h2>
                    </div>
                    <div>
                        <p className='prpl'>Wallet Balance</p>
                        <h2>{balance}</h2>
                    </div>
                    <button className='wdrwbln'>Withdraw Balance</button>
                </div>
                
            </div>
            <div className='rfrlcode'>
                <h2 className='prpl'>Your Referral Code</h2>
                <div className='code'>
                    <p className='prpl spc'>{rfrlcode}</p>
                </div>
            </div>
        </div>
        <div className='frthrow'>
            <h3>How does it work?</h3>
            <div className='fourthrw'>
                <div className="picinfo">
                    <div className='Icon'>
                    <i className="fa-solid fa-users"></i>
                    </div>
                    <div className='info'>
                        <h5>Invite your Friends</h5>
                        <p>Share the link tutedude.com with your friends</p>
                    </div>
                </div>
                <div className="picinfo">
                    <div className='Icon' >
                    <i class="fa-solid fa-tag"></i>
                    </div>
                    <div className='info'>
                        <h5>Friend purchase any course</h5>
                        <p>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className="picinfo">
                    <div className='Icon'>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    </div>
                    <div className='info'>
                        <h5>You get $200 as referral money</h5>
                        <p>On total purchase the friend makes,into your wallet</p>
                    </div>
                </div>
                <div className="picinfo">
                    <div className='Icon'>
                    <img src="badge.png" />
                    
                    </div>
                    <div className='info'>
                        <h5>Your Friend gets 200 Off</h5>
                        <p>On his overall fee on successfull purchase using your referral code</p>
                    </div>
                </div>
                <div className="picinfo">
                    <div className='Icon'>
                    <i class="fa-solid fa-wallet"></i>
                    </div>
                    <div className='info'>
                        <h5>Transfer money from wallet</h5>
                        <p>When the wallet balance reahes 200 or more you can Withdraw it</p>
                    </div>
                </div>
                </div>
            
        
        </div>

        <div className="endcrd">
            <a href="/frndsrfl" className='prpla'>Freinds Who Enrolled</a>
            <h4 className="prpl">Terms & Conditions</h4>
        </div>
    </div>
    
  )
}

export default Refer;