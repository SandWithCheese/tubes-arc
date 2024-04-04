import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 rounded-b-3xl bg-secondary p-6 text-xl text-primary">
      <Link to="/" className="flex items-center gap-4">
        <p className="items-center text-2xl font-bold">API TESTER</p>
        <img src="/logo.png" alt="logo" className="h-[25px] w-[32px]" />
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/description" className="[&.active]:font-bold">
          More Info
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/" className="rounded-xl bg-foreground p-2 font-bold">
          Try It Now !
        </Link>
      </div>
    </nav>
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
