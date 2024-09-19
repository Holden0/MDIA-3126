import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
        <Text>This is the sushi page</Text>
        <Link href="/sandwich">Go to sandwich</Link>
    </View>
  )
}
