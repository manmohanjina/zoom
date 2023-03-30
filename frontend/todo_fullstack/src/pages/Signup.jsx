import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { registerFN } from "../redux-arch/auth-reducer/action";
import { delay } from "framer-motion";

export default function Signup() {
  const dispatch = useDispatch();
  const { loading, error, success, res } = useSelector((store) => {
    return {
      res: store.authreducer.res,
      loading: store.authreducer.isloading,
      error: store.authreducer.isError,
      success: store.authreducer.success,
    };
  });

  console.log(loading, error, success, res, "signpage");

  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState({
    name: "",
    email: "",
    password: "",
    security: "",
  });
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  const handelSubmit = () => {
    dispatch(registerFN(text));
    if (success && res.succ) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          {success && res ? (
            <Text color={"red"}>{res.error}</Text>
          ) : (
            <Text fontSize={"lg"} color={"gray.600"}>
              "to enjoy all of our cool features ✌️
            </Text>
          )}
        </Stack>
        <Box
          rounded={"lg"}
          bg={"transparent"}
          _hover={{ bg: "white", transitionDelay: "0.5s",transitionDuration:"0.5s" }}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired={true}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="name"
                    onChange={handelChange}
                    value={text.name}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired={true}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handelChange}
                value={text.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Security key</FormLabel>
              <Input
                type="text"
                name="security"
                onChange={handelChange}
                value={text.security}
              />
            </FormControl>
            <FormControl id="password" isRequired={true}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={text.password}
                  onChange={handelChange}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                isLoading={loading}
                onClick={handelSubmit}
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
