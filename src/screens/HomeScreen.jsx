import { useState } from "react";
import styled from "styled-components";
//sections
import DiscordSection from "../components/DiscordSection";
import HowToJoinSection from "../components/HowToJoinSection";
import LastNewsSection from "../components/LastNewsSection";
import WelcomeSection from "../components/WelcomeSection";

export default function HomeScreen() {
  return (
    <AppStyled>
      <WelcomeSection />
      <DiscordSection />
      <HowToJoinSection />
      <LastNewsSection />
    </AppStyled>
  );
}
const AppStyled = styled.main`
  section {
    min-height: 100vh;
  }
  > section:not(:first-child) {
    padding-top: 100px;
  }
`;
