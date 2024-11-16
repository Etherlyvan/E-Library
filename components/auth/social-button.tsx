import {IoLogoGoogle} from "react-icons/io5"
import { signIn } from "@/auth"

export const GoogleButton = () => {
    return (
        <form action={async()=>{
            "use server"
            await signIn("google", {redirectTo: "/dashboard"})
        }}>
            <button type ="submit" className="flex items-center justify-center gap-1 w-full text-white bg-[#4285F4] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <IoLogoGoogle className="w-6 h-6" />  
                Sign in with Google
            </button>
        </form>
    )
}