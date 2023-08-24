import './normalize.css'
import './fonts/fonts.css'
import './app.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage.jsx";
import FormPage from "./pages/main/FormPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/form'} element={<FormPage/>}/>
            </Routes>
        </>
    )
}

export default App
