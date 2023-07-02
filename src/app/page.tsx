//app/page.tsx
import { getUserData } from "@/actions/getUserData";
export default async function Home() {
  const user = await getUserData();
  return (
    <div>
      <h1>{`Hello, ${user.firstName}`}</h1>
    </div>
  )
}