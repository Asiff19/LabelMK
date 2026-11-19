import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, World } from '../sections';
import SplashGate from '../components/SplashGate';

const Page = () => (
  <SplashGate>
    <>
      <div className="landing-background" aria-hidden="true" />
      <div className="landing-content relative z-10">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
        </div>
        <World />
        <Footer />
        <a
          href={`https://wa.me/919832902744?text=${encodeURIComponent('Hi Label MK, I would like to enquire about a custom order.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire about a custom order on WhatsApp"
          className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-[#10251f]/85 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-[#14382c]/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 shrink-0 text-emerald-300"
          >
            <path
              d="M20 11.5a8.3 8.3 0 0 1-12.3 7.3L4 20l1.2-3.5A8.3 8.3 0 1 1 20 11.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 8.5c.3-.5.6-.5.9-.5.2 0 .4 0 .6.5l.6 1.4c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.5.2.5.4.5.6 0 .3 0 .6-.5.9-.5.4-1.1.6-1.8.5-1.1-.2-2.3-.9-3.5-2.1-1.2-1.2-1.9-2.4-2.1-3.5-.1-.7.1-1.3.5-1.8Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </>
  </SplashGate>
);

export default Page;
