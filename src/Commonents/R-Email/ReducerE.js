import React, {useReducer, useEffect} from 'react'

const ACTION_TYPES = {
    EMAIL: "EMAIL",
    FIRST_NAME: "FIRST_NAME",
    LAST_NAME: "LAST_NAME"
}

const initState = {
    firstName: "",
    lastName: "",
    email: ""
}

function reducer(state, action) {
  switch(action.type) {
      case ACTION_TYPES.EMAIL:
          return {
              ...state,
              email: action.payload
          };
          case ACTION_TYPES.FIRST_NAME:
              return {
                  ...state,
                  firstName: action.payload
              };
              case ACTION_TYPES.LAST_NAME:
                  return {
                      ...state,
                      lastName: action.payload
                  };
                  default:
                      return state
  }
}

function ReducerE() {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect (()=> {
        console.log({state});
    },[state])

    const onFirstNameChange = e => 
    dispatch({ type: ACTION_TYPES.FIRST_NAME, payload: e.target.value})

    const onLastNameChange = e => 
    dispatch({ type: ACTION_TYPES.LAST_NAME, payload: e.target.value})

    const onEmailChange = e => 
    dispatch({ type: ACTION_TYPES.EMAIL, payload: e.target.value})


    return (
        <div>
            <input
             onChange={onFirstNameChange}
              value={state.firstName}
               placeholder="first Name" />

            <input onChange={onLastNameChange} value={state.lastName} placeholder="lastName" />
            <input onChange={onEmailChange} value={state.email} placeholder="email" />
        </div>
    )
}

export default ReducerE
