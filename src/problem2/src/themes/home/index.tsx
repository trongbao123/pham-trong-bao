import { Outlet } from "react-router";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

function Home() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Home;