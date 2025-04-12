import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Rating,
    Grid,
    Container,
    Box,
    Snackbar,
    Alert,
  } from "@mui/material";
  import { useState } from "react";
  
  import image1 from "../../Assests/headphone.webp";
  import image2 from "../../Assests/Smartwatch-Da-Apple.webp";
  import image3 from "../../Assests/8743024fa6c2a7a62f8a2d85ca0d4b46.jpg";
  import image4 from "../../Assests/images.jpg";
  import image5 from "../../Assests/iphone.png";
  import image6 from "../../Assests/samsung.webp";
  import image7 from "../../Assests/macbook-air-midnight1.jpg";
  import image8 from "../../Assests/Airpods-Pro-1.webp";
  
  const products = [
    { name: "Wireless Headphones", price: 59.99, rating: 4.5, image: image1 },
    { name: "Smart Watch", price: 45.99, rating: 4, image: image2 },
    { name: "Gaming Mouse", price: 29.99, rating: 4.2, image: image3 },
    { name: "Bluetooth Speaker", price: 39.99, rating: 4.7, image: image4 },
    { name: "iPhone 16 Pro Max", price: 999.99, rating: 4.5, image: image5 },
    { name: "Samsung Galaxy S25 Ultra", price:2355.5, rating: 4, image: image6 },
    { name: "MacBook Air M2", price: 1229.99, rating: 4.2, image: image7 },
    { name: "Apple AirPods Pro", price: 139.99, rating: 4.7, image: image8 },
  ];
  
  const ProductSection = () => {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");
  
    const handleAddToCart = (productName) => {
      setSelectedProduct(productName);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          🛍️ Our Products
        </Typography>
  
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: 260,
                  borderRadius: 4,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
  
                <CardContent>
                  <Typography variant="h6" fontWeight="600" gutterBottom noWrap>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Box mt={1}>
                    <Rating
                      value={product.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </Box>
                </CardContent>
  
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={() => handleAddToCart(product.name)}
                    sx={{
                      py: 1,
                      fontWeight: "bold",
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                      "&:hover": {
                        backgroundColor: "#c62828",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
  
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {selectedProduct} added to cart!
          </Alert>
        </Snackbar>
      </Container>
    );
  };
  
  export default ProductSection;
  