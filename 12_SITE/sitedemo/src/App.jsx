  // Como vai ser usado o Tailwind, o App.css foi deletado porque não
  // tem necessidade de existir :D
  // import './App.css'
  
  // Componentes
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import Features from "./components/Features";
  import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

  function App() {
    
    return (
      <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
        
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />

      </div>
    );
  }

  export default App;
