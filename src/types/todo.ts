export interface Todo {
  id: number
  title: string
  status: 'pending' | 'in-progress' | 'completed'
}


export interface TodoStats {
  total: number
  completed: number
  active: number
  highPriority: number
  dueToday: number
  progress: number
}
