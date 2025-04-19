import type { RuleConfig, Unit } from 'stylelint-define-config'

export type SpaceOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
