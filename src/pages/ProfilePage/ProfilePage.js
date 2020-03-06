import React from "react";
import { Tabs } from "@feuer/react-tabs";
import PastMeetups from "../../containers/PastMeetups/PastMeetups";
import FavMeetups from "../../containers/FavMeetups/FavMeetups";
import Header from "../../components/UI/Header/Header";
 
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
 
const ProfilePage = () => (
  <div style={styles}>
    <Header />
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Past Meetups">
        <div style={{ padding: 10 }}>
          <PastMeetups />
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Favorite Meetups">
        <div style={{ padding: 10 }}>
          <FavMeetups />
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>
);

export default ProfilePage