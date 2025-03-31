import { Timeline, Tag, Pagination } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Log } from "../../utils/Interface";
import { format, set } from "date-fns";
import { useEffect, useState } from "react";
import { ProjectLogsById } from "../../utils/fetchingFromApi/FetchProjectLogsById";

const colorMap = {
    info: "var(--Info-color-)",
    error: "var(--errors-color-)",
    warning: "var(--Warning-color-)",
    crashed: "var(--Crashed-color-)",
};

// type LogTimeLineProps = {
//     logs?: Log[];
//     totalLogs: number;
//     setLogs: () => void
// };

const LogTimeLine: React.FC<{ projectId: string }> = ({ projectId }) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [logs, setLogs] = useState<Log[]>([]);
    const [totalLogs, setTotalLogs] = useState<number>(0);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };


    useEffect(() => {
        const fetchLogs = async () => {
        
            try {
                const fetchedLogs = await ProjectLogsById(projectId as string, currentPage, itemsPerPage);
            
                const {logs, total} = fetchedLogs;

                setLogs(logs);
                setTotalLogs(total);

            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchLogs();
    }, [projectId, currentPage, itemsPerPage]);

    return (
        <main
            className="containerProjectLineChart"
            style={{
                backgroundColor: "white",
                maxHeight: "100vh",
                borderRadius: ".5rem",
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                overflowY: "auto",
            }}
        >
            <Timeline>
                {logs.map((log) => (
                    <Timeline.Item
                        key={log.id}
                        color={colorMap[log.type as keyof typeof colorMap] || "gray"}
                        dot={log.type === "info" ? <SmileOutlined /> : null}
                    >
                        <section
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "left",
                            }}
                        >
                            <Tag
                                color={colorMap[log.type as keyof typeof colorMap] || "default"}
                                style={{
                                    color: log.type === "warning" ? "black" : "white",
                                    width: "4.5rem",
                                    textAlign: "center",
                                }}
                            >
                                {log.type}
                            </Tag>
                            <h3
                                style={{
                                    fontWeight: "600",
                                    borderBottom: "1px dotted var(--Crashed-color-)",
                                    width: "100%",
                                }}
                            >
                                <span
                                    style={{ marginInline: "2rem", fontWeight: "800" }}
                                >
                                    {format(log.date, "yyyy-MM-dd HH:mm")}
                                </span>
                                {log.message}
                            </h3>
                        </section>
                    </Timeline.Item>
                ))}
            </Timeline>
            <section style={{ marginTop: "1rem", textAlign: "center" }}>
                <Pagination
                    total={totalLogs}
                    pageSize={itemsPerPage}
                    current={currentPage}
                    onChange={(page) => handlePageChange(page)}
                    showSizeChanger={true}
                    onShowSizeChange={(current, size) => {
                        setItemsPerPage(size); // Uppdatera antal objekt per sida
                        setCurrentPage(1); // Återställ till första sidan
                    }}
                    showTotal={(total) => `Total ${total} items`}
                />
            </section>
        </main>
    );
};

export default LogTimeLine;