export const isShow = function({dispatch,state},opt){
	dispatch('IS_SHOW',opt)
}

export const single = function({dispatch,state},Que){
	dispatch('SINGLE',Que)
}
export const mutiple = function({dispatch,state},Que){
	dispatch('MUTIPLE',Que)
}

export const answer = function({dispatch,state},Que){
	dispatch('ANSWER',Que)
}

export const newOpt = function({dispatch,state},opt){
	dispatch('NEW_OPT',opt)
}

export const delOpt = function({dispatch,state},index,opt){
	dispatch('DEL_OPT',index,opt)
}
export const delQue = function({dispatch,state},index,Que){
	dispatch('DEL_QUE',index,Que)
}
export const copy = function({dispatch,state},Que,target){
	dispatch('COPY',Que,target)
}
export const saverelease = function({dispatch,state},flag,status){
	dispatch('SAVE_RELEASE',flag,status)
}

export const init = function({dispatch,state}){
	dispatch('INIT')
}

export const submit = function({dispatch,state},Que){
	dispatch('SUBMIT',Que)
}

export const calendar = function({dispatch,state}){
	dispatch('CALENDAR')
}

export const hideCal = function({dispatch,state}){
	dispatch('HIDE_CAL')
}

export const form = function({dispatch,state},Que){
	console.log(dispatch);
	dispatch('FORM',Que)
}

export const shiftUp = function({dispatch,state},index,allQue){
	dispatch('SHIFT_UP',index,allQue)
}

export const shiftDown = function({dispatch,state},index,allQue){
	dispatch('SHIFT_DOWN',index,allQue)
}