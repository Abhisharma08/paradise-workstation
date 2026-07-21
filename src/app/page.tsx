import { Header } from "@/components/header";
import { Hero } from "@/components/landing/hero";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/landing/gallery";
import { FloatingEnquireButton } from "@/components/landing/floating-enquire-button";
import { WorkspaceSolutions } from "@/components/landing/perfect-workspace";
import { ProductivitySection } from "@/components/landing/productivity-section";
import { CustomWorkspaceSection } from "@/components/landing/custom-workspace-section";
import { CompleteWorkspaceSolutions } from "@/components/landing/complete-workspace-solutions";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <WhyChooseUs />
        <WorkspaceSolutions />
        <CustomWorkspaceSection />
        <ProductivitySection />
        <CompleteWorkspaceSolutions />
        {/* <CTA /> */}
      </main>
      <FloatingEnquireButton />
      <Footer />
    </div>
  );
}
