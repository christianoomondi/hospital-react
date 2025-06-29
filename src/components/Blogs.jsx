import React from 'react'

const Blogs = () => {

  return (
    <>
    <span className="flex items-center">
  <span className="h-px flex-1 bg-gray-300"></span>

  <span className="shrink-0 px-4 text-gray-900">Blogs </span>

  <span className="h-px flex-1 bg-gray-300"></span>
</span>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow"
            >
              <img
                alt="Blog"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                 Health & Wellness Tips
Helping patients stay healthy with expert advice {item}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet.
                </p>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Read more
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

</>
  )
}

export default Blogs