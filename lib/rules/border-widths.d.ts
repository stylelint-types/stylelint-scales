import type { RuleConfig, Unit } from 'stylelint-define-config'

export type BorderWidthsOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
