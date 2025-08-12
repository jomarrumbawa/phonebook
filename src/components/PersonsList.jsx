const PersonsList = ({ personsToShow }) => {
  return (
    <>
      {personsToShow.map((p) => (
        <div key={p.id}>
          {p.name} {p.number}
        </div>
      ))}
    </>
  );
};
export default PersonsList;
