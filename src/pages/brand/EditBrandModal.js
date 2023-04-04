import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function EditBrandModal({ open, onClose, brand, brandData, setBrandData }) {
  const [brandName, setBrandName] = useState(
    brand ? brand.brandName : ""
  );

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleSave = () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(brand)

    const updatedBrand= { ...brand, brandName };
    axios
      .put(
        `http://localhost:8080/BB/api/v1/brand/${brand.brandId}`,
        updatedBrand,
        config
      )
      .then((response) => {
        const updatedBrand = response.data.data;
        setBrandName("")
        onClose();
        const index = brandData.findIndex(
          (brand) => brand.brandId === updatedBrand.brandId
        );
        if (index >= 0) {
          const newBrandData = [...brandData];
          newBrandData[index] = updatedBrand;
          setBrandData(newBrandData);
        }
        onClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Brand</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="brandName"
          label="Brand Name"
          type="text"
          fullWidth
          value={brandName}
          onChange={handleBrandNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
