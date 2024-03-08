import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const IconHome = () => <Icon name="home" size={30} color="black" />;

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <IconButton
        icon={IconHome}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
}

export default App;
