import BlogPost from './BlogPost';
const LatestUpdate = () => {
  return (
    <>
      <div className="CoverLatest">
        <div className="latestPhotos p-3  bg-white">
          <h5>Last Photos</h5>
          <hr />
          <div className="photogrid">
            <div className="row pt-3">
              <div className="col-4">   <img src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"/>   </div>
            
              <div className="col-4"> <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/></div>
              <div className="col-4"> <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"/></div>
            </div>
            <div className="row pt-3">
              <div className="col-4"> <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"/></div>
              <div className="col-4"> <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg"/></div>
              <div className="col-4"> <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"/></div>
            </div>
            <div className="row pt-3">
              <div className="col-4"> <img src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg"/></div>
              <div className="col-4"> <img src="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg"/></div>
              <div className="col-4"><img src="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"/></div>
            </div>
          </div>
        </div>
        <br/>
        <div className="BlogPosts p-3   bg-white">
        <h5>Blog Posts</h5>
        <hr/>
         <BlogPost/>
         <BlogPost/>
        

         

        </div>
      </div>
      <style jsx>{
          `img{
              width:60px;
              height:60px;

          }
          .photogrid{
              padding:10px;
          }
          `
      }</style>
    </>
  )
};
export default LatestUpdate;