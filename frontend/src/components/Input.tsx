export const Input=({placeholder,ref,label,type}:{type:string,ref:any,label:string, placeholder:string})=>{
return (
    <div className="flex flex-col mt-4" >
        <label className="text-sm font-semibold">{label}</label>
        <input  type={type} placeholder={placeholder} ref={ref} className="px-4 py-1 mt-1 bg-gray-100/30 border rounded-md " />
    </div>
)
}