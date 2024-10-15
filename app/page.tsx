import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import PricingSection from "@/components/common/PricingSection";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, testimonials } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </MaxWidthWrapper>
  );
}

function HeroSection() {
  return (
    <div className="py-20 md:py-28 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Create Engaging Lesson Plans In Seconds
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
        Empower your teaching with AI-generated lesson plans tailored to your
        needs. Save time and inspire your students with creative, engaging
        content.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className={buttonVariants()}>
          Get Started For Free{" "}
        </Link>
        <Link
          href="/pricing"
          className={buttonVariants({
            variant: "secondary",
          })}
        >
          Pricing
        </Link>
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
          <Card key={index} className="text-center">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        What are educators saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to transform your lesson planning?
      </h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Join hundreds of teachers who are already saving time when creating
        lesson plans with us.
      </p>
      <Link href="/pricing"
        className={buttonVariants()}
      >
        Start Creating Lessons Now
      </Link>
    </div>
  );
}
