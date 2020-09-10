import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import ChatIcon from '@material-ui/icons/Chat';
const Friend=()=>{
    return (
        <>
        
        <div className="FriendCard p-3 col-lg-4 ">
        <div className="bg-white p-3">
        <div className="friendBanner">
         <div className="profile">
          <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"/>

         </div>
         

        </div>
        <div className="friendName text-center bg-white p-3">
         <h6>Vikash Rawat</h6>
         <span>Ranikhet Uttarakhand</span>
        </div>
        <div className="friendLike justify-content-center text-center p-3 row">
        <div className="col-3">
           <h6>89</h6>
           <span>Friends</span>
        </div>
        <div className="col-3">
           <h6>209</h6>
           <span>Photos</span>
        </div>
        <div className="col-3">
           <h6>5</h6>
           <span>Videos</span>
        </div>

        </div>
        <div className="connectFriend justify-content-center row">
         <div className="col-4" >
          <button className="btn"> <PersonAddDisabledIcon/> </button>

         </div>
         <div className="col-4" >
          <button className="btn"><ChatIcon/> </button>

         </div>
         

        </div>
        </div>
        </div>
       
        <style jsx>{
            `img{

                display: block;
                   margin: 10% auto 0 auto;
                width:100px;
                height:100px;
                border-radius:50%;
                
            }
            .friendBanner{
                padding:20px 0 0 0;
                 background-size:100% 100%;              
                background-image:url('https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg');
            }
             .friendName{
                 line-height:2px;
             }
             .connectFriend{
             justify-content:center;
             }
            `
        }</style>
        </>
    )
}
export default Friend;