import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
  letterSpacing: -0.5
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  logo: { ...BASE, fontFamily: typography.logo, fontSize: 36, letterSpacing: -2, fontWeight: "900" } as TextStyle,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontFamily: typography.primaryBold, } as TextStyle,

  extraBold: { ...BASE, fontFamily: typography.primaryExtraBold, } as TextStyle,


  largeTitle: {...BASE, fontSize: 34} as TextStyle,

  title: {...BASE, fontSize: 28} as TextStyle,

  headline: {...BASE, fontSize: 17, fontFamily: typography.primarySemiBold} as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 30, fontFamily: typography.primaryBold, } as TextStyle,

  h1: { ...BASE, fontSize: 28, fontFamily: typography.primaryBold } as TextStyle,
  h2: { ...BASE, fontSize: 24, fontFamily: typography.primaryBold } as TextStyle,
  h3: { ...BASE, fontSize: 22, fontFamily: typography.primaryBold } as TextStyle,
  h4: { ...BASE, fontSize: 16, fontFamily: typography.primarySemiBold } as TextStyle,
  h5: { ...BASE, fontSize: 14, fontFamily: typography.primaryBold } as TextStyle,

  body: { ...BASE, fontSize: 12} as TextStyle,

  caption: { ...BASE, fontSize: 12, fontFamily: typography.primaryBold, textTransform: "uppercase"} as TextStyle,

  primaryProduct: { ...BASE,fontFamily: typography.primaryMedium},

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 12, fontFamily: typography.primaryLight } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
