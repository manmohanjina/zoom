import { Box, Flex, Input } from "@chakra-ui/react";
import {
  EditIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
export default function TodoCard({ elm, handelDel, handelEdit, handelToggle }) {
  console.log(elm);
  return (
    <Box>
      <Flex
        boxShadow={"dark-lg"}
        flexDirection={"column"}
        borderRadius="40px"
        p="10"
        gap={10}
        bg={elm.status ? "green.200" : "red.200"}
        opacity={"900%"}
      >
        <Box>
          <Input
            bg="black"
            disabled={true}
            borderRadius={"20px"}
            fontSize="xl"
            p="3"
            placeholder={elm.titel}
          />
        </Box>

        <Box
          borderRadius={"20px"}
          bg="yellow.100"
          fontSize={"xl"}
          border={"1px solid red"}
          as="i"
        >
          {elm.additionalnote}
        </Box>
        <Box
          fontSize={"20px"}
          as="i"
          borderRadius={"20px"}
          border="1px solid red"
          bg="yellow.200"
        >
          {elm?.status ? "completed" : "incomplete"}
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
    </Box>
  );
}
