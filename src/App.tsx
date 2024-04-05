import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./boname-speisekarte.pdf";

import "./App.css";

function App() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="w-screen h-screen bg-indigo-300 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-orange-600 text-4xl">
          <strong>TapDine</strong>
        </h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Speisekarte</h2>
            <p>Du willst bestellen? Dann nur zu!</p>
            <div className="card-actions justify-end">
              <a href="https://bona-me.de/wp-content/uploads/2023/08/sk-boname-factory.pdf">
                <button className="btn btn-primary">Öffnen</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Meine Bestellung</h2>
            <p>Informationen über deine laufende Bestellung</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Öffnen</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Dritte Karte</h2>
            <p>Was kann hier hin?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Öffnen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
