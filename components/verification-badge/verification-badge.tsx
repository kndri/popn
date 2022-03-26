import * as React from "react"
import { View } from "react-native"

import styles from "./verification-badge.styles"
import { Text, AutoImage as Image } from ".."
import { VerificationBadgeProps } from "./verification-badge.props"

export const VerificationBage: React.FC<VerificationBadgeProps> = (props): JSX.Element => {
  const { type = "icon" } = props;
  const badge = require('../../assets/images/verified_badge.png');

  return (
    <View style={type == 'icon' ? styles.ICONCONTAINER : styles.FULLCONTAINER}> 
      <Image source={badge} style={styles.ICON} />
      {type == 'full' && (
        <Text preset="bold">Authenticated</Text>
      )}
    </View>
  )
}