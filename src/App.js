import Accordion from "./components/Accordion";
// import Button from "./components/Button";

function App() {
  const items = [
    {
      id: "f9dsj",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: "9d9gj",
      label: "Can I use Javascript on a project",
      content:
        "You can use Javascript on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want",
    },
    {
      id: "5dgej",
      label: "Can I use CSS on a project",
      content:
        "You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
