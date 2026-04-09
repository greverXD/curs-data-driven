import { ref } from 'vue'

export const useLike = () => {
  const liked = ref(false)

  const toggle = () => {
    liked.value = !liked.value
  }

  return { liked, toggle }
}