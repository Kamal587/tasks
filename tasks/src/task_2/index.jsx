import { Fragment, memo } from "react";

const MainComponent2 = () => {
  const makeLog = () => console.log("hi from MainComponent"); // function to make logs from MainComponent

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
));

export default memo(MainComponent2);
