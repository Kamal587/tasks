import { Fragment, memo } from "react";

const MainComponent = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  return (
    <Fragment>
      <ChildComponent user={user} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(function ChildComponent({ user: { name, age } }) {
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
});

export default memo(MainComponent);
