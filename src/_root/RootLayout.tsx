import BottomBar from "@/components/shared/BottomBar"
import Topbar from "@/components/shared/Topbar"
import LeftSideBar from "@/components/shared/leftSideBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSideBar />
      
      <section className="flex flex-1 h-full">
        <Outlet/>
      </section>
        <BottomBar />
    </div>
  )
}

export default RootLayout