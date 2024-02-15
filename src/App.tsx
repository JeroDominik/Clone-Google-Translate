import { useLanguages } from "./customHook/useLanguages"
import { Header } from "./components/Header"

function App() {
  const { setFromLanguages, fromLanguage } = useLanguages()

  return (
    <main className="mx-auto w-[95%] pt-8 pb-20">

      <Header/>

      <div className="flex flex-row">
        <h1 className="text-center pt-10 text-2xl">
          Google Translate
        </h1>
        <button className="border rounded-xl bg-sky-300 mr-6 p-2"
          onClick={() => {
            setFromLanguages('Español')
        }}>Cambiar Idioma</button>
        {fromLanguage}
      </div>

    </main>
  )
}

export default App
