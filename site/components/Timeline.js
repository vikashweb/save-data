import ProfileInfo from './ProfileInfo';
import LatestUpdate from './LatestUpdate';
import Post from './Post';
const Timeline=()=>{
    return(
        <>
        <div className="TimelineCover container">
         <div className="TimelineRow row justify-content-between ">
         <div className="TimelineLeft col-lg-3 ">
           <ProfileInfo/>
         </div>
         <div className="TimelineCol col-lg-6">
         <Post />
      
         
         </div>
         <div className="TimelineRight col-lg-3">
         <LatestUpdate/>

         </div>

         </div>
        </div>
        <style jsx>{
            `*{
                box-sizing:border-box;
            }
            .TimelineCover{
              
                padding:20px 0 0 0;
            }
            
            `
        }</style>
        </>
    )
}
export default Timeline;