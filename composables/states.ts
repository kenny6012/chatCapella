// This kind of state management is used only for small systems
// If you are creating large systems, use Pinia

export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
