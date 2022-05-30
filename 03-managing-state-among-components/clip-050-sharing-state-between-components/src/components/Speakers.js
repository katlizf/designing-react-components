// Keeping state close to where it's used: Speakers.js between App.js and SpeakersTollbar.js

import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

function Speakers({ data, theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList data={data} showSessions={showSessions} />
    </>
  );
}

export default Speakers;
