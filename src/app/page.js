import Image from "next/image";
import Logo from "@/components/Logo";

export const metadata = {
    title: 'Gamertag.com – Coming soon!',
    description: 'Gamertag is a single hub for all your gaming profiles, making it easy for friends to find you, follow your stats, and connect instantly.',    themeColor: "#111C2C",
    alternates: {
        canonical: "https://gamertag.com",
    },
    icons: {
        icon: [
            {
                rel: 'icon',
                type: 'image/png',
                media: '(prefers-color-scheme: light)',
                url: '/favicon-black.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                media: '(prefers-color-scheme: dark)',
                url: '/favicon-white.png'
            }
        ]
    }
};

function Badge({ children }) {
    return (
        <span className="h-5 px-1.5 py-1 bg-[#fcbfbb]/10 rounded justify-start items-center gap-2 inline-flex text-center text-yellow text-xs md:text-sm font-bold font-sans uppercase leading-3">
            {children}
        </span>
    )
}

export default function Home() {
  return (
      <main>
          <div className="relative isolate z-50 text-center h-screen flex flex-col items-center justify-center w-96 lg:w-8/12 xl:w-1/2 mx-auto">
              <Logo className="text-white w-72 mb-4 mx-auto fill-current"/>
              <div className="text-red text-xl font-semibold uppercase leading-normal">Coming soon</div>
              <h1 className="font-sans text-3xl md:text-5xl font-medium text-white md:text-balance py-4">Remember that awkward moment when you couldn’t recall your Gamertag?</h1>
              <p className="text-gray-200 font-sans md:text-balance text-white mb-2 text-lg leading-normal">We’ve all been there. With Gamertag.com, you’ll soon have a single hub for all your gaming profiles, making it easy for friends to find you, follow your stats, and connect instantly.</p>
              <p className="text-gray-200 font-sans text-balance text-white mb-6 text-lg leading-normal">Your <Badge>gamertag.com/username</Badge> or <Badge>ign.me/username</Badge> link is almost here! Stay tuned.</p>

              <a href="https://x.com/heychazza" className="h-10 px-3 py-4 bg-[#f22e22]/20 rounded shadow border border-red/[0.15] hover:border-red/[0.75] transition-colors justify-center items-center gap-3 inline-flex">
                  <div className="pb-px justify-center items-center gap-3 flex text-red">
                      <div className="text-sm md:text-base font-semibold uppercase leading-none">Follow for updates</div>
                      <div className="size-3">
                          <svg className="w-full h-full fill-current" role="img" viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg"><title>X</title>
                              <path fill="current"
                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                          </svg>
                      </div>
                  </div>
              </a>
          </div>

          <div className="w-screen isolate absolute top-0 h-screen bg-gradient-to-b from-[#14151c] to-[#0c0619]"></div>
          <div className="absolute top-0 z-0 w-full h-screen opacity-[0.08]">
              <Image src="/img/bg.webp" alt="Background Image" fill/>
          </div>
      </main>
  );
}
