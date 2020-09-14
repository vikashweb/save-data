import { useQuery } from "@apollo/client";
import { AllPosts } from "../graphql/AllPosts";
import { GroupBy } from "lodash";

import DateOfData from "./DateOfData";

const Post = () => {
  var dateOfData =[];
  const { loading, error, data } = useQuery(AllPosts);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error to fatch data from server.</p>;

  // logs gruped by date
  const groupedLogs = { ..._.groupBy(data.allTimelines, "eventDate") };

  let vikka = Object.values(groupedLogs);

  for (var i=0; i <= vikka.length- 1; i++) {
     console.log(i);
    dateOfData[i] = vikka[i].map((cl) => {
 
      if (cl.eventType === "call") {
        return (
          <DateOfData
            eventDate={cl.eventDate}
            name={cl.call.name}
            callTime={cl.call.callTime}
            callDuration={cl.call.callDuration}
            incomeType={cl.call.incomeType}
            message={cl.message}
            key={cl.name}
          />
        );
      }
      if (cl.eventType === "message") {
        return (
          <DateOfData
            eventDate={cl.eventDate}
            name={cl.message.name}
            callTime={cl.message.messageTime}
            callDuration={cl.call}
            incomeType={cl.message.messageIcon}
            message={cl.message.message}
            key={cl.name}
          />
        );
      }
    });
  }

  return (
    <>
      <div className="Time-line bg-white p-3 ">
        <div className=" timeline row   ">
          <div className="col-1">
            <hr className="vertical-line" />
          </div>
          <div className="col-11 p-3">{dateOfData}
          </div>
        </div>
      </div>

      <br />
      <style jsx>{`
        .vertical-line {
          width: 4px;

          height: 100%;
          background-color: rgb(245, 114, 66);
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
