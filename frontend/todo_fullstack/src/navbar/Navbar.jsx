import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout_Fn } from "../redux-arch/auth-reducer/action";

export default function Navbar() {
  const dispatch = useDispatch();

  const { userdata, success } = useSelector((store) => {
    return {
      userdata: store.authreducer.res.isUserPresent,
      success: store.authreducer.success,
    };
  });

  return (
    <Flex border="1px solid red" justifyContent={"space-between"} p="5">
      <Box justifyContent={"flex-start"}>logo</Box>
      <Box>toggle/dark light</Box>

      <Flex border={"1px solid red"} w="50%" justifyContent="space-between">
        <Link to="/">home</Link>
        {success ? (
          <Box>
            <Button onClick={() => dispatch(logout_Fn())}>Logout</Button>
            <Text>{`Welcome ${userdata.name}`}</Text>
          </Box>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {success && <Link to="/todo">Todo's</Link>}
        <Link to="/signup">Sign up</Link>
        <Link to="/admin">admin</Link>
      </Flex>
    </Flex>
  );
}
