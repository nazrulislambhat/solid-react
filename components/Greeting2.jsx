export default function Greeting2({ name, age, location }) {
  return (
    <>
      <h4>Holaa, {name}</h4>
      {age && <p>You're {age} old.</p>}
      {location ? <p>You Live in {location}</p> : <p>Location Not Provided</p>}
    </>
  );
}
