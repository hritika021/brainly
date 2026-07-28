import {
  FileText,
  MessageCircleCheckIcon,
  Play,
  Search,
  FolderTree,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Save Articles",
    description:
      "Clip any article with one click. Keep clean, readable copies forever.",
  },
  {
    icon: MessageCircleCheckIcon,
    title: "Save Tweets",
    description:
      "Bookmark threads and tweets with beautiful previews and metadata.",
  },
  {
    icon: Play,
    title: "Save YouTube Videos",
    description:
      "Store videos with timestamps, transcripts and your own notes.",
  },
  {
    icon: Search,
    title: "Powerful Search",
    description:
      "Find anything instantly using titles, tags and keywords.",
  },
  {
    icon: FolderTree,
    title: "Smart Organization",
    description:
      "Group everything into collections and tags automatically.",
  },
  {
    icon: Share2,
    title: "Share Your Brain",
    description:
      "Share your collections publicly or privately with one click.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden scroll-mt-28 "
    >
      <div className="absolute left-1/2 top-24 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-pink-200/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm py-4 font-semibold uppercase tracking-[0.25em] text-[#dd5781]">
            FEATURES
          </p>

          <h2 className="font-[Inter] text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Everything you need.
          </h2>

          <h2 className="mt-2 font-[Merriweather] text-5xl italic tracking-tight font-medium text-[#dd5781] md:text-6xl">
            Nothing you don't.
          </h2>

          <p className="mx-auto mt-6 font-[Inter] max-w-xl text-md leading-8 text-gray-500">
            Six thoughtful features that transform scattered links into a calm,
            searchable knowledge library.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="group relative overflow-hidden rounded-[34px] border border-pink-100 bg-white/90 backdrop-blur-xl px-3 py-4 shadow-[0_10px_40px_rgba(221,87,129,0.08)]">

    <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-pink-200/80 blur-[65px]" />

    <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-pink-300/40 blur-[75px]" />

    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-50/10 to-pink-100/20 opacity-0 transition duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
  
       

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#dd5781] text-white shadow-lg shadow-pink-200">
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                <h3 className="text-lg font-medium font-[Inter] text-gray-900">
                  {feature.title}
                </h3>

                <p className=" text-sm leading-wide text-gray-500">
                  {feature.description}
                </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}