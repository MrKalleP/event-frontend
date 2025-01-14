import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../../utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.type === "crashed");

export const CrashedLoggs = () => (
    <Card bordered={false} style={{ backgroundColor: "#D04CC1", padding: ".5rem" }}>
        <Statistic
            title={<span className="crashed-title">Crashed</span>}
            value={CrashedFilterData.length}
            valueStyle={{ color: 'white' }}
            prefix={<AlertOutlined />}
            suffix="pcs"
            style={{ fontSize: "2rem" }}
        />
    </Card>
);