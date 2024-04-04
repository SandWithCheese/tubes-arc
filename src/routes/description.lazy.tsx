import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/description")({
  component: Description,
})

function Description() {
  return (
    <div className="p-6">
      <h1>Hello from Description!</h1>
    </div>
  )
}
