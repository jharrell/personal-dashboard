import { UserProfile, currentUser } from "@clerk/nextjs";


export default async function UserProfilePage() {
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <UserProfile path="/user-profile" routing="path" />
            <div className="">
                
            </div>
        </div>
    )
}