import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastProvider } from "./components/CommonComponents/Toast/ToastProvider";
import { ThemeContext } from "./Contexts/ThemeContext";
import { useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const value = { isDarkMode, setIsDarkMode }
  return (
    <>
      <ThemeContext.Provider value={value}>
        <ToastProvider />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
