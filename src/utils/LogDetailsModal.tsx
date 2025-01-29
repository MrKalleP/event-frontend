import React from "react";
import { Modal, Col, Tag } from "antd";
import { FieldTimeOutlined, MessageOutlined, ProjectOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { LogDetailsModalProps } from "./Interface";

const LogDetailsModal: React.FC<LogDetailsModalProps> = ({ log, isOpen, onClose }) => {

    if (!log) return null;

    const colorMap = {
        info: "#4E688E",
        error: "#B0483A",
        warning: "#FFD790",
        crashed: "#340A0B",
    };

    const backgroundColor = colorMap[log.type as keyof typeof colorMap] || "default";
    const textColor = log.type === "warning" ? "black" : "white";

    return (
        <Modal
            footer={null}
            centered
            title="Log Details"
            open={isOpen}
            onCancel={onClose}
            style={{ padding: "1rem", textAlign: "center", fontSize: "1rem" }}
        >
            <Col style={{ textAlign: "left", padding: "1rem" }}>
                <p>
                    <strong>
                        <ProjectOutlined style={{ marginRight: ".4rem" }} />
                        Project Name:
                    </strong>{" "}
                    {log.project}
                </p>
                <p>
                    <strong>
                        <MessageOutlined style={{ marginRight: ".4rem" }} />
                        Message:
                    </strong>{" "}
                    {log.message}
                </p>
                <p>
                    <strong>
                        <FieldTimeOutlined style={{ marginRight: ".4rem" }} />
                        Last Updated:
                    </strong>{" "}
                    {format(new Date(log.date), "yyyy-MM-dd")}{" "}
                    {format(new Date(log.date), "HH:mm")}
                </p>
                <p>
                    <strong>Type:</strong>{" "}
                    <Tag color={backgroundColor} style={{ color: textColor }}>
                        {log.type}
                    </Tag>
                </p>
            </Col>
        </Modal>
    );
};

export default LogDetailsModal;