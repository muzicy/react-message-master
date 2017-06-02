export const SHOW_TEXTAREA = 'SHOW_TEXTAREA'
export const HIDDEN_TEXTAREA = 'HIDDEN_TEXTAREA'

export const hiddenTextarea = function() {
	return {
		type: HIDDEN_TEXTAREA,
		value: false
	}
}

export const showTextarea = function() {
	return {
		type: SHOW_TEXTAREA,
		value: true
	}
}