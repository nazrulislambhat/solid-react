import { useState } from 'react';

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <section>
//       <h3>{title}</h3>
//       <button onClick={() => setIsActive(!isActive)}>
//         {isActive ? 'Hide' : 'Show'}
//       </button>
//       {isActive && <p>{children}</p>}
//     </section>
//   );
// }

// export default function LiftingState() {
//   return (
//     <>
//       <Panel title="About">This is the About section.</Panel>
//       <Panel title="Contact">This is the Contact section.</Panel>
//     </>
//   );
// }

function Panel({ title, children, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      <button onClick={onShow}>{isActive ? 'Hide' : 'Show'}</button>
      {isActive && <p>{children}</p>}
    </section>
  );
}
export default function LiftingState() {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is the About section.
      </Panel>
      <Panel
        title="Contact"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is the Contact section.
      </Panel>
    </>
  );
}
