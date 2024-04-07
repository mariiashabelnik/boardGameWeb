import { Box, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PhoneIcon, AddIcon, InfoIcon } from "@chakra-ui/icons";

export default function Nav() {
  const navLinks = [
    { text: "Home", link: "/", icon: <PhoneIcon /> },
    { text: "About", link: "/about", icon: <AddIcon /> },
    { text: "Login", link: "/login", icon: <InfoIcon /> },
  ];
  const nav = navLinks.map((item) => {
    return (
      <Box flex={1}>
        <Link to={item.link}>
          <Flex direction={"column"} alignItems={"center"}>
            {item.icon}
            {item.text}
          </Flex>
        </Link>
      </Box>
    );
  });
  return (
    <Box h={""}>
      <Flex direction={"row"}>{nav}</Flex>
    </Box>
  );
}
