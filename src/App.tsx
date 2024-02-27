import { useLanguages } from "./customHook/useLanguages"
import { useDebounce } from "./customHook/useDebounce"
import { Header } from "./components/Header"
import { IconArrows } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"
import { SectionType } from "./types.d"
import { TextSelector } from "./components/TextSelector"
import { useEffect } from "react"
import { Translate } from "./services/translate"

function App() {
  const { fromLanguage, toLanguage, userText, resultText, loading, interchangeLanguages, setFromLanguages, setToLanguages, setUserText, setResultText } = useLanguages()

  const debounceUserText = useDebounce(userText, 350)

  useEffect (() => {
    if(debounceUserText === '') return

    Translate({fromLanguage, toLanguage, text: debounceUserText})
    .then( resultText => {
      if( resultText ) return setResultText(resultText)
    })
    .catch( () => {setResultText('Error')} )
    
  }, [debounceUserText, fromLanguage, toLanguage, setResultText])


  return (
    <main className="mx-auto w-[95%] pt-8 pb-20">

      <Header/>

      <section className="flex flex-row gap-x-4 ml-36 items-start">
      
        <div className="text-xl flex flex-col gap-y-2">
          <LanguageSelector 
            type= {SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguages} />

            <TextSelector
              type={SectionType.From}
              value={resultText}
              onChange={setResultText}
            />
        </div>

        <button className="relative top-[6px]"
          disabled= {fromLanguage === 'Auto'}
          onClick={interchangeLanguages}>
          <IconArrows/>
        </button>

        <div className="text-xl flex flex-col gap-y-2">
          <LanguageSelector 
            type= {SectionType.To}
            value={toLanguage}
            onChange={setToLanguages}/>

          <TextSelector
            loading={loading}
            type={SectionType.To}
            value={userText}
            onChange={setUserText}
          />
        </div>

      </section>
    </main>
  )
}

export default App
