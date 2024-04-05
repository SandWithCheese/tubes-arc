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
        <ol className="ml-16 list-disc">
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
            </a>
          </li>
        </ol>
      </p>
    </div>
  )
}
