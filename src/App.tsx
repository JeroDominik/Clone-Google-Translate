import { useReducer } from "react"
import { type State, type Action } from "./types"

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
      fromLanguages: state.toLanguage,
      toLanguages: state.fromLanguage
    }
  }
  if(type === 'SET_FROM_LANGUAGES') {
    return {
      ...state,
      fromLanguages: action.payload
    }
  }
  if(type ==='SET_TO_LANGUAGES') {
    return {
      ...state,
      toLanguages: action.payload
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

function App() {

  const [{
    fromLanguage,
    toLanguage,
    userText,
    resultText,
    loading,
  }, dispatch] = useReducer(reducer, initialState)

  console.log(fromLanguage)
  return (
    <main className="">
      <h1 className="text-center pt-10 text-2xl">
        Google Translate
      </h1>
      <button onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGES', payload: 'es'})
      }}>Cambiar Idioma</button>
    </main>
  )
}

export default App
