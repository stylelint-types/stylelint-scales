import type { RuleConfig, Unit } from 'stylelint-define-config'

export type RadiiOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
