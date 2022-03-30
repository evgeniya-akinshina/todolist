import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'src/store/reducers'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
