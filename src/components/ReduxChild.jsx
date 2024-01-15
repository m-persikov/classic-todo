import { useSelector } from 'react-redux'

export const ReduxChild = () => {
    const cash = useSelector(state => state.cash);

    return (
        <div>{cash}</div>
    )
}
