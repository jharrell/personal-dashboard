import { currentUser } from "@clerk/nextjs";
import {redirect} from 'next/navigation'
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";


export async function getUserData() {
    const user = await currentUser();
    if(!user) {
        redirect('/sign-in')
    }
    if (user) {
        try {
            const userData = await prisma.user.findUnique({
                where: {
                    email: user.emailAddresses[0].emailAddress,
                },
                
            });
            if (!userData) {
                console.log('user not found in database, creating new user')
                const newUser = await prisma.user.create({
                    data: {
                        clerkId: user.id,
                        email: user.emailAddresses[0].emailAddress,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                }) as User;
                
                return newUser;
            }
            return userData;
        } catch (error) {
            console.log(error)
            return null;
        }

       return null;
    }

    

    return user;
};
