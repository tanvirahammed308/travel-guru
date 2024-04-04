import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
        <Header/>
        <div className="my-28 px-5 md:mx-auto container">

          <Outlet />
        </div>
    </div>
  )
}

export default Root