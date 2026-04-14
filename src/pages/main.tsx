import { Route, Routes } from "react-router-dom"
import { RoomsRoute } from "../utils/routes"
import { RoomsPage } from "./rooms/page"

export const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<> </>} />
        <Route path={RoomsRoute} element={<RoomsPage/>} />
      </Routes>
    </>
  )
}
