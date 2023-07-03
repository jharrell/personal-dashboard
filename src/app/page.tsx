//app/page.tsx
import { getUserData } from "@/actions/getClerkUserData";
export default async function Home() {
  const user = await getUserData();
  console.log(user);
  return (
    <div>
      <h1>{`Hello, ${user?.firstName}`}</h1>
    </div>
  )
}