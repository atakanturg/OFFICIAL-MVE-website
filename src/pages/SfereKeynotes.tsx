import { motion } from "framer-motion";
import { Link } from "wouter";
import { useParams } from "wouter";
import { PageTransition } from "../components/PageTransition";


const yearData: Record<string, { title: string; description: string; speakers: { name: string; description: string; image: string; objectPosition?: string }[] }> = {
  "2026": {
    title: "2026 Selection",
    description: "Explore the insights from a distinguished lineup of global leaders, investors, and authors joining us for the 2026 Economic Symposium to discuss the future of capital and technological shifts.",
    speakers: [
      { name: "Stephen Robert", description: "Co-Founder of Robert Capital Group and former Vice Chairman of Oppenheimer & Co. He brings decades of expertise in global finance and strategic investment, bridging Wall Street success with profound educational philanthropy.", image: "/images/speakers/stephen-robert.jpg" },
      { name: "Marcelo Claure", description: "Founder and CEO of Claure Group, former CEO of SoftBank Group International, and Executive Chairman of WeWork. Known for transformative growth, he offers a powerful global perspective on entrepreneurship and disruptive markets.", image: "/images/speakers/marcelo-claure.jpg" },
      { name: "Eddie Lampert", description: "Founder and Chairman of ESL Investments. A prominent investor known for his analytical value-investing approach, Lampert possesses deep experience navigating capital markets and complex turnarounds during industry disruption.", image: "/images/speakers/eddie-lampert.jpg" },
      { name: "Michael Grunwald", description: "Award-winning journalist and author specializing in economics, climate policy, and innovation. With a distinguished career at The Washington Post and TIME, he provides essential insights into how technological shifts address global challenges.", image: "/images/speakers/michael-grunwald.jpg" }
    ]
  },
  "2025": {
    title: "2025 Panelists",
    description: "Review the powerful discussions on alternative investments, global health innovations, and visionary real estate development brought forth by our 2025 panel.",
    speakers: [
      { name: "Josh Harris", description: "Co-Founder of Apollo Global Management and Managing Partner of Harris Blitzer Sports & Entertainment. A transformative leader in alternative investments and sports ownership, known for visionary value creation.", image: "/images/speakers/josh-harris.jpg" },
      { name: "Wendy Holman", description: "CEO and Co-Founder of Ridgeback Biotherapeutics and former principal at ZBI Equities. She combines deep financial expertise with a relentless drive to develop innovative treatments for emerging infectious diseases and global health.", image: "/images/speakers/wendy-holman.jpg" },
      { name: "Craig Robins", description: "CEO and President of Dacra. As a visionary real estate developer and arts advocate, he is renowned for transforming the Miami Design District into a global destination for commerce, culture, and architecture.", image: "/images/speakers/craig-robins.jpg" }
    ]
  },
  "2024": {
    title: "2024 Panelists",
    description: "Look back at the inaugural panel examining macroeconomic environments, transformative media strategies, and luxury real estate development mapped out by industry titans.",
    speakers: [
      { name: "Ken Griffin", description: "Founder and CEO of Citadel. A pioneering force in global finance and quantitative trading, Griffin has built one of the world's most successful alternative investment firms, shaping the modern trajectory of capital markets.", image: "/images/speakers/ken-griffin.jpg" },
      { name: "Wade Davis", description: "Vice Chairman and former CEO of TelevisaUnivision. With a robust background spanning ForgeLight and Viacom, Davis is a transformative leader reshaping the media landscape and driving strategic corporate evolution.", image: "/images/speakers/wade-davcids.jpg" },
      { name: "Leon Shaulov", description: "Founder and Managing Member of Maplelane Capital. Shaulov employs a rigorous fundamental approach to equity investing, navigating market sentiment and complex trends to generate substantial long-term returns.", image: "/images/speakers/leon-shaulov.jpg" },
      { name: "Edgardo Defortuna", description: "President and CEO of Fortune International Group. A key visionary in South Florida real estate, Defortuna has redefined luxury development and brokerage, leading transformative projects across Miami's skyline.", image: "/images/speakers/edgardo-defortuna-feature.jpg", objectPosition: "25% center" },
      { name: "Daniel Sundheim", description: "Founder and Chief Investment Officer of D1 Capital Partners. Recognized for his incisive investments across public and private markets, Sundheim continues to drive high-impact growth in technology and consumer sectors.", image: "/images/speakers/daniel-sundheim.jpeg", objectPosition: "75% center" }
    ]
  }
};

export function SfereKeynotes() {
  const { year } = useParams<{ year: string }>();
  const activeYear = year && yearData[year] ? year : "2026";
  const data = yearData[activeYear];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen tracking-wide relative pt-4 md:pt-8 w-full overflow-hidden pointer-events-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-28 left-6 md:left-12 z-40"
        >
          <Link href="/sfere">
            <a className="inline-flex items-center gap-2 text-[#58C391] font-semibold text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all link-underline">
              <span>←</span> SFERE
            </a>
          </Link>
        </motion.div>



        <section className="pt-40 pb-20 px-6 md:px-12 flex flex-col justify-center w-full">
          <div className="mx-auto max-w-7xl w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-24 max-w-3xl"
            >
              <h2 className="text-xs font-semibold tracking-[0.3em] text-[#58C391] uppercase mb-3">{data.title}</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#F5F5F0] tracking-tight uppercase mb-6 leading-tight">
                Keynote <span className="italic text-[#58C391]">Speakers</span>
              </h1>
              <p className="text-lg text-[#A0A0A0] leading-relaxed">
                {data.description}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full mb-32 z-10"
            >
              {data.speakers.map((speaker) => (
                <motion.div
                  key={speaker.name}
                  variants={itemVariants}
                  className="flex flex-col gap-4 items-center group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[320px]"
                >
                  <div className="w-full aspect-[4/5] shrink-0 overflow-hidden rounded-lg bg-[#111111]">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      style={{ objectPosition: speaker.objectPosition || "center" }}
                      className="w-full h-full object-cover image-desaturate group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col pt-1 text-center w-full">
                    <h3 className="text-xl font-heading font-semibold text-[#F5F5F0] group-hover:text-[#58C391] tracking-wide mb-2 uppercase transition-colors">{speaker.name}</h3>
                    <div className="w-8 h-px bg-[#58C391] mb-3 mx-auto transition-transform group-hover:scale-x-150 origin-center duration-300" />
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">
                      {speaker.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
