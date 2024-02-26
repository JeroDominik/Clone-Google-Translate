import { SectionType } from "../types.d"

type Props = {
    type: SectionType 
    loading?: boolean 
    onChange: (value:string) => void  
    value:string}

const getPlaceHolder = ({type, loading} : {type:SectionType, loading?: boolean} ) => {
    if(type === SectionType.From) return 'Enter Text'
    if(loading === true) return 'Translating...'
    return 'Translation'
}

export const TextSelector = ( {type,  loading, onChange, value}: Props )  => {
    let addClass = ""
    if (type === SectionType.To) {
        addClass = "bg-zinc-800 border border-zinc-800 placeholder:bg-zinc-800";
    } else {
        addClass = "bg-zinc-900 border border-zinc-900 placeholder:bg-zinc-900"
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <form className="mx-auto">
            <textarea  aria-label="Text Area" 
                className={` text-gray-200 text-sm rounded-lg block h-40 w-64 py-3 px-5 focus:outline-none resize-none ${addClass}`}
                placeholder={getPlaceHolder({type, loading})}
                value={value}
                onChange={handleChange}
                disabled={type === SectionType.To}>
                
            </textarea>
        </form>
    )
}
