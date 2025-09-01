import Footer from "./components/Footer";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <section className=" flex flex-col  bg-black">
      <Header />

      <MarkdownEditor />

      <Footer />
    </section>
  );
}

export default App;
