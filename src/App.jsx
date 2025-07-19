import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastProvider } from "./components/CommonComponents/Toast/ToastProvider";


function App() {

  return (
    <>
      <ToastProvider />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
