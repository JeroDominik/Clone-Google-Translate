import { useLanguages } from "./customHook/useLanguages"
import { Header } from "./components/Header"
import { IconArrows } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"
import { SectionType } from "./types.d"
import { TextSelector } from "./components/TextSelector"

function App() {
  const { fromLanguage, toLanguage, resultText, userText, interchangeLanguages, setFromLanguages, setToLanguages, setUserText, setResultText } = useLanguages()

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
              placeholder="Enter Text"
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
            placeholder="Translation"
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
