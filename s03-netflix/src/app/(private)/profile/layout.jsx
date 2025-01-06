"use client";

import { useEffect } from "react";
// import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const PrivateLayout = ({ children }) => {
  // const { currentUser } = useAuthContext();
  const router = useRouter();

  // bu sayfa 2. bi layout private rotaları kontrol için açtık syntax ı hep alttaki gibi olacak

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    if (!currentUser) {
      router.push("/login");
    }
  }, []);

  return <div>{children}</div>;
};
export default PrivateLayout;

// import { useAuthContext } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const PrivateLayout = ({children}) => {

//     const {currentUser} = useAuthContext()
//     const router = useRouter()

//     useEffect(()=>{
//         if (!currentUser) {
//             router.push("/login")
//         }
//     },[])

//     return <div>{children}</div>
// }

// export default PrivateLayout;
