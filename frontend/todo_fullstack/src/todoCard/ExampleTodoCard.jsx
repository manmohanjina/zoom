import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";

export default function ExampleTodoCard({
  elm,
  handelEdit,
  handelDel,
  handelToggle,
}) {
  const [smallerDisplay] = useMediaQuery("(min-width: 400px)");

  return (
    <Flex
      boxShadow={"dark-lg"}
      borderRadius="40px"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
      p="10"
      gap={10}
      m="auto"
      bg={elm.status ? "" : "red.200"}
      opacity={"90%"}
    >
      <Box>
        <Input
          bg="white"
          disabled={true}
          borderRadius={"20px"}
          p="4"
          placeholder={elm.title}
        />
      </Box>

      <Box
        fontSize={"xl"}
        fontStyle="revert"
        fontWeight={"medium"}
        as={elm.status ? "s" : "i"}
      >
        {elm.additionalnote}
      </Box>
      <Box
        fontSize={"30px"}
        as="i"
        color={elm.status ? "green.500" : "red.400"}
      >
        {elm.status ? "completed" : "incomplete"}
      </Box>
      <Flex gap={4} justifyContent={"space-evenly"} p="3">
        <Box>
          <EditIcon
            boxSize={7}
            _hover={{ cursor: "pointer", color: "orange.300" }}
            onClick={handelEdit}
          />
        </Box>
        <Box onClick={() => handelToggle(elm.id)}>
          {elm.status ? (
            <ArrowDownIcon
              boxSize={7}
              _hover={{ cursor: "pointer", color: "pink.600" }}
            />
          ) : (
            <ArrowUpIcon
              boxSize={7}
              _hover={{ cursor: "pointer", color: "pink.600" }}
            />
          )}
        </Box>
        <Box>
          <DeleteIcon
            boxSize={7}
            _hover={{ cursor: "pointer", color: "red.600" }}
            onClick={() => handelDel(elm.id)}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
