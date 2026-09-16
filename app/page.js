import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-x-hidden">
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
  </div>
);

export default Page;
