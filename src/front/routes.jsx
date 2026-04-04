import { Registro } from "./pages/Registro.jsx"; 
import {Home} from "./pages/Home.jsx";

const Router = () => {
    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Registro />} path="/registro" /> 
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};
export default Router;