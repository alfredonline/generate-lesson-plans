import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import PricingSection from "@/components/common/PricingSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features, faqItems } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CookieConsent from "@/components/common/CookieConsent";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSection />
      </MaxWidthWrapper>
      <FeaturesSection />
      <MaxWidthWrapper>
        <HowItWorksSection />
      </MaxWidthWrapper>
      <PricingSection />
      <FAQSection />
      <CTASection />
      <CookieConsent />
    </>
  );
}

function HeroSection() {
  return (
    <div className="py-32 text-center bg-white">
      <h1 className="text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500">
        Elevate Lesson Planning
      </h1>
      <p className="mt-8 text-xl text-gray-800 max-w-2xl mx-auto">
        Leverage AI-driven lesson plans tailored to engage and inspire. Save time
        and bring creativity to the classroom with effortless precision.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
        <Button
          size="lg"
          asChild
          className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
        >
          <Link href="/">
            Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
        >
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <MaxWidthWrapper>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 mb-16 text-center">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 text-center bg-white"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Input Your Requirements",
      description:
        "Specify grade level, subject, and learning objectives.",
    },
    {
      title: "AI Generates Your Plan",
      description:
        "Our advanced AI creates a tailored lesson plan in seconds.",
    },
    {
      title: "Teach with Confidence",
      description:
        "Deliver engaging lessons that inspire your students.",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 mb-16 text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-gray-50 transform transition-transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-semibold mb-6 shadow-md">
              {index + 1}
            </div>
            <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="py-24 bg-white">
      <MaxWidthWrapper>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <AccordionTrigger className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-6 py-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </div>
  );
}

function CTASection() {
  return (
    <div className="py-24 text-center bg-white">
      <h2 className="text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
        Transform Your Lesson Planning⚡️
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Join a community of educators who are saving time and creating more
        dynamic lesson plans.
      </p>
      <Button
        size="lg"
        asChild
        className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
      >
        <Link href="/pricing">
          Start Creating Lessons Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
