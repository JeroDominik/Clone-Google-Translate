import { type State, type Action, FromLanguage, Language } from "../types.d"
import { useReducer } from "react"

const initialState: State = {
  fromLanguage: 'Auto',
  toLanguage: 'English',
  userText: '',
  resultText: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action
  if(type === 'INTERCHANGE_LANGUAGES') {
    if(state.fromLanguage === 'Auto') return state
    const loading = state.userText !== ''

    return {
      ...state,
      loading,
      resultText: '',
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if(type === 'SET_FROM_LANGUAGES') {
    if(state.fromLanguage === action.payload) return state
    const loading = state.userText !== ''

    return {
      ...state,
      fromLanguage: action.payload,
      resultText: '',
      loading
    }
  }
  if(type ==='SET_TO_LANGUAGES') {
    if(state.toLanguage === action.payload) return state
    const loading = state.userText !== ''

    return {
      ...state,
      toLanguage: action.payload,
      resultText: '',
      loading
    }
  }
  if(type === 'SET_USER_TEXT') {
    const loading = action.payload !== ''
  
    return {
      ...state,
      loading,
      userText: action.payload,
      resultText: ''
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
