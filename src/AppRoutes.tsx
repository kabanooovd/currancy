import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "./pages"


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/main"} element={<Main />} />

      <Route path={"/"} element={<Navigate to={"main"} replace />} />
    </Routes>
  )
}