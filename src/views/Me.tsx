import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

type IProps = PropsWithChildren<{}>;

const Me = ({}: IProps): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Text>me</Text>
    </SafeAreaView>
  );
};

export default Me;
