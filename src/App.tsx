import { useLanguages } from "./customHook/useLanguages"
import { Header } from "./components/Header"
import { IconArrows } from "./components/Icons"
import { LanguageSelector } from "./components/LanguageSelector"

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguages, setToLanguages } = useLanguages()

  return (
    <main className="mx-auto w-[95%] pt-8 pb-20">

      <Header/>

      <section className="flex flex-row gap-x-4 ml-36 items-center">
      
        <div className="text-xl flex flex-col gap-y-2">
          <LanguageSelector 
            type='from'
            value={fromLanguage}
            onChange={setFromLanguages} />
        </div>
        {fromLanguage}

        <button disabled= {fromLanguage === 'Auto'}
          onClick={interchangeLanguages}>
          <IconArrows/>
        </button>

        <div className="text-xl flex flex-col gap-y-2">
          <LanguageSelector 
            type='to'
            value={toLanguage}
            onChange={setToLanguages} />
        </div>
        {toLanguage}
      </section>
    </main>
  )
}

export default App
