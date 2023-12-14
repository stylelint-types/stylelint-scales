import type { AlphaValuesOptions } from './rules/alpha-values'
import type { FontSizesOptions } from './rules/font-sizes'
import type { BorderWidthsOptions } from './rules/border-widths'
import type { FontWeightsOptions } from './rules/font-weights'
import type { LineHeightsOptions } from './rules/line-heights'
import type { RadiiOptions } from './rules/radii'
import type { LetterSpacingsOptions } from './rules/letter-spacings'
import type { SizesOptions } from './rules/sizes'
import type { SpaceOptions } from './rules/space'
import type { WordSpacingsOptions } from './rules/word-spacings'
import type { ZIndicesOptions } from './rules/z-indices'

export interface Plugins {
  'stylelint-scales': void
}

export interface RuleOptions {
  /**
   * Specify a scale for alpha values.
   *
   * This rule checks `<percentage>` alpha values.
   *
   * This rule checks within color functions using modern syntax.
   *
   * Modern color function syntax and `<percentage>` alpha values can be enforced,
   * respectively, using the [`color-function-notation`](https://stylelint.io/user-guide/rules/color-function-notation)
   * and [`alpha-value-notation`](https://stylelint.io/user-guide/rules/alpha-value-notation) rules in stylelint.
   *
   * @see [alpha-values](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/alpha-values/README.md)
   */
  'scales/alpha-values': AlphaValuesOptions

  /**
   * Specify scales for font sizes.
   *
   * This rule checks `<length>` and `<percentage>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [font-sizes](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/font-sizes/README.md)
   */
  'scales/font-sizes': FontSizesOptions

  /**
   * Specify scales for border widths.
   *
   * This rule checks `<length>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [border-widths](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/border-widths/README.md)
   */
  'scales/border-widths': BorderWidthsOptions

  /**
   * Specify a scale for font weights.
   *
   * This rule checks numeric font weights.
   *
   * Numeric font-weights can be enforced using the [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation) rule in stylelint.
   *
   * @see [font-weights](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/font-weights/README.md)
   */
  'scales/font-weights': FontWeightsOptions

  /**
   * Specify a scale for line heights.
   *
   * This rule checks unitless line heights.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [line-heights](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/line-heights/README.md)
   */
  'scales/line-heights': LineHeightsOptions

  /**
   * Specify scales for radii.
   *
   * This rule checks `<length>` and `<percentage>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [radii](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/radii/README.md)
   */
  'scales/radii': RadiiOptions

  /**
   * Specify scales for letter spacing.
   *
   * This rule checks `<length>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [letter-spacings](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/letter-spacings/README.md)
   */
  'scales/letter-spacings': LetterSpacingsOptions

  /**
   * Specify scales for sizes.
   *
   * This rule checks `<length>` and `<percentage>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [sizes](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/sizes/README.md)
   */
  'scales/sizes': SizesOptions

  /**
   * Specify scales for space.
   *
   * This rule checks `<length>` and `<percentage>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [space](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/space/README.md)
   */
  'scales/space': SpaceOptions

  /**
   * Specify scales for word spacings.
   *
   * This rule checks `<length>` and `<percentage>` values.
   *
   * This rule can be paired with the [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list) rule in stylelint.
   *
   * @see [word-spacings](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/word-spacings/README.md)
   */
  'scales/word-spacings': WordSpacingsOptions

  /**
   * Specify a scale for z-indices.
   *
   * @see [z-indices](https://github.com/jeddy3/stylelint-scales/blob/main/lib/rules/z-indices/README.md)
   */
  'scales/z-indices': ZIndicesOptions
}
