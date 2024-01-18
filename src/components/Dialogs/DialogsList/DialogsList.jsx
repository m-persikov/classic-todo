const arr = ['Dendi', 'Masha', 'Dasha'];

export const DialogsList = () => {
  return (
    <div>
      <h2>Dialogs:</h2>
      {arr.map((name, i) => <h4 key={i}>{name}</h4>)}
    </div>
  )
}