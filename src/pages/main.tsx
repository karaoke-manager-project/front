import { Route, Routes } from "react-router-dom"
import { roomRoute, roomsRoute } from "../utils/routes"
import { RoomsPage } from "./room/page"
import { RoomPage } from "./room/[id]/page"

export const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<> </>} />
        <Route path={roomsRoute} element={<RoomsPage/>} />
        <Route path={roomRoute + "/:id"} element={<RoomPage/>} />
      </Routes>
    </>
  )
}
