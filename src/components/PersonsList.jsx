const PersonsList = ({ personsToShow, removeContact }) => {
  return (
    <>
      {personsToShow.map((p) => (
        <div key={p.id}>
          {p.name} {p.number}{' '}
          <button onClick={() => removeContact(p.id, p.name)}>delete</button>
        </div>
      ))}
    </>
  );
};
export default PersonsList;
