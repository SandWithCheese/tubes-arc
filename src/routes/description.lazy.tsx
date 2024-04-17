import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/description")({
  component: Description,
})

function Description() {
  return (
    <div
      className="items-left justify-left flex min-h-screen flex-col p-6"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-bold text-primary">
        Additional Information
      </h1>
      <p className="p-6 text-justify text-2xl font-bold text-slate-200">
        Anggota Kelompok 8:
      </p>
      <p>
        <ol className="ml-16 w-fit list-disc">
          {" "}
          <li>
            <a
              href="https://www.linkedin.com/in/ahmad-naufal-ramadan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="s inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold hover:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
              >
                Ahmad Naufal Ramadan
              </button>
              <img
                src="Member/Naufal.jpg"
                className="h-[10rem] w-[10rem] rounded-lg object-cover outline outline-white"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/haikal-assyauqi-82b704266/"
              target="_blank"
            >
              <button
                type="button"
                className="s inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold hover:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
              >
                Haikal Assyauqi
              </button>
              <img
                src="Member/Haikal.jpg"
                className="h-[10rem] w-[10rem] rounded-lg object-cover outline outline-white"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-althariq-fairuz-10503a247/"
              target="_blank"
            >
              <button
                type="button"
                className="s inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold hover:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
              >
                M. Althariq Fairuz
              </button>
              <img
                src="Member/Eriq.jpg"
                className="h-[10rem] w-[10rem] rounded-lg object-cover outline outline-white"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shafiqirvansyah/"
              target="_blank"
            >
              <button
                type="button"
                className="s inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold hover:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
              >
                Shafiq Irvansyah
              </button>
              <img
                src="Member/Shafiq.jpg"
                className="h-[10rem] w-[10rem] rounded-lg object-cover outline outline-white"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zaki-yudhistira-candra-151609212/"
              target="_blank"
            >
              <button
                type="button"
                className="s inline-flex items-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold hover:bg-gray-400 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700"
              >
                Zaki Yudhistira Candra
              </button>
              <img
                src="Member/Zaki.jpg"
                className="h-[10rem] w-[10rem] rounded-lg object-cover outline outline-white"
              ></img>
            </a>
          </li>
        </ol>
      </p>
    </div>
  )
}
