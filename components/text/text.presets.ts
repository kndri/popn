import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
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
  logo: { ...BASE, fontFamily: typography.primaryBold, fontSize: 36, letterSpacing: -2, fontWeight: "900" } as TextStyle,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontFamily: typography.primaryBold,} as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 36, fontFamily: typography.primaryBold, } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 12, color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
