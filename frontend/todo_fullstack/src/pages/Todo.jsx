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
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  delFn,
  edit_Fn,
  getTodoData,
  SubmitTodo,
  Toggle_Fn,
} from "../redux-arch/main-reducer/action";

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

  const handelEdit = (id) => {
    const titel = prompt("Enter titel");
    const additionalnote = prompt("Enter Additional note");
    if (!titel || !additionalnote) {
      return alert("feilds cannot be empty");
    }

    let payload = { titel, additionalnote };
    dispatch(edit_Fn(id, payload));
  };
  const handelToggle = (id) => {
    dispatch(Toggle_Fn(id));
  };
  const handelDel = (id) => {
    dispatch(delFn(id));
  };

  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => {
    return {
      loading: store.appreducer.isloading,
      data: store.appreducer.data || [],
    };
  });
  console.log(data, "data");

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  return (
    <Box>
      <Box>
        {" "}
        {loading && (
          <Skeleton startColor="pink.500" endColor="orange.500" height="30px" />
        )}
      </Box>
      <Flex
        border="1px solid black"
        w={{ base: "100%", md: "60%", lg: "30%" }}
        m="auto"
        justifyContent={"space-between"}
        alignItems="center"
        p={10}
      >
        <Text color={"cyan.100"} fontSize={"2xl"} as="i">
          start creating TODO's
        </Text>
        <Button bg="cyan.100" onClick={onOpen}>
          Create a Todo
        </Button>
      </Flex>
      {!data ? (
        <Box
          textAlign={"center"}
          fontSize="2xl"
          border={"1px solid red"}
          p="10"
        >
          seem's like nothing here
        </Box>
      ) : null}

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
                  <TodoCard
                    elm={elm}
                    handelDel={() => handelDel(elm._id)}
                    handelEdit={() => handelEdit(elm._id)}
                    handelToggle={() => handelToggle(elm._id)}
                  />
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
