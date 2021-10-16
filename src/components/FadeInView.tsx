import React, { FC, useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const FadeInView: FC<Props> = ({ style, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};
