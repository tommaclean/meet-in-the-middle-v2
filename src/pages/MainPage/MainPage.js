import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Map from '../../components/Map/Map'
import Header from '../../components/UI/Header/Header';
import SearchPane from '../../containers/SearchPane/SearchPane'
import { handleLogOut } from '../../state/actions/userActions'
import './MainPage.css'


const MainPage = (props) => {
        const history = useHistory();
        
        if (!props.loggedIn) {
          history.push('/login')
        }
        

        return (
            <div className="MainPage-header">
              <Header />
              <SearchPane />
              <Map />
            </div>
        )
}

const mapStateToProps = state => {
  return {
      loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = {
  handleLogOut: handleLogOut
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);