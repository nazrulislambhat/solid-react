import { useContext } from 'react';
import UserContext from './UserContext';

export default function Username() {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>Username: {user.name}</h4>
      <p>Age: {user.age}</p>
    </div>
  );
}
