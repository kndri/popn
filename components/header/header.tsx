import React from "react"
import { View, ViewStyle, ImageStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "space-between",
  width: '100%'
}

const LEFT: ViewStyle = { width: 30 }
const RIGHT: ViewStyle = { width: 30 }
const ICON: ImageStyle = { height: 30, width: 30 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    leftIcon,
    style,
    headerTx,
    onRightPress,
    rightIcon
  } = props

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon style={ICON} icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      {headerTx && (
        <Text preset="header" text={`${headerTx}`} />
      )}
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon style={ICON} icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
