import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/description")({
  component: Description,
})

function Description() {
  return <div className="p-2">Hello from Description!</div>
}
