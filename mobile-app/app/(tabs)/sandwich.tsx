import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
        <Text>This is the sandwich page</Text>
        <Link href="/sushi">Go to sushi</Link>
    </View>
  )
}
