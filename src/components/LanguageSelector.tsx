import { Language, FromLanguage, SectionType } from "../types.d"

type Props =
 | {type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
 | {type:SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector = ( {onChange, type, value} : Props ) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return(
        <form className="mx-auto">
            <select onChange={handleChange} value={value} aria-label="Select Language" className="bg-zinc-900 border border-gray-500 text-sky-300/70 text-base rounded-lg block w-64 py-3 px-5 placeholder:bg-zinc-900 focus:outline-none">
                {type === SectionType.From && <option value="Auto">Detectar Idioma</option>}
                <option value="English">English</option>
                <option value="Español">Español</option>
                <option value="Deutsch">Deutsch</option>
                <option value="Italiano">Italiano</option>
            </select>
        </form>
    )
}