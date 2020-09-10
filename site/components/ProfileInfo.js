import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const ProfileInfo=()=>{
    return(
        <>
        <div className="profileCover bg-white  p-3">
         <h5>Profile Info</h5>
         <hr/>
         <div className="infoBox pt-3">
          <h6>About me:</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
             
         </div>
         <div className="infoBox"> 
         <h6>Favourite TV Shows:</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
             
         </div>
         <div className="infoBox">
         <h6>Favourite Music Brand</h6>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
             
         </div>
         <div className="infoBox">
         <h6>Other Social Network</h6>
          <button className=" FacebookBtn w-100 mt-3  text-white"><FacebookIcon/>Facebook </button>
          <button className="TwitterBtn w-100 mt-3  text-white"><TwitterIcon/> Twitter</button>
             
         </div>
         <hr/>

        </div>
        <style jsx>{

            `.FacebookBtn{
                background-color:rgb(66 103 178);
            }
            p{
                font-size:13px;
            }
            .TwitterBtn{
                background-color:rgb(29 161 242);
            }
                
          
            
            `
        }</style>
        </>
    )
}
export default ProfileInfo;