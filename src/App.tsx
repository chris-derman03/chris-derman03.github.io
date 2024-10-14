import background_loop from "./assets/videos/background_loop.mp4";

function App() {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src={background_loop} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
