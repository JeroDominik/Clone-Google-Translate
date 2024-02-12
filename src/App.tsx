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

function App() {

  const [{
    fromLanguage,
    // toLanguage,
    // userText,
    // resultText,
    // loading,
  }, dispatch] = useReducer(reducer, initialState)


  return (
    <main className="">
      <h1 className="text-center pt-10 text-2xl">
        Google Translate
      </h1>
      <button className="border rounded-xl bg-sky-300 mr-6 p-2"
        onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGES', payload: 'es' })
      }}>Cambiar Idioma</button>
      {fromLanguage}
    </main>
  )
}

export default App
