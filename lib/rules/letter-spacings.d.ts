import type { RuleConfig, Unit } from 'stylelint-define-config'

export type LetterSpacingsOptions = RuleConfig<
  { scale: number[], units: Unit[] }[]
>
