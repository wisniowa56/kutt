import getConfig from "next/config";
import Link from "next/link";
import React from "react";

import AppWrapper from "../components/AppWrapper";
import { H2, H4, Span } from "../components/Text";
import Footer from "../components/Footer";
import ALink from "../components/ALink";
import { Col } from "../components/Layout";

const { publicRuntimeConfig } = getConfig();

const BannedPage = () => {
  return (
    <AppWrapper>
      <Col flex="1 1 100%" alignItems="center">
        <H2 textAlign="center" my={3} normal>
          Link został zbanowany z powodu rozpowszechniania{" "}
          <Span style={{ borderBottom: "1px dotted rgba(0, 0, 0, 0.4)" }} bold>
            malware lub oszustw
          </Span>
          .
        </H2>
        <H4 textAlign="center" normal>
          Jeśli zauważyłeś link do malware/oszustwa{" "}
          {publicRuntimeConfig.SITE_NAME},{" "}
          <Link href="/report">
            <ALink title="Send report">wyślij nam zgłoszenie</ALink>
          </Link>
          .
        </H4>
      </Col>
      <Footer />
    </AppWrapper>
  );
};

export default BannedPage;
