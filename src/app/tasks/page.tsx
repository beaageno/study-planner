"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  subject: string;
  priority: string;
  completed: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch('/api/tasks', { cache: 'no-store' });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTasks();
  }, []);

  return (
    <main className="min-h-screen p-6 sm:p-12 md:p-24 bg-slate-50 dark:bg-slate-950 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="mb-2">
              <Link 
                href="/" 
                className="text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1 group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Dashboard
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              My Tasks
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Manage your upcoming assignments and stay on top of your deadlines.
            </p>
          </div>
          <Link href="/tasks/new" className="inline-flex items-center justify-center px-5 py-3 font-bold text-white transition-all bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:from-indigo-500 hover:to-blue-500 shadow-md hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
            </svg>
            Add New Task
          </Link>
        </div>

        {/* Task Grid or Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-5">
            <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin dark:border-indigo-900/40 dark:border-t-indigo-500 shadow-lg shadow-indigo-500/20"></div>
            <p className="text-lg text-slate-500 font-semibold animate-pulse dark:text-slate-400">Loading your tasks...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-800 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
                    {task.subject}
                  </span>
                  
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${
                    task.completed 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" 
                      : "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
                  }`}>
                    {task.completed ? (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Completed
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Pending
                      </>
                    )}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 leading-tight ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-600' : 'text-slate-800 dark:text-slate-100'}`}>
                  {task.title}
                </h3>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{task.dueDate}</span>
                  </div>
                  
                  {/* Visual priority marker */}
                  <div className={`text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-semibold uppercase tracking-wider ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-amber-500' : 'text-blue-500'}`}>
                    {task.priority || 'standard'}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty State when no tasks loaded */}
            {!isLoading && tasks.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
                <svg className="w-16 h-16 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No tasks found</h3>
                <p className="text-slate-500 dark:text-slate-500 max-w-sm">You've completely cleared your schedule! Time to relax or click &quot;Add New Task&quot; to get started on something new.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
