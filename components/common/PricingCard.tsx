import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const PricingCard = ({
  tier,
  index,
}: {
  tier: {
    name: string;
    price: string;
    features: string[];
  };
  index: number;
}) => {
  return (
    <Card
      key={index}
      className={`shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
        index === 1 ? "border-2 border-primary" : ""
      } bg-gradient-to-r from-indigo-500 to-purple-600`}
    >
      <CardHeader className="py-6">
        <CardTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600">
          {tier.name}
        </CardTitle>
        <CardDescription className="text-5xl font-bold text-white">
          {tier.price}
          <span className="text-lg font-normal text-gray-200">/month</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tier.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center text-white">
              <CheckIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pb-6">
        {index === 0 ? (
          <RegisterLink
            className={buttonVariants({
              variant: "outline",
            }) + " text-white border-white hover:bg-white hover:text-primary transition"}
          >
            Get started
          </RegisterLink>
        ) : (
          <LoginLink
            className={buttonVariants({
              variant: "default",
            }) + " text-white bg-primary hover:bg-white hover:text-primary transition"}
          >
            Upgrade to Pro
          </LoginLink>
        )}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
