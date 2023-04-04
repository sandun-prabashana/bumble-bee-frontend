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

export default function EditCategoryModal({ open, onClose, category, categoryData, setCategoryData }) {
  const [categoryName, setCategoryName] = useState(
    category ? category.categoryName : ""
  );

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSave = () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const updatedCategory = { ...category, categoryName };
    axios
      .put(
        `http://localhost:8080/BB/api/v1/category/${category.categoryId}`,
        updatedCategory,
        config
      )
      .then((response) => {
        const updatedCategory = response.data.data;
        setCategoryName("")
        onClose();
        const index = categoryData.findIndex(
          (category) => category.categoryId === updatedCategory.categoryId
        );
        if (index >= 0) {
          const newCategoryData = [...categoryData];
          newCategoryData[index] = updatedCategory;
          setCategoryData(newCategoryData);
        }
        onClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="categoryName"
          label="Category Name"
          type="text"
          fullWidth
          value={categoryName}
          onChange={handleCategoryNameChange}
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
