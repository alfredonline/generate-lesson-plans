import AnimatedTitle from "@/components/AnimatedTitle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import LessonPlanForm from "@/components/LessonPlanForm";
import {
  checkLessonPlanCreationEligibility,
  hasSubscription,
} from "@/utils/stripe";
import FeatureCards from "@/components/FeatureCards";

const Page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/");
  }

  const isSubscribed = await hasSubscription();
  const { isEligible, message, remainingGenerations } = await checkLessonPlanCreationEligibility();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-200 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        
        <AnimatedTitle title="Create Your" subtitle="Lesson Plan" />

        {/* Lesson Plan Form Component */}
        <LessonPlanForm isSubscribed={isSubscribed.isSubscribed} />

        {/* Feature Cards Display */}
        <FeatureCards />

        {/* Conditional Messages */}
        <div className="mt-6">
          {!isEligible && (
            <Alert message={message} type="error" />
          )}
          {remainingGenerations > 0 && (
            <Alert message={message} type="warning" />
          )}
          {isEligible && remainingGenerations === 0 && (
            <Alert message={message} type="success" />
          )}
        </div>
      </div>
    </div>
  );
};

const Alert = ({ message, type }) => {
  const alertStyles = {
    error: "bg-red-100 border border-red-400 text-red-700",
    warning: "bg-yellow-100 border border-yellow-400 text-yellow-700",
    success: "bg-green-100 border border-green-400 text-green-700",
  };

  return (
    <div className={`mt-4 p-4 ${alertStyles[type]} rounded-md transition duration-300 ease-in-out`}>
      {message}
    </div>
  );
};

export default Page;

//Key Improvements Made

//Layout Adjustments

//The outer div's styling was modified to center the content and use a more modern gradient background.
//A max-w-2xl container is given some padding and a shadow for a card-like effect.
//Alert Component:

//Introduced an Alert component for a cleaner implementation of alerts, enhancing reusability and readability.
//Refined Color Scheme:

//Updated background colors to use softer shades and ensure better visibility and aesthetics.
// Alert Component for better reusability
