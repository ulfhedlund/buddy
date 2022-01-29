import { Card } from "antd";
import React from "react";
import FirmwareReleaseSummary from "renderer/components/firmware/summary-variants/FirmwareReleaseSummary";
import { Centered } from "renderer/shared/layouts";

export default {
  title: "Flashing/components/FirmwareSummaryVariants/FirmwareReleaseSummary",
  component: FirmwareReleaseSummary,
};

export const example: React.FC = () => (
  <FirmwareReleaseSummary
    releaseName="EdgeTX 'lol' v2.5.0"
    targetName="FlySky Nirvana"
  />
);

export const inCard: React.FC = () => (
  <Card style={{ width: 500 }}>
    <Centered>
      <FirmwareReleaseSummary
        releaseName="EdgeTX 'Something' v2.5.0"
        targetName="FlySky Nirvana"
      />
    </Centered>
  </Card>
);
