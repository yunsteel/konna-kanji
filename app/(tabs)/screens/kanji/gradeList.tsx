import GradeList from '@/components/kanji/Grades/GradeList'
import { GradesScreenNavigationProps } from '@/types/KanjiStack'

const GradeListScreen = (props: GradesScreenNavigationProps) => {
  return <GradeList {...props} />
}

export default GradeListScreen
