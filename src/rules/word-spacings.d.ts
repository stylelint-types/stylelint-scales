import type { RuleConfig, Unit } from 'stylelint-define-config'

export type WordSpacingsOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
