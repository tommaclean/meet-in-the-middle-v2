import { useState } from "react";
import "./ProfilePage.css";
import PastMeetups from "../../containers/PastMeetups/PastMeetups";
import FavMeetups from "../../containers/FavMeetups/FavMeetups";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Past Meetups
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Favorite Meetups
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <PastMeetups />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <FavMeetups />
        </div>
      </div>
    </div>
  );
}

export default Tabs;