import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

type IProps = PropsWithChildren<{}>;

const Home = ({}: IProps): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Text>home</Text>
    </SafeAreaView>
  );
};

export default Home;
