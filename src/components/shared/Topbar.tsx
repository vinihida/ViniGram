import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { userSignOutAccount } from "@/lib/react-query/queriesAndMutation"
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {

    const { mutate: signOut, isSuccess } = userSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if (isSuccess) navigate(0);
    },[isSuccess])

    return (
        <section className="topbar">
            <div className="flex-between py-4 px-5">
                <Link to="/" className="flex gap-3 items-center">
                    <img src="/assets/icons/logo.png"
                        alt="logo"
                        width={100}
                        height={300}
                    />
                </Link>
            </div>
            <div className="flex gap-4">
                <Button variant="ghost" className="shad-button-ghost" onClick={() => signOut()}>
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
                <Link to={'/profile/${user.id}'} className="flex-center gap-3">
                </Link>
            </div>

        </section>
    )
}

export default Topbar