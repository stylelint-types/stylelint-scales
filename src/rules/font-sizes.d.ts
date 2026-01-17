import type { CSSFunction, RuleConfig, Unit } from 'stylelint-define-config'

export type FontSizesOptions = RuleConfig<
  { scale: number[], units: Unit[] }[],
  [],
  {
    ignoreFunctionArguments?: Record<CSSFunction, number[]>
  }
>
