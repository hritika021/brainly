export const Input=({placeholder,ref,label,type}:{type:string,ref:any,label:string, placeholder:string})=>{
return (
    <div className="flex flex-col mt-4" >
        <label className="text-sm font-semibold">{label}</label>
        <input    type={type} placeholder={placeholder} ref={ref} className="border  border-gray-300 focus:border-pink-300 focus:outline-none border-2 focus:ring-2 focus:ring-pink-200 px-4 py-1 mt-1 bg-gray-100/30  rounded-md " />
    </div>
)
}