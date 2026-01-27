export interface IClickCounterProps {
  title?: string
}

export interface IClickCounterEmits {
  (e: 'decrement', count: number): void
}
