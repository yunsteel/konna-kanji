import { getKanjiListByGrade } from '@/lib/supabase/queries/knaji/select'
import { Grade } from '@/lib/supabase/type'
import { PageParams } from '@/types/Pagination'
import { createQueryKeys } from '@lukemorales/query-key-factory'

export const kanjiQueryKeys = createQueryKeys('kanji', {
  list: (grade: Grade, pageParams: PageParams) => ({
    queryKey: [{ grade, pageParams }],
    queryFn: (ctx) => getKanjiListByGrade(grade, pageParams),
  }),
})
