import type { RuleConfig, Unit } from 'stylelint-define-config'

export type SizesOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
