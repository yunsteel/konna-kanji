import GradeList from '@/components/kanji/Grades/GradeList'
import { GradesScreenNavigationProps } from '@/types/KanjiStack'

const GradesScreen = (props: GradesScreenNavigationProps) => {
  return <GradeList {...props} />
}

export default GradesScreen
