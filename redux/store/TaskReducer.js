let initialState = {
    formInput: '',
    task: [
        {
            id: 1,
            title: 'task title one'
        },
        {
            id: 2,
            title: 'task title two'
        },
        {
            id: 3,
            title: 'task title three'
        },
    ]
}

function TaskReducer(state = initialState,action) {
    switch (action.type){
        case 'changeInput':
            return {
                ...state,
                formInput: action.payload
            }
        case 'changeTask':
            return {
                ...state,
                task: [...state.task,  action.payload]
            }
        default:
            return state
    }
}

export default TaskReducer;