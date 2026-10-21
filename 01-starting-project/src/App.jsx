import { useState } from "react"; //Csak komponenseken belül van értéke.

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { Header } from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  //let tabContent = 'Please click a button!';
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  function handleSelect(selectedButton){
    //console.log(`You clicked the ${selectedButton} button.`);
    //tabContent = selectedButton;
    setSelectedTopic(selectedButton.toLowerCase());
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {selectedTopic && "Please select a topic!"}
            {selectedTopic && (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
              </>
              
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;