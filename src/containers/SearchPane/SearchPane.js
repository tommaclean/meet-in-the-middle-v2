import React, { useEffect, useRef } from 'react'
import useToggle from '../../snippets/useToggle'
import { connect } from 'react-redux'
import FormInput from '../../components/UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import SelectedLocation from '../../components/SelectedLocation/SelectedLocation'
import { handleAddressSubmit } from '../../state/actions/searchResultsActions'
import { TweenLite, Power3 } from 'gsap'
import './SearchPane.css'


const SearchPane = (props) => {
  let searchResultsDiv = useRef(null)
  let formInputDiv = useRef(null)
  let selectedLocationDiv = useRef(null)
  console.log(props)
  
  
  const [showFormInput, toggleFormInput] = useToggle(true)
  
    useEffect(() => {
    
  
        }, [props.showSelectedLocation])

        const handleFormInputTransition = () => {
          toggleFormInput()
          slideInputLeft()
          fadeInSearchResults()
        }

        const fadeInSearchResults = () => {
          TweenLite.to(searchResultsDiv, 1.2, {
            opacity: 1, display:'block', delay: .5
          })
          if (selectedLocationDiv) {
            TweenLite.to(searchResultsDiv, 1, {
              opacity: 0, display: 'block'
            })
          }
        }

        const handleBackToAddresses = () => {
          toggleFormInput()
          console.log(showFormInput)
          slideInputRight()
          fadeOutSearchResults()
        }

        const fadeOutSearchResults = () => {
          TweenLite.to(searchResultsDiv, 1, {
            opacity: 0, display: 'none'
          })
          if (selectedLocationDiv) {
            TweenLite.to(selectedLocationDiv, 1, {
              opacity: 0, display: 'none'
            })
          }
        }
        const slideInputLeft = () => {
          console.log("slideInputLeft")
          TweenLite.to(formInputDiv, .5, {
            opacity: 0
          })
        }

        const slideInputRight = () => {
          console.log("slideInputRight")
          TweenLite.to(formInputDiv, 1, {
            opacity: 1
          })
        }

    

        
        return (
          <div className="searchResultsMain">
            <div className="formInputDiv" ref={el => (formInputDiv = el)}>
              <FormInput handleAddressSubmit={props.handleAddressSubmit} handleFormInputTransition={() => handleFormInputTransition()}/>
            </div>
            <div className="selectedLocationDiv" ref={el => (selectedLocationDiv = el)}>
              {props.showSelectedLocation ? <SelectedLocation showSelectedLocation={props.showSelectedLocation}/> : null }
            </div>
            <div className="searchResultsDiv" ref={el => (searchResultsDiv = el)}>
              {props.showSearchResults ? <SearchResults handleBackToAddresses={() => handleBackToAddresses()}/> : null }
            </div>
          </div>
        )
}


const mapDispatchToProps = {
  handleAddressSubmit: handleAddressSubmit
}

const mapStateToProps = state => {
  return {
    showSelectedLocation: state.searchResults.showSelectedLocation,
    showSearchResults: state.searchResults.showSearchResults
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPane)