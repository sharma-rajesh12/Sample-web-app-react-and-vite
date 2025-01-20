import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MainApp } from "./styled";
import {
  Button,
  Heading,
  Text,
  Container,
  Center,
  Highlight,
  Mark,
} from "@chakra-ui/react";

function App() {
  const storageKeyName = "count";
  const retriveCountValue = () =>
    Number(localStorage.getItem(storageKeyName) || 0);
  const [count, setCount] = useState(retriveCountValue());
  const addNumber = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    <>
      <Container maxW={["full", "container.lg"]} mt={4} mb={4}>
        <Center>
          <Heading lineHeight="tall">
            <Highlight
              query="Stranger"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              Welcome Stranger 🎉
            </Highlight>
          </Heading>
        </Center>

        <Center>
          <Text fontSize="md" fontStyle="italic">
            This is my first beautiful React Web App
          </Text>
        </Center>

        <Center m={2}>
          <Mark
            bgColor="black"
            color="white"
            fontFamily="NewYork"
            fontSize="lg"
            fontWeight="bold"
            p="1"
          >
            Count is Already {count}!
          </Mark>
        </Center>

        <Center>
          <Button
            size="md"
            height="48px"
            width="200px"
            border='2px'
            // colorScheme="teal"
            variant="solid"
            fontStyle="italic"
            onClick={() => addNumber(count)}
          >
            Count Me
          </Button>
        </Center>
      </Container>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => addNumber(count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <MainApp>
        <button onClick={() => addNumber(count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </MainApp>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
