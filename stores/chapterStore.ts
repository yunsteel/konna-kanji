import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ChapterState {
  chapter: number
  setChapter: (chapter: number) => void
}

export const useChapterStore = create(
  persist<ChapterState>(
    (set, get) => ({
      chapter: 1,
      setChapter: (chapter) => set({ chapter }),
    }),
    { name: 'chapter' },
  ),
)
