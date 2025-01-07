import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.type === "crashed");

export const CrashedLoggs = () => (
    <Card bordered={false} style={{ backgroundColor: "#FF00E1" }}>
        <Statistic
            title={<span className="crashed-title">Crashed</span>}
            value={CrashedFilterData.length}
            valueStyle={{ color: 'white' }}
            prefix={<AlertOutlined />}
            suffix="pcs"
        />
    </Card>
);