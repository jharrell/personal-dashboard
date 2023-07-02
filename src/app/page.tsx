//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import { getUserData } from "@/actions/getUserData";
export default async function Home() {
  const user = await getUserData();
  console.log(user);
  return (
    <div>
      <h1>{`Hello, ${user.firstName}`}</h1>
    </div>
  )
}