import Header from '../components/Header';
import HomeProfile from '../components/HomeProfile';
import FullProfileInfo from '../components/about/FullProfileInfo';
import Hobbies from '../components/about/Hobbies'
const about=()=>{
    return(
        <>
         <div className="container-fluid ">
        <Header/>
        <HomeProfile/>
        <div className="container  pt-3 ">
         <div className="row ">
         <div className="profileInfo pl-0 col-lg-4">
           <FullProfileInfo/>
         </div>
         <div className="hobbies col-lg-8">
            <Hobbies/>
             </div>
        </div>
        </div>
        </div>
         
         
          
        </>
    )
}
export default about;