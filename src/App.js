import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calender-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>Countdown to your special date!</p>
        </div>
        <div>
          <section>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
