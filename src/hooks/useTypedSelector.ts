import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store/types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
