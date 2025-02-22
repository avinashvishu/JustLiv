import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';
const HeroSection1=dynamic(import("../components/heroSection1/heroSection1"));
const HeroSection2=dynamic(import("../components/heroSection2/heroSection2"));
const HeroSection3=dynamic(import("../components/heroSection3/heroSection3"));
const HeroSection4=dynamic(import("../components/heroSection4/heroSection4"));
const HeroSection5=dynamic(import("../components/heroSection5/heroSection5"));
const Footer=dynamic(import("../components/footer/footer"))

export default function Home() {
  return (
    <>
      <NextSeo
        title="JustLiv"
        description="Find your dream job faster! Mployee.me enhances resumes for ATS compatibility, matches you with top jobs, and boosts interview chances."
      />
      <main className="flex flex-col w-full h-full">
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <HeroSection5 />
        <Footer />

      </main>
    </>
  );
}
