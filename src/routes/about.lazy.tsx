import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <div
      className="flex h-[calc(100vh-92px)] flex-col items-center justify-center p-6"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-bold text-primary">About Us !</h1>
      <p className="p-6 text-center text-2xl text-slate-200">
        Welcome to our API testing platform! We're here to simplify the process
        of testing and interacting with APIs. Our platform offers a
        user-friendly interface for making HTTP requests, allowing you to easily
        retrieve and send data.
      </p>
    </div>
  )
}
