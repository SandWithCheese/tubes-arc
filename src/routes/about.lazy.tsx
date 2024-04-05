import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: About,
})

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6" data-aos="fade-up">
      <h1 className="font-bold text-primary text-5xl">About Us !</h1>
      <p className="text-slate-200 text-2xl text-justify p-6" >Welcome to our API testing platform! We're here to simplify the process of testing and interacting with APIs.
        Our platform offers a user-friendly interface for making GET and POST requests to APIs, allowing you to easily retrieve and send data.
      </p>
    </div>
  )
}
