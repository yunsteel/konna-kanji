import { FC } from 'react'
import { View } from 'react-native'

interface Props {}

const FailedToFetchFallback: FC<Props> = () => {
  return <View>데이터를 가져오는 데에 실패했어요 ㅠㅠ</View>
}

export default FailedToFetchFallback
