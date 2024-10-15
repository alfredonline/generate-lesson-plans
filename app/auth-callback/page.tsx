import { redirect } from "next/navigation";
import { CreateUserIfNull } from "./actions";

const Page = async () => {
  const { success } = await CreateUserIfNull();
  if (!success) {
    return <div>Something went wrong signing you in! Contact support</div>;
  }
  redirect("/");
};

export default Page;
