
import { Timeline, Tag } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Log } from "../../utils/Interface";
import { format } from "date-fns";

const colorMap = {
    info: "var(--Info-color-)",
    error: "var(--errors-color-)",
    warning: "var(--Warning-color-)",
    crashed: "var(--Crashed-color-)",
};

const TimeLine = ({ logs }: { logs: Log[] }) => {
    return (
        <main className="containerProjectLineChart"
            style={{
                backgroundColor: "white",
                maxHeight: "100vh",
                borderRadius: ".5rem",
                padding: "3rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                overflowY: "auto",
            }}>
            <Timeline>
                {logs.map((log) => (
                    <Timeline.Item
                        key={log.id}
                        color={colorMap[log.type as keyof typeof colorMap] || "gray"}
                        dot={log.type === "info" ? <SmileOutlined /> : null}
                    >
                        <section style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
                            <Tag
                                color={colorMap[log.type as keyof typeof colorMap] || "default"}
                                style={{
                                    color: log.type === "warning" ? "black" : "white",
                                    width: "4.5rem",
                                    textAlign: "center"
                                }} >
                                {log.type}
                            </Tag>
                            <h3 style={{
                                fontWeight: "600",
                                borderBottom: "1px dotted var(--Crashed-color-)",
                                width: "100%"
                            }}>
                                <span style={{ marginInline: "2rem", fontWeight: "800" }}>{format(log.date, "yyyy-MM-dd HH:mm")}</span> {log.message} </h3>

                        </section>
                    </Timeline.Item>
                ))}
            </Timeline >

        </main>
    );
};

export default TimeLine;