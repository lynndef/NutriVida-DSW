import { Outlet } from "react-router-dom"
import Sidebar from '../components/ui/SideBarUI'

export function AdminUI() {
  return (
    <section className="flex bg-white">
      <Sidebar children={undefined} />
      <Outlet />
    </section>
  )
}
