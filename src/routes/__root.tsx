import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

function Navbar() {
  return (
    <div className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/description" className="[&.active]:font-bold">
        Description
      </Link>
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
})
