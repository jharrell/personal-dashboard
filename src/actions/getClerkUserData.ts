import { currentUser } from "@clerk/nextjs";
import {redirect} from 'next/navigation'
import prisma from "@/lib/prisma";
export async function getUserData() {
    const user = await currentUser();

    if(!user) {
        redirect('/sign-in')
    }

    if (user) {
        // const userData = await prisma.user.findUnique({
        //     where: {
        //         clerkId: user.id,
        //     },
            
        // });
        console.log(user)
        // if (!userData) {
        //     redirect('/user-profile')
        // }

        // if(userData) {
        //     redirect('/');
        // }
    }

    

    return user;
};
