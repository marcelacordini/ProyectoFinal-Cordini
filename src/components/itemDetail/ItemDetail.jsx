import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  CardHeader,
  Th,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import ItemCount from "../itemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({
  id,
  title,
  precio,
  img,
  description,
  stock,
  ingredients,
}) => {
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      title,
      precio,
      stock,
    };

    addItem(item, quantity);
    toast(`Agregaste ${quantity} unidad/es de ${title}`);
    
  };

  return (
    <>
    
    <Card maxW="sm">
      <CardBody>
        <Image
          objectFit="cover"
          maxW={{ base: "50%", sm: "200px" }}
          src={img}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <CardHeader>
            {description} Está hecho con {ingredients}.
          </CardHeader>
          <Text color="green.700" fontSize="3xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        <Button   variant='outline' colorScheme='green' mb={3}> <ChakraLink as={Link} to = '/cart' >Ver carrito</ChakraLink></Button>
        
      </CardFooter>
    </Card>
    <ToastContainer />
    </>
  );
};

export default ItemDetail;
