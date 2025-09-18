import Banner from "@/components/home/Banner";
import CreditLimit from "@/components/home/CreditLimit";
import HowItWorks from "@/components/home/HowItWorks";
import IndustrySolution from "@/components/home/IndustrySolutions";

export default async function Home() {
  
  return (
    <div className="bg-white">
      <Banner/>
      <IndustrySolution/>
      <CreditLimit/>
      <HowItWorks/>

      {/* 
            <HowItWorks></HowItWorks>
   */}

    </div>
  );
}
