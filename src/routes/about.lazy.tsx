import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <div className="p-6">
      <h1>Hello from About!</h1>
    </div>
  )
}
