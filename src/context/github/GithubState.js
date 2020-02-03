import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

export const GithubState = ({ children }) => {
    const inintialState = {
        user: {},
        users: [],
        loading: false,
        repos: []

    }
    const [state, dispatch] = useReducer(githubReducer, inintialState)
    const search = async value => {
        setLoading()
        //...
        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUser = async value => {
        setLoading()
        //...
        dispatch({
            type: GET_USER,
            payload: {}
        })
    }


    const getRepos = async value => {
        setLoading()

        //...
        dispatch({
            type: GET_REPOS,
            payload: []
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { user, users, repos, loading } = state
    return (
        <GithubContext.Provider value={{
            setLoading, search, getRepos, getUser, clearUsers
        }} >
            {children}
        </GithubContext.Provider>
    )
}