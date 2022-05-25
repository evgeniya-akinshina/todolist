import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as commonActions } from '../store/reducers/commonActions'

export const useActions = () => {
	const dispatch = useDispatch()

	return {
		commonActions: bindActionCreators(commonActions, dispatch),
	}
}
