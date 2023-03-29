import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button,
  Flex,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { getTodoData, SubmitTodo } from "../redux-arch/main-reducer/action";
import ExampleTodoCard from "../todoCard/ExampleTodoCard";
import TodoCard from "../todoCard/TodoCard";

export default function Todo() {
  const [text, setText] = useState({
    titel: "",
    additionalnote: "",
  });
  const handelChagne = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handelSubmit = () => {
    dispatch(SubmitTodo(text));
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => {
    return {
      loading: store.appreducer.isloading,
      data: store.appreducer.data,
    };
  });

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  console.log(data, "data");

  return (
    <Box>
      <Flex
        w="30%"
        m="auto"
        justifyContent={"space-between"}
        alignItems="center"
        p={10}
      >
        <Text fontSize={"2xl"} as="i">
          start creating TODO's
        </Text>
        <Button bg="yellow" onClick={onOpen}>
          Open Modal
        </Button>
      </Flex>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={7}
        p="10"
      >
        {data &&
          data.map((elm) => {
            return (
              <Box key={elm._id}>
                <GridItem>
                  <TodoCard elm={elm} />
                </GridItem>
              </Box>
            );
          })}
      </Grid>

      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Todo's</ModalHeader>
            <ModalCloseButton />
            <ModalBody gap={2}>
              <Flex flexDirection={"column"} gap="5">
                <Input
                  name="titel"
                  value={text.titel}
                  onChange={handelChagne}
                />
                <Input
                  name="additionalnote"
                  value={text.additionnote}
                  onChange={handelChagne}
                />
                <Button w="full" isLoading={loading} onClick={handelSubmit}>
                  Add todo
                </Button>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
