import React, { useEffect } from "react";

import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Tabs } from "@feuer/react-tabs";
import PastMeetups from "../../containers/PastMeetups/PastMeetups";
import FavMeetups from "../../containers/FavMeetups/FavMeetups";
import Header from "../../components/UI/Header/Header";
 
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
 
const ProfilePage = () => {
  let history = useHistory()
  let activeTab = {id: "tab1"}
  useEffect(() => {
    if (!localStorage.token) {
        history.push('/login')
    }
  }, [localStorage.token])
  
  return (
    <div style={styles}>
    <Header />
    <Tabs
      activeTab={activeTab}
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
        )
}

const mapStateToProps = state => {
  return {
    markers: state.searchResults.searchResults,
    midpoint: state.searchResults.midpoint
  }
}

// export default connect(mapStateToProps, null)(ProfilePage)
export default ProfilePage