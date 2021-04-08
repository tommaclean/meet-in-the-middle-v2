import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import {getMeetups, actions} from "./meetupsActions";

const store = configureMockStore([thunk])({
    meetups: []
})

describe('meetupActions', () => {
    it('should fetch data and update the store with getMeetups', async () => {
        fetchMock.getOnce('http://localhost:3000/meetups', {
            headers: { "Authorization": localStorage.token },
            body: [{ title: 'title' }],
        })

        await store.dispatch(getMeetups());

        expect(store.getActions()).toEqual([{
            type: actions.GET_MEETUPS_SUCCESS,
            meetups: [{ title: 'title' }]
        }])
    })
})