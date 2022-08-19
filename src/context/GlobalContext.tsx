import React, { useReducer, useContext, createContext } from "react"

type IProps = {
  children: React.ReactNode
}

type IContext = {
  language?: string
  setLanguage: (language: string) => void
}

type IAction = {
  type: string
  payload: any
}

const initialState = {
  language: process.env.REACT_APP_LANGUAGE,
  setLanguage: () => { }
}

const GlobalContext = createContext<IContext>(initialState)

const reducer = (state: IContext, { type, payload }: IAction) => {
  switch (type) {
    case "SET_LANGUAGE": {
      return {
        ...state,
        language: payload
      }
    }
    default:
      return state
  }
}

const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const _handleChangeLanguage = (language: string) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: language
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLanguage: _handleChangeLanguage
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider, useGlobalContext }
