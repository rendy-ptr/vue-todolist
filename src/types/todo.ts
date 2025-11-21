export interface Todo {
  id: number
  title: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  category?: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: number
  name: string
  color: string
  icon?: string
}

export interface TodoStats {
  total: number
  completed: number
  active: number
  highPriority: number
  dueToday: number
  progress: number
}
