export const ToggleButton=({enabled,onClick}:{enabled:boolean,onClick:()=>void})=>{
    return(

            <button onClick={onClick} className={`relative w-12 h-6 rounded-full transition-colors ${enabled?"bg-[#dd5781]":"bg-gray-300"}`}>
<span className={`absolute left-0 h-5 w-5 top-0.5 bg-white transition-all rounded-full duration-3000  ${enabled?"translate-x-[26px] ":"translate-x-0.5"}`}  />
            </button>
            



    )
}