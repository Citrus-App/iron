import type { integers } from '../lib/integers'

type marginVals = integers | 'auto'
interface MarginsTypes {
  m: marginVals
  mb: marginVals
  ml: marginVals
  mr: marginVals
  mt: marginVals
}

export default MarginsTypes
