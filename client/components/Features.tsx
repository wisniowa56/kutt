import React from "react";
import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

import FeaturesItem from "./FeaturesItem";
import { ColCenterH } from "./Layout";
import { Colors } from "../consts";
import Text, { H3 } from "./Text";

const Features = () => (
  <ColCenterH
    width={1}
    flex="0 0 auto"
    py={[64, 100]}
    backgroundColor={Colors.FeaturesBg}
  >
    <H3 fontSize={[26, 28]} mb={72} light>
      Funkcje.
    </H3>
    <Flex
      width={1200}
      maxWidth="100%"
      flex="1 1 auto"
      justifyContent="center"
      flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
    >
      <FeaturesItem title="Zarządzanie linkami" icon="edit">
        Twórz, chroń, usuwaj i monitoriuj swoje linki.
      </FeaturesItem>
      <FeaturesItem title="Własne domeny" icon="shuffle">
        Używaj własnych domen do swoich linków.
      </FeaturesItem>
      <FeaturesItem title="API" icon="zap">
        Użyj wbudowanego API by programistycznie tworzyć, usuwać lub pobierać
        skrócone adresy.
      </FeaturesItem>
      <FeaturesItem title="Darmowe i otwarte" icon="heart">
        Zupełnie darmowe i otwarte, możliwe do postawienia na swoim serwerze.
      </FeaturesItem>
    </Flex>
  </ColCenterH>
);

export default Features;
