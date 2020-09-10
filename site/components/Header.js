import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <>
      <div className="row pt-3 pb-3 headerRow">
        <div className="col-lg-1 ColA">PROFILE PAGE</div>
        <div className="col-lg-3 ColB">
          <div className="row">
            <div className="col-lg-10">
              <input
                type="text"
                className="w-100 "
                placeholder="search friend"
              />
            </div>
            <div className=" searchButton">
              <button className="btn searchIcon">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <a className="text-white"> Find Friend</a>
        </div>
        <div className="col-lg-3 ColC">
          <ul className="d-flex mb-0 ">
            <li>
         
              <button className="btn btnList">
                <PersonAddIcon />
                <span className="badge badge-primary badge-pill">9</span>
              </button>
            </li>
            <li>
              
              <button className="btn btnList">
                <ChatIcon />
                <span className="badge badge-primary badge-pill"> 3</span>
              </button>
            </li>
            <li>
           
              <button className="btn btnList">
                <NotificationsIcon />
                <span className="badge badge-primary badge-pill">14</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 ColE">
          <div className="myProfileCard d-flex align-items-center justify-content-center">
            <div className="profileImg">
              <span></span>
              <img src="./profile.jpg" />
            </div>
            <div className="userName ">
              <p>James Spiegel</p>
              <span>SPACE COWBOY</span>
            </div>
            <div>
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .row {
          color: white;
          align-items: center;
          text-align: center;
          background-color: #3f4257;
          padding: 0 0px 0 20px;
        }

        input {
          padding: 0 40px 0 10px;
          border-radius: 5px;
          height: 30px;
        }
        li {
          padding: 0 5px 0 5px;

          list-style-type: none;
        }
        .searchButton {
          position: absolute;
          right: 20%;
        }
        .btnList {
          color: white;
        }

        img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        .userName {
          line-height: 2px;
          padding: 0 10px 0 10px;
        }
        .userName span {
          font-size: 12px;
        }
      `}</style>
    </>
  );
};
export default Header;
