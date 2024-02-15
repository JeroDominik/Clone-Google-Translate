import { type State, type Action, FromLanguage, Language } from "../types"
import { useReducer } from "react"

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  userText: '',
  resultText: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action
  if(type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguages: state.fromLanguage
    }
  }
  if(type === 'SET_FROM_LANGUAGES') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }
  if(type ==='SET_TO_LANGUAGES') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }
  if(type === 'SET_USER_TEXT') {
    return {
      ...state,
      loading: true,
      userText: action.payload,
      result: ''
    }
  }
  if(type === 'SET_RESULT_TEXT') {
    return {
      ...state,
      loading: false,
      resultText: action.payload
    }
  }

  return state
}


export function useLanguages ()  {

    const [{
      fromLanguage,
      toLanguage,
      userText,
      resultText,
      loading,
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    const setFromLanguages = (payload: FromLanguage) => dispatch( {type: 'SET_FROM_LANGUAGES', payload })
    const setToLanguages = (payload: Language) => dispatch( {type: 'SET_TO_LANGUAGES', payload })
    const setUserText = (payload: string) => dispatch( {type: 'SET_USER_TEXT', payload })
    const setResultText = (payload: string) => dispatch( {type:'SET_RESULT_TEXT', payload })

    return {
      fromLanguage,
      toLanguage,
      userText,
      resultText,
      loading,
      interchangeLanguages,
      setFromLanguages,
      setToLanguages,
      setUserText,
      setResultText
    }
}
