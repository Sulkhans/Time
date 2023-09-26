import DisplayDate from "./DisplayDate";
import DisplayTime from "./DisplayTime";

const DisplayClock = () => {
  return (
    <main className="container">
      <div className="display">
        <DisplayDate />
        <DisplayTime />
      </div>
    </main>
  );
};

export default DisplayClock;
