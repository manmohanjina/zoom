import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFn } from "../redux-arch/auth-reducer/action";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, success, error, res, admin } = useSelector((store) => {
    return {
      loading: store.authreducer.isloading,
      success: store.authreducer.success,
      error: store.authreducer.isError,
      res: store.authreducer.res,
      admin: store.authreducer.isAdmin,
    };
  });

  const navigate = useNavigate();

  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handelSubmit = () => {
    dispatch(loginFn(text));
  };
  if (success && admin) {
    localStorage.setItem("token", JSON.stringify(res.success_token));
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  } else if (success && res.success_token) {
    localStorage.setItem("token", JSON.stringify(res.success_token));
    setTimeout(() => {
      navigate("/todo");
      console.log("navi");
    }, 1000);
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}> Log-In here!</Heading>
          {error ? (
            <Text as="b" color={"red"}>
              {error.error}
            </Text>
          ) : (
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          )}
        </Stack>
        <Box
          rounded={"lg"}
          _hover={{
            bg: "white",
            transitionDelay: "0.5s",
            transitionDuration: "0.5s",
          }}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handelChange}
                value={text.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={text.password}
                onChange={handelChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handelSubmit}
                isLoading={loading}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
