import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../../utils/testdata.json";


export const allLogs = Object.values(test_data.projects).flatMap(project => project.logs);


const CrashedFilterData = allLogs.filter(item => item.type === "crashed");

export const CrashedLoggs = () => (
    <Card bordered={false} style={{ backgroundColor: "#D04CC1", padding: ".1rem" }}>
        <Statistic
            title={<span className="crashed-title">Crashed</span>}
            value={CrashedFilterData.length}
            valueStyle={{ color: 'white' }}
            prefix={<AlertOutlined />}
            suffix="pcs"
            style={{ fontSize: "1rem" }}
        />
    </Card>
);