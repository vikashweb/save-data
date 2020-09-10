import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const FullProfileInfo=()=>{
    return (
        <>
        <div className="cover p-3 bg-white">
         <h5 className="heading">Profile Info</h5>
         <hr/>
         <div className="InfoContainer ">
           <div className="sameRows row">
            <div className="col-4"> <h6> About ME:</h6> </div>
            <div className="col-8"> <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6>Birthday:</h6></div>
            <div className="col-8"> <span>July 2nd, 1997</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6> BirthPlace:</h6></div>
            <div className="col-8"><span>Ranikhet, Uttarakhand</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6> Lives in:</h6></div>
            <div className="col-8"><span>Noida, UP</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6>Occupation:</h6></div>
            <div className="col-8"><span>UI/UX Designer</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6>Status:</h6></div>
            <div className="col-8"><span>Single</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6>Email:</h6></div>
            <div className="col-8"><span>vickeyrawat111@gmail.com</span></div>

           </div>
           <div className="sameRows row">
            <div className="col-4"><h6>Phone Number:</h6></div>
            <div className="col-8"><span>9520653038</span></div>

           </div>
          
         </div>
         <br/>
         <div className="socialNetwork">
          <h6>Other socialNetwork:</h6>
          <button className=" FacebookBtn w-100 mt-3  text-white"><FacebookIcon/>Facebook </button>
          <button className="TwitterBtn w-100 mt-3  text-white"><TwitterIcon/> Twitter</button>
             

         </div>

        </div>
        <style jsx>{

            `  .TwitterBtn{
                background-color:rgb(29 161 242);
            }
            .FacebookBtn{
                background-color:rgb(66 103 178);
            }
            span{
                font-size:13px;
            }
            h6{
                font-size:13px;
         
            }
            .sameRows{
                padding:10px 0 10px 0;
            }
           
            `
        }</style>
        </>

    )
}
export default FullProfileInfo ;