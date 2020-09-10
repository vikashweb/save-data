import Header from '../components/Header';
import HomeProfile from '../components/HomeProfile';
import Friend from '../components/Friend';

import SearchIcon from "@material-ui/icons/Search";

const friend=()=>{
    return (
   <>
   <div className="container-fluid ">
   <Header/>
   <HomeProfile/>
    <div className="container pt-3">
     <div className="friendSearch row bg-white p-3 align-items-center">
     <div className="col-lg-8">
      <h6>vikash's friends(89)</h6>
     </div>
     <div className="col-lg-4">
       <div className="row align-items-center justify-content-end">
       <div className="col-8">       <input type="text" className="searchFriends" placeholder="Search Friends"/></div>
       <div className="col-2 searchBtn"> <button className="btn "><SearchIcon/></button></div>

       </div>
     </div>

     </div>
     <div className="friends pt-3">
      <div className="row justify-content-between ">
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
      </div>
         
         </div>
      
    </div>

   </div>
   <style jsx>{
   `.searchFriends{
       padding:0 13% 0 3px;
       border-radius:5px;
       height:40px;
       border:1px solid gray;
   }
   .searchBtn{
       position:absolute;
       right:6%;
      
   }
   
   `
     
   }</style>
   </>
    )
}
export default friend;