import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { tiers } from "@/constants";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Choose your plan
        </h2>
       <p className="text-gray-600 text-md md:text-lg text-center mb-10">
  Please ensure you are signed in before attempting to purchase a pro plan.{" "}🤔
             </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {tiers.map((tier, index) => (
            <PricingCard tier={tier} index={index} key={index} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingSection;
