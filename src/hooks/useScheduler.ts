import { useEffect } from 'react'

import { Task } from 'types/job'

export const useScheduler = (task: Task | Task[], ms: number) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      if (Array.isArray(task)) {
        await Promise.all(task.map((task) => task()))
      } else {
        await task()
      }
    }, ms)

    return () => clearInterval(interval)
  }, [ms, task])
}
