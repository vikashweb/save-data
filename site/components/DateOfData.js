import {useState} from 'react';


import { BsChevronBarExpand,BsChevronBarContract } from "react-icons/bs";

import { VscCalendar } from "react-icons/vsc";
import ListOnDate from './ListOnDate';
const DateOfData=(props)=>{
      const [downBtn,setDownBtn]=useState("block");
     const [upBtn,setUpBtn]=useState("none");
     const [showList,setShowList]=useState("none");
    return(
        
        <>
        <div className="date">
        <div className="dateBox row ">
         <div className=" dateIcon col-2 "><VscCalendar /></div>
         <div className="listDate col-10">
         <h6>{props.eventDate}</h6>
         <br/>
         <div className="listOnDate">
           <div className="row align-items-center">
           <div className="col-10">
             <ListOnDate name="ajay raawt" callTime="5:09" callDuration="15:40 min" incomeType="incommingCall"/>
             <ListOnDate name="sumit majhela" callTime="6:20" message="hello bhai kaha ho aajkal?" incomeType="message" callDuration={null}/>
             <div className="fullList">
             <ListOnDate  name="surash" callTime="8:09" callDuration="60:40 min" incomeType="outgoingCall"/>
             <ListOnDate name="sumit majhela" callTime="18:30" message="thoda padhai bhi kar liya karo" incomeType="message" callDuration={null} />
             <ListOnDate name="vikash rawat" callTime="18:30" message="kya haal chal h?" incomeType="message" callDuration={null} />
             
             </div>
             
             </div>
             <div className="col-2">
            <button className=" downButton btn" onClick={()=>{setDownBtn("none"); setUpBtn("block");setShowList("block")}}> <BsChevronBarExpand/></button>
               <button className="upButton btn"  onClick={()=>{setDownBtn("block"); setUpBtn("none");setShowList("none")}}> <BsChevronBarContract/></button>
             </div>
             </div>
             <hr/>
            
           
         </div>
         </div>

        </div>

          
        </div>
        <br/>
        <style jsx>{
            `.dateBox{
                position: relative;
            }
            .dateIcon{
                position: absolute;
                left: -10%;
                color:blue;
                background-color:white;
        
                
            } 
           

            .fullList{
                display:none;
            }
            .downButton{
                display:${downBtn};
                
               border:2px solid green;
                
            }
            .upButton{
                display:${upBtn};
            
                border:2px solid red;
                
            }
            .fullList{
                display:${showList}
            }
            .listDate h6{
                font-weight:bolder;
            }
             hr{
                 background-color:black;
                 height:1px;
             }
  
         }
           
            
            `
        }</style>
        </>
    )
}
export default DateOfData;