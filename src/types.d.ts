export type Language = 'English' | 'Español' | 'Deutsch'  | 'Italiano'

export type AutoLanguage = 'Auto'

export type FromLanguage = AutoLanguage | Language

export interface State {
    fromLanguage : FromLanguage,
    toLanguage : Language,
    userText: string,
    resultText: string,
    loading: boolean,
}

export type Action = {type: 'INTERCHANGE_LANGUAGES'}
    | {type: 'SET_FROM_LANGUAGES', payload : FromLanguage}
    | {type: 'SET_TO_LANGUAGES', payload: Language}
    | {type: 'SET_USER_TEXT', payload: string}
    | {type: 'SET_RESULT_TEXT', payload: string}