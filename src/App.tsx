// src/App.tsx
import "./App.css";
import { Hero } from "./Hero/hero";
import { TabsSection } from "./Tabs/TabsSection";
import { Footer } from "./Footer/footer";


function App() {
  return (
    <>
      <Hero />
      <TabsSection />
      <Footer />
    </>
  );
}

export default App;