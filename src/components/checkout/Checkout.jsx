import React, { useContext, useState } from "react";
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Checkout = () => {
  const { getQuantity } = useContext(Context);
  const navigate = useNavigate();

  if (getQuantity() === 0) {
    Swal.fire({
      title: "Su carrito está vacío",
      icon: "error",
    }).then(() => {
        navigate("/");
    })
    
    } else {
    const [user, setUser] = useState({
      name: "",
      email: "",
      repeatemail: "",
      tel: "",
    });

    const [error, setError] = useState({});
    const { cart, getTotal, clearCart, getQuantity } = useContext(Context);

    const updateUser = (event) =>
      setUser((user) => ({
        ...user,
        [event.target.name]: event.target.value,
      }));

    const validateForm = () => {
      const errors = {};

      if (!user.name) {
        errors.name = "Este campo es obligatorio";
        toast("El campo nombres es obligatorio");
      }
      setError(errors);

      if (!user.email) {
        errors.email = "Este campo es obligatorio";
        toast("El campo mail es obligatorio");
      }
      setError(errors);

      if (!user.repeatemail) {
        errors.repeatemail = "Este campo es obligatorio";
        toast("El campo repetir mail es obligatorio");
      }
      setError(errors);

      if (user.email != user.repeatemail) {
        errors.email = "Los emails no coinciden";
        toast("Los mails deben coincidir");
      }
      setError(errors);

      if (!user.tel) {
        errors.tel = "Este campo es obligatorio";
        toast("El campo teléfono es obligatorio");
      }
      setError(errors);

      if (user.tel.length < 5) {
        errors.tel = "Telefono incorrecto";
        toast("Elcampo teléfono no puede tener menos de 5 cifras");
      }
      setError(errors);

      return Object.keys(errors).length === 0;
    };

    const getOrder = async () => {
      const isFormValid = validateForm();

    

      if (isFormValid) {
        const ordersCollection = collection(db, "orders");

        try {
          for (const item of cart) {
            const productRef = doc(db, "productos", item.id);
            const productDoc = await getDoc(productRef);

            const currentStock = productDoc.data().stock;

            if (currentStock >= item.quantity) {
              await updateDoc(productRef, {
                stock: currentStock - item.quantity,
              });
            } else {
              toast(`No hay suficiente stock para ${item.title}`);
            }

            const order = {
              buyer: user,
              cart: cart,
              total: getTotal(),
            };

            const orderDocRef = await addDoc(ordersCollection, order);
            Swal.fire({
              title: "Pedido confirmado",
              text: `Su número de orden es ${orderDocRef.id}`,
              icon: "success",
            }).then(() => {
              clearCart();
              navigate("/");
            });
         
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    return (
      <Flex direction={"column"} justify={"center"} align={"center"} mt={12}>
        <Heading mb={4}>Datos de Facturación</Heading>
        <FormControl w={"40%"}>
          <Input
            type="text"
            name="name"
            variant="filled"
            placeholder="Ingrese su nombre"
            onChange={updateUser}
            mb={3}
          />
          <Input
            type="email"
            name="email"
            variant="filled"
            placeholder="Ingrese su mail"
            onChange={updateUser}
            mb={3}
          />
          <Input
            type="email"
            name="repeatemail"
            variant="filled"
            placeholder="Ingrese nuevamente su mail"
            onChange={updateUser}
            mb={3}
          />
          <Input
            type="number"
            name="tel"
            variant="filled"
            placeholder="Ingrese su teléfono"
            onChange={updateUser}
            mb={3}
          />
          <Flex justify={"center"} align={"center"} w={"100%"}>
            <Button onClick={getOrder}>Finalizar Compra</Button>
          </Flex>
        </FormControl>
        <ToastContainer />
      </Flex>
    );
  }
};
export default Checkout;
