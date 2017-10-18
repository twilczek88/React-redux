export const onIncrement = newBar => {
    return {
        type: 'INCREMENT',
        payload: newBar
    }
}

export const onDecrement = newBar => {
    return {
        type : 'DECREMENT',
        payload: newBar
    }
}
