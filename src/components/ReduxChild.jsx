import { useSelector } from 'react-redux';

export const ReduxChild = () => {
    const cash = useSelector(state => state.cash.cash);

    return (
        <h2>{cash}</h2>
    )
}