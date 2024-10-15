import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import prisma from "@/lib/prisma";
import Dashboard from "@/components/Dashboard";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/utils/stripe";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  await createCustomerIfNull();

  if (!user) {
    redirect("/");
  }

  const userData = await prisma.user.findFirst({
    where: {
      id: user?.id,
    },
    select: {
      lessonPlans: true,
      stripe_customer_id: true,
    },
  });

  if (!userData) {
    redirect("/");
  }

  const subscribed = await hasSubscription();
  const manage_link = await generateCustomerPortalLink(
    "" + userData.stripe_customer_id
  );
  const checkout_link = await createCheckoutLink(
    "" + userData?.stripe_customer_id
  );

  return (
    <MaxWidthWrapper className="py-8 md:py-20">
      <Dashboard
        lessonPlans={userData.lessonPlans}
        subscribed={subscribed.isSubscribed}
        manage_link={manage_link || ""}
        checkout_link={checkout_link || ""}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
