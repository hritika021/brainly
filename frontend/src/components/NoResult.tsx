export function NoResult(){
    return (
         <div className="flex justify-center px-1 lg:px-8  pt-12">
  <div className="w-full rounded-xl border-2 border-pink-200 bg-white py-10 text-center font-[Inter] ">
    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
      No content found for this filter
    </h2>
    <p className="mt-2 text-sm md:text-base text-gray-500">
      Try selecting a different filter.
    </p>
  </div>
</div>
    )
}