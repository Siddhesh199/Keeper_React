import React from "react";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Note from "../src/components/Note";
import notes from "../src/notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
