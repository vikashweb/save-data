

import { AiFillMessage } from "react-icons/ai";
import { VscCallIncoming,VscCallOutgoing } from "react-icons/vsc";
const ListOnDate = (props) => {
   let v=null;
   switch(props.incomeType){
     case "incommingCall" : v=<VscCallIncoming/>; break;
     case "outgoingCall": v=<VscCallOutgoing/>; break;
     case "message":v=<AiFillMessage/>;break;
     default :v=null; 
   }
  

  
   
  return (
    
    <>
      <div className="content ">
        <div className="dateBox row align-items-center ">
          <div className=" dateIcon col-2 "> {props.callTime}</div>
          <div className="call-durationTime incommingCall col-1">
           {v}
          </div>
         
          <div className="col-8">
            <div className="datalist row">
              <div className="col-8">{props.name}</div>
              <div className="col-4"> {props.callDuration}</div>
            </div>

            <div className="call-duration message mt-3">
              <p> {props.message}</p>
            </div>
          </div>
        </div>
      </div>
      
      <br />

      <style jsx>{`
        .dateBox {
          position: relative;
        }
        .dateIcon {
          position: absolute;
          left: -38.9%;
          color: green;
          font-weight:bolder;
        }
        .message p {
          font-size: 14px;
        }
        .call-durationTime {
          
          position: absolute;
          left: -55px;
          color: green;
          background-color:white;
        
        }
        .content{
      
        
          box-sizing:border-box;
          padding:10px;
          border-radius:5px;
          color:green;
        }
      `}</style>
    </>
  );
};
export default ListOnDate;
