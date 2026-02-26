// composables/useLocalStorage.ts
import { ref, watch, onMounted } from 'vue'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const data = ref<T>(initialValue)

  // Читаем из localStorage при монтировании (для SSR)
  onMounted(() => {
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        data.value = JSON.parse(item)
      }
    } catch (e) {
      console.error(`Ошибка чтения ${key} из localStorage:`, e)
    }
  })

  // Следим за изменениями и сохраняем
  watch(data, (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (e) {
      console.error(`Ошибка записи ${key} в localStorage:`, e)
    }
  }, { deep: true })

  return data
}
