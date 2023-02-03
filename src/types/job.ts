export type Task = () => unknown

export type Job = {
  id: string
  task: Task
  updateInterval: number
}
