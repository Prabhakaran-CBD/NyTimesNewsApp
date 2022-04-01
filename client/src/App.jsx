import { Navbar, Welcome, Loader } from "./components";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-auto gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
};

export default App;
