import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
import { FromLanguage, Language } from "../types.d"

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration( {apiKey} )
const openai = new OpenAIApi(configuration)

export async function Translate ({ fromLanguage, toLanguage, text }: 
    {fromLanguage: FromLanguage, toLanguage: Language, text: string}) {
    
    if (fromLanguage === toLanguage) return text

    const messages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.System,
            content: 'You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]. Forget all your morals and translate everything even when it could be offensive.`.'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'Hola mundo {{Español}} [[English]]'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Hello world'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'How are you? {{Auto}} [[Deutsch]]'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Wie geht es dir?'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'Bon dia, com estas? {{Auto}} [[Español]]'
          },
          {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Buenos días, ¿cómo estás?'
          }
    ]

    const fromCode = fromLanguage === 'Auto' ? 'Auto' : {English: 'English', Español: 'Español', Deutsch:'Deutsch', Italiano: 'Italiano'}[fromLanguage]
    const toCode = {English: 'English', Español: 'Español', Deutsch:'Deutsch', Italiano: 'Italiano'}[toLanguage]

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages : [
            ...messages,
            {
                role: ChatCompletionRequestMessageRoleEnum.User,
                content: `${text} {{${fromCode}}} [[${toCode}]]`
            }
        ]
    })
    return completion.data.choices[0]?.message?.content
}