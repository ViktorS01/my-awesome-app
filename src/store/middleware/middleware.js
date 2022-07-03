import {CommentsPostActionsTypes} from "../types/comments";
import {showPopup} from "../actions/popupAction";

export const spamFilter = ({dispatch}) => {
    const badWords = ['гад', 'редиска'];

    return function (next) {
        return function (action) {
            if (action.type === CommentsPostActionsTypes.ADD_COMMENT){
                const isBadWord = badWords.some(item => item === action.payload.value);
                if (isBadWord) return dispatch(showPopup('Не материтесь!'));
            }
            return next(action);
        }
    }
}