import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout_Fn } from "../redux-arch/auth-reducer/action";

export default function Navbar() {
  const dispatch = useDispatch();

  const { userdata, success, lsucc } = useSelector((store) => {
    return {
      userdata: store.authreducer.res.isUserPresent,
      success: store.authreducer.success,
      lsucc: store.authreducer.lsuccess,
    };
  });

  return (
    <Flex
      
      w={{ base: "full", md: "full", lg: "100%" }}
      justifyContent={"space-between"}
      p="5"
    >
      <Flex
        
        ml={{ base: "0%", md: "30%", lg: "50%" }}
        w={{ base: "full", base: "800%", lg: "50%" }}
        justifyContent="space-between"
      >
        <Link to="/">
          <Button borderRadius={"20px"} colorScheme="teal">
            Home
          </Button>
        </Link>
        {success && lsucc ? (
          <Box borderRadius={"20px"}>
            <Button bg="red.500" onClick={() => dispatch(logout_Fn())}>
              Logout
            </Button>
            <Text>{`Welcome ${userdata?.name}`}</Text>
          </Box>
        ) : (
          <Link to="/login">
            <Button borderRadius={"20px"} colorScheme={"teal"}>
              Login
            </Button>
          </Link>
        )}
        {success && lsucc ? (
          <Link to="/todo">
            <Button borderRadius={"20px"} colorScheme={"teal"}>
              Todo's
            </Button>
          </Link>
        ) : null}
        <Link to="/signup">
          <Button borderRadius={"20px"} colorScheme={"teal"}>
            Signup
          </Button>
        </Link>
        <Link to="/admin">
          <Button borderRadius={"20px"} colorScheme={"teal"}>
            Admin
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
