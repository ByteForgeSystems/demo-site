import React from "react";

const App: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <h1>Welcome to My Static Website</h1>
      </header>

      <main className="site-main">
        <p>This is a basic static website now running as a React + TypeScript app.</p>
        <p>Edit <code>src/App.tsx</code> to add more content, links, or images.</p>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} My Website</p>
      </footer>
    </>
  );
};

export default App;
