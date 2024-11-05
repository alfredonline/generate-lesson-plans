import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import PricingSection from "@/components/common/PricingSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, faqItems } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CookieConsent from "@/components/common/CookieConsent";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSection />
      </MaxWidthWrapper>
      <div className="bg-white">
        <MaxWidthWrapper>
          <FeaturesSection />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <HowItWorksSection />
      </MaxWidthWrapper>
      <div className="bg-white">
        <MaxWidthWrapper>
          <PricingSection />
        </MaxWidthWrapper>
      </div>
      <div className="bg-white text-gray-900">
        <MaxWidthWrapper>
          <FAQSection />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <CTASection />
      </MaxWidthWrapper>
      <CookieConsent />
    </>
  );
}

function HeroSection() {
  return (
    <div className="py-20 md:py-32 text-center">
      <h1 className="text-6xl font-bold tracking-light bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Create Engaging Lesson Plans in Seconds
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Empower your teaching with AI-generated lesson plans tailored to your needs.<br/> Save time and inspire your students with creative, engaging content.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <Link href="/">
            Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/pricing">
            View Pricing
          </Link>
        </Button>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why choose our lesson planner?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: "Input your requirements", description: "Specify grade level, subject, and learning objectives." },
    { title: "AI generates your plan", description: "Our advanced AI creates a tailored lesson plan in seconds." },
    { title: "Teach with confidence", description: "Deliver engaging lessons that inspire your students." },
  ];

  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function CTASection() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-5xl font-extrabold mb-6">
        Ready to transform your lesson planning?
      </h2>
      <p className="text-lg text-primary mb-8 max-w-xl mx-auto">
        Join hundreds of teachers who are already saving time and creating engaging lesson plans with us.
      </p>
      <Button size="lg" asChild>
        <Link href="/pricing">
          Start Creating Lessons Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
