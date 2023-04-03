import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import Iconify from "../components/iconify";
import { fShortenNumber } from "../utils/formatNumber";
import axios from "axios";
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from "../sections/@dashboard/app";

export default function DashboardAppPage() {
  const theme = useTheme();
  const [customerCount, setCustomerCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
  
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    // Retrieve the customer count from the backend API
    axios.get('http://localhost:8080/BB/api/v1/customer/count', config)
      .then((response) => {
        setCustomerCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  
    // Retrieve the product count from the backend API
    axios.get('http://localhost:8080/BB/api/v1/product/count', config)
      .then((response) => {
        setProductCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  
    // Retrieve the category count from the backend API
    axios.get('http://localhost:8080/BB/api/v1/category/count', config)
      .then((response) => {
        setCategoryCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  
    // Retrieve the brand count from the backend API
    axios.get('http://localhost:8080/BB/api/v1/brand/count', config)
      .then((response) => {
        setBrandCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Customer"
              total={customerCount}
              icon={"raphael:customer"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Catergary"
              total={categoryCount}
              color="info"
              icon={"carbon:collapse-categories"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Brand"
              total={brandCount}
              color="warning"
              icon={"fluent-mdl2:verified-brand"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Product"
              total={productCount}
              color="error"
              icon={"fluent-mdl2:product"}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Team A",
                  type: "column",
                  fill: "solid",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
