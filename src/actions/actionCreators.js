export const getMeetupsSuccess = (searchResults) => (
  { type: "GET_SEARCH_RESULTS_SUCCESS", searchResults: searchResults }
)
export const getMeetupsFailure = (error) => {
  return { type: "GET_SEARCH_RESULTS_FAILURE", error: error }