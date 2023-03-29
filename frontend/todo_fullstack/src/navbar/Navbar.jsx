import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex border="1px solid red" justifyContent={"space-between"} p="5">
      <Box justifyContent={"flex-start"}>logo</Box>
      <Box>toggle/dark light</Box>

      <Flex border={"1px solid red"} w="50%" justifyContent="space-between">
        <Link to="/">home</Link>
        <Link to="/admin">admin</Link>
         <Box>login</Box>

      </Flex>
    </Flex>
  );
}
