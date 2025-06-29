import UseEffectHookTMDB from '../hooks/UseEffectHookTMDB.jsx';
import UseRefHook from '../hooks/UseRefHook.jsx';
import UseRefUndo from '../hooks/UseRefUndo.jsx';
import TimerUseRef from '../hooks/TimerUseRef.jsx';
import MemoHook from '../hooks/MemoHook.jsx';
import LiftingState from '../components/LiftingState.jsx';
import ReducerHook from '../hooks/ReducerHook.jsx';
function App() {
  return (
    <div>
      <h1>Solid React Understanding</h1>
      <LiftingState />
      <ReducerHook />
    </div>
  );
}

export default App;
