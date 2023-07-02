import { currentUser } from "@clerk/nextjs";
import {redirect} from 'next/navigation'

export async function getUserData() {
    const user = await currentUser();

    if(!user) {
        redirect('/sign-in')
    }

    return user;
};
