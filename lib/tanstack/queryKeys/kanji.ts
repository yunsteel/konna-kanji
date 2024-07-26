import { getKanjiListByGrade } from '@/lib/supabase/queries/kanji/select'
import { Grade } from '@/lib/supabase/type'
import { PageParams } from '@/types/Pagination'
import { createQueryKeys } from '@lukemorales/query-key-factory'

export const kanjiQueryKeys = createQueryKeys('kanji', {
  metadata: (grade: Grade, chapter: number) => ({
    queryKey: [{ grade, chapter }],
    queryFn: (ctx) => {},
  }),
  list: (grade: Grade, pageParams: PageParams) => ({
    queryKey: [{ grade, pageParams }],
    queryFn: (ctx) => getKanjiListByGrade(grade, pageParams),
  }),
})
