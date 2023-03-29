import Typewriter from "typewriter-effect";
import "../App.css";
export default function Type() {
  return (
    <div className="type">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World")
            .start()
            .pauseFor(1000)
            .typeString("👋")
            .pauseFor("2000")
            .deleteAll()
            .typeString("create read ,store Todo's")
            .start()
            .deleteAll()
            .pause(2000)
            .typeString(" always remember your priorites")
            .start()
            .pauseFor(100);
        }}
        options={{ loop: true }}
      />
    </div>
  );
}
