import React from "react";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";

const PaypalCheckoutButton = ({ order }) => {
  const paypalConfig = {
    currency: "MXN",
    env: "sandbox",
    client: {
      sandbox:
        "AQme60jFi6hE4Vh9tfOD7bqUPiPcQ2HR_mxHgyT-drt6tLlPBMJ4ZZpsCIA1gEWxajgMA73a8uD3choj",
      production: "-- id--",
    },
    style: {
      label: "pay",
      size: "medium",
      shape: "pill",
      color: "black",
    },
  };

  const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: order.total,
            currency: paypalConfig.currency,
          },
          description: "compra de calzado en NikeApp NEII",
          custom: order.customer || "",
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: "contacto: 4492258667, sirilo99x3@gmail.com",
    };
    return actions.payment.create({ payment });
  };

  const onAuthorize = (data, actions) => {
    return actions.payment
      .execute()
      .then((response) => {
        console.log(response);
        console.log(response.id);
        alert(`El pago fue procesado correctamente, id: ${response.id} `);
      })
      .catch((error) => {
        console.log(error);
        alert("Error al procesar el pago con PayPal");
      });
  };
  const onError = (error) => {
    console.log(error);
    alert(
      "ah ocurrido un error, El pago no fue realizado, intentelo nuevamente"
    );
  };
  const onCancel = (data, actions) => {
    alert("Error, has cancelado el proceso de pago");
  };

  return (
    <PayPalButton
      env={paypalConfig.env}
      client={paypalConfig.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConfig.style}
      commit
      locale="es_MX"
    />
  );
};
export default PaypalCheckoutButton;
