import { Col, Row } from "antd";
import React from "react";
import { useDashboardDataStore } from "../../../context/dashboardStore";
import Light from "./components/Light";

export default function DashboardContent() {
  let { Data, clientConnected } = useDashboardDataStore();
  console.log("yes");
  return clientConnected ? (
    <Row gutter={[8, 8]} justify="start">
      {Data.map((val, i) => {
        return (
          <Col key={i}>
            <Light config={val} />
          </Col>
        );
      })}
    </Row>
  ) : (
    <div />
  );
}
