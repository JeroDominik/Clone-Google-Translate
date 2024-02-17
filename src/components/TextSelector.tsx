import { SectionType } from "../types.d"

type Props = {
    placeholder: string
    type: SectionType 
    loading?: boolean 
    onChange: (value:string) => void  
    value:string}

export const TextSelector = ( {placeholder, type,  loading, onChange, value}: Props )  => {
    let addClass = ""
    if (type === SectionType.To) {
        addClass = "bg-zinc-800 border border-zinc-800 placeholder:bg-zinc-800";
    } else {
        addClass = "bg-zinc-900 border border-zinc-900 placeholder:bg-zinc-900"
    }

    return (
        <form className="mx-auto">
            <textarea  aria-label="Text Area" 
                className={` text-gray-500 text-sm rounded-lg block h-40 w-64 py-3 px-5 focus:outline-none resize-none ${addClass}`}
                placeholder={placeholder}>
                
            </textarea>
        </form>
    )
}
