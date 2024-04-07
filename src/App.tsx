import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import { Box, Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Router>
      <Flex direction="column" height="100vh">
        <Box flex={1}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <Box>
          <Nav />
        </Box>
      </Flex>
    </Router>
  );
}
