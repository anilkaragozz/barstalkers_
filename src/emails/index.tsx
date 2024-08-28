import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type EmailProps = {
  firstName: string;
};

const baseUrl = process.env.VERCEL_URL ? `http://localhost:3000` : "";

export default function Email({ firstName }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Enhance Your Events with Barstalkers Catering Services</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  style={headerImage}
                  src={`${baseUrl}/static/logo.png`}
                  width="600"
                  height="200"
                  alt="Barstalkers"
                />
              </Column>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>BAR CATERING SERVICES</Text>
            <Text style={paragraph}>Hello, {firstName}</Text>
            <Text style={paragraph}>
              We are here to make your events unforgettable with our
              professional bar catering services. Whether you are organizing a
              corporate event or a private party, our experienced bartenders and
              extensive drink menu are at your service.
            </Text>
            <Text style={paragraph}>
              Contact us for more information about our services and to make a
              reservation.
            </Text>
          </Section>

          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={paragraph}>Thank you,</Text>
            <Text style={signature}>The Barstalkers Team</Text>
          </Section>

          <Section style={containerContact}>
            <Row>
              <Text style={contactText}>Connect with us</Text>
            </Row>
            <Row align="left">
              <Column style={iconColumn}>
                <Link href="https://www.whatsapp.com/">
                  <Img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="WhatsApp"
                  />
                </Link>
              </Column>
              <Column style={iconColumn}>
                <Link href="mailto:example@example.com">
                  <Img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/fluency/48/mail--v1.png"
                    alt="Mail"
                  />
                </Link>
              </Column>
              <Column style={iconColumn}>
                <Link href="https://instagram.com/barstalkers">
                  <Img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/instagram-new--v1.png"
                    alt="Instagram"
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Img
                  style={footerImage}
                  width="600"
                  height="50"
                  src={`${baseUrl}/static/logo.png`}
                  alt="Footer"
                />
              </Column>
            </Row>
          </Section>

          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text>© 2024 Barstalkers. All rights reserved.</Text>
            <Text>
              You received this email because you subscribed to our service. If
              you no longer wish to receive these emails, you may unsubscribe at
              any time.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f7f7f7",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const headerImage = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  display: "block",
  margin: "0 auto",
  borderRadius: "5px 5px 0 0",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
  overflow: "hidden",
  maxWidth: "600px",
  width: "100%",
};

const paragraphContent = {
  padding: "20px 40px",
};

const highlightSection = {
  backgroundColor: "#ffefd5",
  padding: "20px 40px",
  textAlign: "center",
};

const highlightText = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#d2691e",
};

const ctaSection = {
  textAlign: "center",
  padding: "20px 40px",
};

const ctaButton = {
  backgroundColor: "#d2691e",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "bold",
};

const heading = {
  fontSize: "18px",
  lineHeight: "28px",
  fontWeight: "bold",
  color: "#333333",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#555555",
};

const signature = {
  ...paragraph,
  fontSize: "16px",
  fontWeight: "bold",
};

const containerContact = {
  backgroundColor: "#f0f8ff",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
  padding: "20px 40px",
};

const contactText = {
  ...paragraph,
  fontWeight: "bold",
};

const iconColumn = {
  paddingRight: "10px",
};

const footerImage = {
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "20px auto 0",
};

const hr = {
  borderColor: "#e0e0e0",
  margin: "20px 0",
};

const footerText = {
  ...paragraph,
  fontSize: "12px",
  textAlign: "center",
  margin: 0,
};
