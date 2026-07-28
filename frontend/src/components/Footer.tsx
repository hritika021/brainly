import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer=()=> {
  return (
    <footer className="relative overflow-hidden bg-[#FCFAFB] pb-10 ">

      <div className="mx-auto mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-semibold text-slate-900">
            Brain
            <span className="font-playfair italic text-[#dd5781]">
              ly
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-slate-500 ">
            Your second brain for saving articles, videos, tweets and ideas—
            beautifully organized and always within reach.
          </p>

      
          <div className="mt-8 flex gap-5">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
         <FontAwesomeIcon icon={faLinkedin}/>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-100 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

          </div>

        </div>

      
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-pink-100 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Brainly. All rights reserved.
          </p>

          <p>
            Crafted with <span className="text-[#dd5781]">♥</span> by Hritika.
          </p>

        </div>

      </div>
    </footer>
  );
}