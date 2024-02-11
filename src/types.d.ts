export interface State {
    fromLanguage : string,
    toLanguage : string,
    userText: string,
    resultText: string,
    loading: boolean,
}

export type Action = {type: 'INTERCHANGE_LANGUAGES'}
    | {type: 'SET_FROM_LANGUAGES', payload : string}
    | {type: 'SET_TO_LANGUAGES', payload: string}
    | {type: 'SET_USER_TEXT', payload: string}
    | {type: 'SET_RESULT_TEXT', payload: string}