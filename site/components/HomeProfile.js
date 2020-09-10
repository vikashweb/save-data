import Link from 'next/link'

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import MenuIcon from "@material-ui/icons/Menu";
import ChatIcon from "@material-ui/icons/Chat";

const HomeProfile = () => {
  return (
    <>
      <div className="container  pt-3">
        <div className="row ProfileRoW">
          <div className="col-lg-2 profileImg">
            <img src="./profile.jpg" />
          </div>
          <div className="col-lg-4 profileUpdate">
            <ul>
              <li>
                <button className="btn">
                  <PersonAddIcon />
                </button>
              </li>
              <li>
                <button className="btn">
                  <ChatIcon />
                </button>
              </li>
              <li>
                <button className="btn">
                  <AddAPhotoIcon />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="profileNav bg-white row align-items-center">
          <div className="col-lg-3 profileName">
            <button className="btn ProfileButton">
              <h4>James Spiegel</h4>
              <br />
              <span>San Francisco, CA</span>
            </button>
            <br />
          </div>
          <div className="col-lg-2">
          <Link href="/">
            <button className="btn ">
              <span>Timeline</span>
            </button></Link>
          </div>

          <div className="col-lg-2">
        <Link href="/about">
        <button className="btn">
          <span>About</span>
        </button></Link>
      </div>

          <div className="col-lg-2">
          <Link href="/friends">
            <button className="btn">
              <span>Friends</span>
            </button></Link>
          </div>

          <div className="col-lg-2">
            <button className="btn">
              <span>Photos</span>
            </button>
          </div>

          <div className="col-lg-1">
            <button className="btn">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .profileImg{
          margin: 0 0 0 4%;
        }
        .profileImg img {
          width: 150px;
          border-radius: 50%;
          box-shadow: 1px 5px 4px 0px white;
        }

        ul {
          display: flex;
          align-items: center;
          list-style-type: none;
        }

        li button {
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          box-shadow: 1px 5px 4px 0px gray;
          margin: 0 5px 0 5px;
        }
        .ProfileRoW {
          justify-content: space-between;
          padding: 280px 0 0 0;
          background-image: url("bgtest.webp");
          border-radius: 5px;
          height: 400px;
          background-size: 100% 100%;
        }

        .profileUpdate {
          padding: 90px 0 0 0;
        }
        .profileName {
          text-align: center;
        }
        .ProfileButton {
          line-height: 5px;
          padding: 0 0 20px 0;
        }

        .profileNav {
          padding: 30px 0 0 0;
          border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
        }
      `}</style>
    </>
  );
};
export default HomeProfile;
