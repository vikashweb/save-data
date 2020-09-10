import {useQuery}  from '@apollo/client';
import {AllPosts} from '../graphql/AllPosts';

import DateOfData from "./DateOfData";

const Post = () => {

  //let DateOfData=null;
    const { loading, error, data } = useQuery(AllPosts);
    if(loading) return <p>Loding ...</p>;
    if (error) return <p>Error to fatch data from server.</p>;
      
 // DateOfData=data.
   
    



  return (
    <>
      <div className="Time-line bg-white p-3 ">
        <div className=" timeline row   ">
          <div className="col-1">
            <hr className="vertical-line" />
          </div>
          <div className="col-11 p-3">
            <DateOfData eventDate="20,August 2020" />
            <DateOfData eventDate="19,August 2020" />
          </div>
        </div>
      </div>
      
      <br />
      <style jsx>{`
        .vertical-line {
          width: 4px;

          height: 100%;
          background-color: rgb(245, 114, 66 );
        }
        .timeline {
          padding: 0 0 0 60px;
        }
        .col-1 {
          padding-top: 5px;
        }
      `}</style>
    </>
  );
};
export default Post;
