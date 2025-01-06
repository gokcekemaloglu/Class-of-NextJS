"use client"

import { useRouter } from "next/navigation"

// normalde next.js defauld not found sayfası yapıyor, biz onu ezdik, ismi not-found olmak zorunda
export default function NotFound() {
    const router = useRouter()
    return(
        <div className="h-secreen flex flex-col justify-center items-center">
            <img src="./images/404-page-not-found.png" alt=""/>
            <button className="text-gray-100 bg-gray-800 hover:bg-gray-950 font-semibold py-2 px-4 rounded shadow mt-4"
                onClick={()=>router.back()}
            >
                Go Back
            </button>
        </div>
    )
}