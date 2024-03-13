import Header from "./components/header";
import Hero from "./components/hero";
import Layout from "./components/layout";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default App;
