import { UserProfile } from "@clerk/nextjs";


export default function UserProfilePage() {
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <UserProfile path="/user-profile" routing="path" />
        </div>
    )
}