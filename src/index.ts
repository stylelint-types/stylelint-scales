import type { Plugins, RuleOptions } from './types.js'

declare module 'stylelint-define-config' {
  export interface CustomPlugins extends Plugins {}
  export interface CustomRuleOptions extends RuleOptions {}
}
