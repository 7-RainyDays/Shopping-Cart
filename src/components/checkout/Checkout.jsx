import Navbar from "../Navbar/Navbar";
import classes from "./Checkout.module.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState, useMemo } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Checkout({ cartItems, setCartItems }) {
  const rowData = useMemo(() => {
    return cartItems.map((item) => ({
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));
  }, [cartItems]);

  const [colDefs, setColDefs] = useState([
    { field: "title" },
    { field: "price" },
    { field: "quantity" },
  ]);

  return (
    <>
      <Navbar />
      <div className={classes.checkoutTable}>
        <h2>Checkout</h2>
        <div style={{ height: 500 }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </div>
    </>
  );
}
