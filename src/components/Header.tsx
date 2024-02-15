import { IconSearch, IconDelete, IconMicrophone, IconBriefcase, IconSettings, IconGoogleApps } from "./Icons"

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mb-20">

        <nav className="flex flex-row items-center">
            <a  href="https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwiM5-KU3KiEAxWGqZUCHdd2APYQPAgJ"
                target="_blank"
                rel="noopener"
                className="mr-10">
                <img className="h-8 w-24" src="./imagenGoogle.png" alt="Imagen Google" />
            </a>
            
            <div className="flex flex-row justify-between gap-x-3 w-[580px] py-3 px-6 rounded-full bg-zinc-800">
                <input type="text" className="bg-zinc-800 text-base focus:outline-none" placeholder=""/>
                <ul className="flex flex-row gap-x-4 items-center">
                    <li>
                        <IconDelete/>
                    </li>
                    <span className="border-l border-gray-500 h-7"></span>
                    <li>
                        <IconBriefcase/>
                    </li>
                    <li>
                        <IconMicrophone/>
                    </li>
                    <li>
                        <IconSearch/>
                    </li>
                </ul>
                
            </div>
            
        </nav>
        <ul className="flex flex-row gap-x-6">
            <li>
                <IconSettings/>
            </li>
            <li>
                <IconGoogleApps/>
            </li>

        </ul>
    </header>
  )
}
