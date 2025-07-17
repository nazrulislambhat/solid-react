// import UseEffectHookTMDB from '../hooks/UseEffectHookTMDB.jsx';
// import UseRefHook from '../hooks/UseRefHook.jsx';
// import UseRefUndo from '../hooks/UseRefUndo.jsx';
// import TimerUseRef from '../hooks/TimerUseRef.jsx';
// import MemoHook from '../hooks/MemoHook.jsx';
// import LiftingState from '../components/LiftingState.jsx';
// import ReducerHook from '../hooks/ReducerHook.jsx';
// import RefHook from '../hooks/RefHook.jsx';
// import Context from '../hooks/Context.jsx';

// import Greeting from '../components/Greeting.jsx';
import { useState } from 'react';
import UserContext from '../components/UserContext.jsx';
import UserProfile from '../components/UserProfile.jsx';
function App() {
  const [user] = useState({ name: 'Nazrul Islam', age: 30 });

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Solid React Understanding</h1>
        {/* <Greeting /> */}
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
