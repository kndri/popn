import React from "react"
import { View, ViewStyle} from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}

const LEFT: ViewStyle = { width: 10 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    leftIcon,
    style,
  } = props
  
  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
     
      
    </View>
  )
}
