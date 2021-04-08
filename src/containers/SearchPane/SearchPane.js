import React, { useEffect, useRef } from 'react'
import useToggle from '../../snippets/useToggle'
import { connect } from 'react-redux'
import FormInput from '../../components/UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import SelectedLocation from '../../components/SelectedLocation/SelectedLocation'
import { handleAddressSubmit, clearSearchResults } from '../../state/actions/searchResultsActions'
import { TweenLite, Power3 } from 'gsap'
import './SearchPane.css'


const SearchPane = (props) => {
  let searchResultsDiv = useRef(null)
  let formInputDiv = useRef(null)
  let selectedLocationDiv = useRef(null)
  
  
  const [showFormInput, toggleFormInput] = useToggle(true)
  
    useEffect(() => {
        if (!showFormInput || props.showSelectedLocation) {
          TweenLite.to(selectedLocationDiv, {
            autoAlpha: 1
          })
        } else {
          TweenLite.to(selectedLocationDiv, {
            autoAlpha: 0
          })
        } 
  
        }, [props.showSelectedLocation])

        const handleFormInputTransition = () => {
          toggleFormInput()
          slideInputLeft()
          fadeInSearchResults()
        }

        const fadeInSearchResults = () => {
          TweenLite.to(searchResultsDiv, 1.2, {
            autoAlpha: 1, display: 'block'
          })
          if (selectedLocationDiv) {
            TweenLite.to(searchResultsDiv, 1, {
              autoAlpha: 0
            })
          }
        }

        const handleBackToAddresses = () => {
          toggleFormInput()
          slideInputRight()
          fadeOutSearchResults()
          props.clearSearchResults()
        }

        const fadeOutSearchResults = () => {
          TweenLite.to(searchResultsDiv, 1, {
            autoAlpha: 0
          })
          if (selectedLocationDiv) {
            TweenLite.to(selectedLocationDiv, 1, {
              autoAlpha: 0
            })
          }
        }
        const slideInputLeft = () => {
          console.log("slideInputLeft")
          TweenLite.to(formInputDiv, .5, {
            autoAlpha: 0
          })
        }

        const slideInputRight = () => {
          console.log("slideInputRight")
          TweenLite.to(formInputDiv, 1, {
            autoAlpha: 1
          })
        }

    
        // console.log("SearchPane props: ", props)
        
        return (
          <div className="searchResultsMain">
            <div className="formInputDiv" ref={el => (formInputDiv = el)}>
              {showFormInput ? 
              <FormInput handleAddressSubmit={props.handleAddressSubmit} handleFormInputTransition={() => handleFormInputTransition()}/> : null }
              
            </div>
            <div className="selectedLocationDiv" ref={el => (selectedLocationDiv = el)}>
              {props.showSelectedLocation ? <SelectedLocation /> : null }
            </div>
            <div className="searchResultsDiv" ref={el => (searchResultsDiv = el)}>
              {props.showSearchResults ? <SearchResults handleBackToAddresses={() => handleBackToAddresses()}/> : null }
            </div>
          </div>
        )
}


const mapDispatchToProps = {
  handleAddressSubmit: handleAddressSubmit,
  clearSearchResults: clearSearchResults
}

const mapStateToProps = state => {
  return {
    showFormInput: state.searchResults.showFormInput,
    showSelectedLocation: state.searchResults.showSelectedLocation,
    showSearchResults: state.searchResults.showSearchResults
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchPane)