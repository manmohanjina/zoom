import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
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
  return (
    <Flex
      boxShadow={"dark-lg"}
      flexDirection={"column"}
      borderRadius="40px"
      p="10"
      gap={10}
      bg={elm.status ? "green.200" : "red.200"}
      opacity={"90%"}
    >
      <Box>
        <Input
          bg="white"
          disabled={true}
          borderRadius={"20px"}
          p="3"
          placeholder={elm.title}
        />
      </Box>

      <Box fontSize={"xl"} border={"1px solid red"} as="i">
        {elm.additionalnote}
      </Box>
      <Box fontSize={"20px"} as="i">
        {elm.status ? "completed" : "incomplete"}
      </Box>
      <Flex justifyContent={"space-evenly"} p="3">
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
