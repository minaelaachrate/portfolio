import React, { useState } from "react";
import DeveloperProfilePage from "./DeveloperProfilePage";
import DataAnalystProfilePage from "./DataAnalystProfilePage";
import type { ProfileMode } from "../types/profile";

const Index = () => {
  const [activeProfile, setActiveProfile] = useState<ProfileMode>("developer");

  return activeProfile === "developer" ? (
    <DeveloperProfilePage onChangeProfile={setActiveProfile} />
  ) : (
    <DataAnalystProfilePage onChangeProfile={setActiveProfile} />
  );
};

export default Index;
