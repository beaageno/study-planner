import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="z-10 w-full max-w-4xl items-center justify-between font-sans text-sm">
        <div className="flex flex-col items-center text-center space-y-8 bg-white/60 dark:bg-slate-900/60 p-10 sm:p-16 rounded-3xl backdrop-blur-md border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-2 shadow-inner">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Student Task Planner
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 drop-shadow-sm">
            Welcome to Study Planner
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A simple, intuitive companion to help you organize assignments, track upcoming deadlines, and supercharge your academic productivity.
          </p>
          
          <div className="pt-8 w-full sm:w-auto">
            <Link
              href="/tasks"
              className="group relative flex sm:inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-slate-900 overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-2 text-lg">
                View Tasks
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
