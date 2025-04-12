import React from "react";
import { Button, Row, Col, Typography, Image } from "antd";
import heroLogo from "../../Assests/hero-logo.png";
import heroImage from "../../Assests/hero-Image.jpg";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "80px 20px",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        gutter={[48, 48]}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <Col xs={24} md={12} lg={10} style={{ padding: "0 24px" }}>
          <Title
            level={1}
            style={{
              fontSize: "3.2rem",
              lineHeight: 1.2,
              marginBottom: 28,
              fontWeight: 700,
              color: "#2d3436",
            }}
          >
            Power Up Your World with{" "}
            <span style={{ color: "#1890ff" }}>ElectroNest</span>
            <br />
            Smart Tech for 2025
          </Title>

          <Paragraph
            style={{
              fontSize: "1.1rem",
              color: "#636e72",
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Discover top-rated gadgets and smart electronics at unbeatable prices.
            <strong> Free Express Delivery </strong> |
            <strong> 24/7 Tech Support </strong> |
            <strong> 100% Original Products</strong>
          </Paragraph>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button
              type="primary"
              size="large"
              style={{
                padding: "0 45px",
                height: 52,
                fontSize: 16,
                background: "#1890ff",
                border: "none",
                borderRadius: 8,
              }}
            >
              🛍️ Shop Electronics
            </Button>

            <Button
              size="large"
              style={{
                padding: "0 45px",
                height: 52,
                fontSize: 16,
                borderColor: "#1890ff",
                color: "#1890ff",
                borderRadius: 8,
              }}
            >
              🔍 New Arrivals
            </Button>
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 24,
              alignItems: "center",
            }}
          >
            <img
              src={heroLogo}
              alt="secure-payment"
              style={{ height: 40, opacity: 0.8 }}
            />
            <span style={{ color: "#636e72", fontSize: 14 }}>
              100% Secure Payments
            </span>
          </div>
        </Col>

        <Col xs={24} md={12} lg={14} style={{ position: "relative" }}>
          <Image
            src={heroImage}
            preview={false}
            style={{
              borderRadius: 20,
              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
              transform: "translateY(0)",
              transition: "transform 0.3s ease",
            }}
            width="100%"
            height={520}
            className="hover-scale"
          />

          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "-5%",
              background: "#fff",
              padding: "12px 24px",
              borderRadius: 8,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: 0, color: "#2d3436" }}>
              🎉 50% OFF
              <br />
              <span style={{ fontSize: 12 }}>First Order</span>
            </h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
