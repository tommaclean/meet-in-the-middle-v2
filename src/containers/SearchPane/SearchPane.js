import React, { useEffect, useRef } from 'react'
import useToggle from '../../snippets/useToggle'
import { connect } from 'react-redux'
import FormInput from '../../components/UI/FormInput/FormInput';
import SearchResults from '../SearchResults/SearchResults'
import { handleAddressSubmit, clearSearchResults } from '../../state/actions/searchResultsActions'
import { TweenLite } from 'gsap'
import './SearchPane.css'


const SearchPane = (props) => {
  let searchResultsDiv = useRef(null)
  let formInputDiv = useRef(null)
  
  
  
  const [showFormInput, toggleFormInput] = useToggle(true)
  
    useEffect(() => {
        if (!props.showFormInput || !showFormInput) {
          TweenLite.to(formInputDiv, {
            autoAlpha: 0, display: "block"
          })
        } else {
          TweenLite.to(formInputDiv, {
            autoAlpha: 1, display: "block"
          })
        } 
  
        }, [props.showFormInput, showFormInput])

        const handleFormInputTransition = () => {
          toggleFormInput()
          slideInputLeft()
          fadeInSearchResults()
        }

        const fadeInSearchResults = () => {
          TweenLite.to(searchResultsDiv, 1.2, {
            autoAlpha: 1, display: 'block'
          })
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
        }

        const slideInputLeft = () => {
          
          TweenLite.to(formInputDiv, 1, {
            display: "none"
          })
        }

        const slideInputRight = () => {
         
          TweenLite.to(formInputDiv, 1, {
            autoAlpha: 1
          })
        }

    
    
        
        return (
          <div className="searchResultsMain">
            <div className="formInputDiv" ref={el => (formInputDiv = el)}>
              {props.showFormInput ? 
              <FormInput handleAddressSubmit={props.handleAddressSubmit} handleFormInputTransition={() => handleFormInputTransition()}/> : null }
              
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