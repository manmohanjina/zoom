import "../index.css";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  useDisclosure,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

import ExampleTodoCard from "../todoCard/ExampleTodoCard";

import { useRef, useState } from "react";
import Type from "../typeComponent/Type";
import { Link } from "react-router-dom";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [smallerDisplay] = useMediaQuery("(max-width: 800px)");

  const ref = useRef(null);
  const [dummytodo, setDummyData] = useState([
    {
      id: 1,
      title: "learn react",
      status: true,
      additionalnote: "learn from masai",
    },
    {
      id: 2,
      title: "learn Node js",
      status: false,
      additionalnote: "learn express js as well",
    },
    {
      id: 3,
      title: "do shopping",
      status: false,
      additionalnote: "go to market",
    },
  ]);

  const [text, setText] = useState({
    title: "",
    additionalnote: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };
  const handelSubmit = () => {
    if (text.title == "" || text.additionalnote == "") {
      alert("fields cannot be empty");
      return;
    }

    const ourdata = dummytodo.map((elm) => {
      return elm.id === ref.current
        ? { ...elm, title: text.title, additionalnote: text.additionalnote }
        : elm;
    });

    setDummyData(ourdata);
    onClose();

    ref.current = null;
  };

  const handelEdit = (id) => {
    ref.current = id;
    onOpen();
  };
  const handelDel = (id) => {
    const filterData = dummytodo.filter((elm) => elm.id !== id);
    setDummyData(filterData);
  };
  const handelToggleInside = () => {
    const ourdata = dummytodo.map((elm) =>
      elm.id === ref.current ? { ...elm, status: !elm.status } : elm
    );

    setDummyData(ourdata);
    ref.current = null;
  };
  const handelToggle = (id) => {
    const ourdata = dummytodo.map((elm) =>
      elm.id === id ? { ...elm, status: !elm.status } : elm
    );

    setDummyData(ourdata);
  };

  return (
    <Box w="full" p="10" display={"flex"} flexDirection="column" gap={10}>
      <Heading
        fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
        as="b"
        color={"blackAlpha.600"}
        p={{ base: "3", md: "4", lg: "6" }}
        w={{ base: "80%", sm: "80%", lg: "80%" }}
        m="auto"
      >
        Create a memo in no time... <Type />
      </Heading>
      <Flex
        w={{ base: "80%", md: "60%", lg: "100%" }}
        m="auto"
        gap={50}
        flexDirection={smallerDisplay && "column"}
        justifyContent="space-evenly"
      >
        {dummytodo.map((elm) => (
          <Box
            bg="white.100"
            key={elm.id}
            display="flex"
            flexDirection={"column"}
          >
            <ExampleTodoCard
              elm={elm}
              handelDel={handelDel}
              handelEdit={() => handelEdit(elm.id)}
              handelToggle={handelToggle}
            />
          </Box>
        ))}
      </Flex>
      <Box p="5" w="50%" m="auto" bg="red.400" textAlign={"center"}>
        <Link to="/login">
          <Text color={"black"} as="b" fontSize={"2xl"}>
            create a account now{" "}
          </Text>
        </Link>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Todo:-</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Flex
              gap="4"
              w="full"
              flexDirection={"column"}
              alignContent="center"
              justifyItems={"center"}
              justifyContent="center"
            >
              <Box>
                <Input
                  name="title"
                  onChange={(e) => handelChange(e)}
                  value={text.title}
                  placeholder="Enter Titel for Edit"
                />
              </Box>
              <Box>
                <Input
                  name="additionalnote"
                  onChange={(e) => handelChange(e)}
                  value={text.additionalnote}
                  placeholder="Enter Additional Note for Edit"
                />
              </Box>
              <Box textAlign={"center"}>
                <Button
                  variant={"outline"}
                  colorScheme="yellow"
                  onClick={handelToggleInside}
                >
                  Toggle status
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
          <Button w="full" colorScheme="blue" mr={3} onClick={handelSubmit}>
            save
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
}
