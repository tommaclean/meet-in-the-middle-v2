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
      <PastMeetups />
    </div>
  );
}

export default Tabs;