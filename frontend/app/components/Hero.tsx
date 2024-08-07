"use client";

import { signIn, useSession } from "next-auth/react"
import { SecondaryButton } from "./Button"
import { useRouter } from "next/navigation";


export const Hero = () =>{
    const session = useSession();
    const router = useRouter();
    return <div>
        <div className="text-5xl font-medium">
            <span>
            The Indian Crypto 
            </span>
            <span className="text-blue-500 pl-4">
            Wallet Exchange    
            </span> 
            <div className="flex justify-center pt-4 text-2xl text-slate-500">
                Create a Frictionless wallet from India with just a Google Account.
            </div>
            <div className="pt-8 flex justify-center">
            {session.data?.user ? <SecondaryButton onClick={() => {
                router.push("/dashboard");
            }}>Go to Dashboard</SecondaryButton> : <SecondaryButton onClick={() => {
                signIn("google");
            }}>Login with Google</SecondaryButton>}
        </div>
        </div>
    </div>
}