import { HeroSection, ProductShowcase, CompanyStats, FeaturedProjects, HowItsMade } from "../components/ui";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <CompanyStats />
      <HowItsMade />
      <FeaturedProjects />
    </main>
  );
}
