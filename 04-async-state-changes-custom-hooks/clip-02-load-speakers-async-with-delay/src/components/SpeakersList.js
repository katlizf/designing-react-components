import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// set delay for render

  useEffect(() => {
    async function delayFunc() {
      await delay(2000);
      setSpeakersData(data);
    }
    delayFunc();
  }, []);

//   ending with [] so it only runs on initial render

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
