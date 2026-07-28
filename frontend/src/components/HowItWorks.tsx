import { Bookmark, FolderOpen, Search } from "lucide-react"

export function HowItWorks(){

const steps = [
  {
    icon: Bookmark,
    title: "Save",
    description: "Save articles, tweets, videos or bookmarks with one click.",
  },
  {
    icon: FolderOpen,
    title: "Organize",
    description: "Brainly automatically organizes and tags everything for you.",
  },
  {
    icon: Search,
    title: "Find",
    description: "Search your entire knowledge base in milliseconds.",
  },
]
return (
  <section id="how-it-works "    className="relative overflow-hidden py-28 bg-[#FCFAFB]">
         <div className="absolute left-1/2 top-0 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[130px]" />

      <div className="absolute left-10 top-48 h-32 w-32 rounded-full bg-pink-100/40 blur-[80px]" />
      <div className="absolute right-16 bottom-20 h-44 w-44 rounded-full bg-pink-200/30 blur-[90px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
            <p className="mb-4 tracking-[0.35em] uppercase text-[#dd5781] font-semibold text-sm">HOW IT WORKS</p>
 <h2 className="md:text-5xl text-4xl  font-semibold font-[Inter] text-slate-900 leading-tight">
            Simple steps,
            <br />
            <span className="font-[Merriweather] italic text-[#dd5781]">
              powerful results.
            </span>
          </h2>
             <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Brainly automatically organizes your content so you can focus on
            what matters.
          </p>
        
        </div>

        <div className="relative  mt-24">
          <div className="absolute left-[17%] right-[17%] top-8  h-[2px] border-t-2 border-dashed border-pink-300" />
<div className="grid grid-cols-3 gap-10">
{steps.map((step,index)=>{
    const Icon=step.icon
    return(
        <div key={step.title}
        className="relative flex flex-col items-center text-center ">
        
        <div className="relative ">
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-2xl" />

                    <div
                      className="
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-pink-100
                        bg-white
                        shadow-[0_10px_40px_rgba(221,87,129,0.08)]
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-[0_18px_55px_rgba(221,87,129,0.18)]
                        
                      "
                    >
                      <Icon size={44} className="text-[#dd5781]" />
                      

                    </div>
                     

        </div>
              <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-xl font-semibold text-[#dd5781]">
                    {index + 1}
                  </div>
                    <h3 className="mt-5 text-xl font-[Inter] font-semibold text-slate-900">
                    {step.title}
                  </h3>
<p className="mt-3 max-w-xs text-base leading-8 text-slate-500">
                    {step.description}
                  </p>

        </div>
    )
})}
</div>
        </div>
<div className="mx-auto mt-24 max-w-3xl rounded-full border border-pink-100 bg-white px-8 py-5 shadow-sm">

          <p className="text-center text-lg text-slate-500">
            From saving a tweet to finding it months later,
            <span className="font-semibold text-[#dd5781]">
              {" "}
              Brainly keeps everything organized automatically.
            </span>
          </p>

        </div>
      </div>
  </section>
)
}