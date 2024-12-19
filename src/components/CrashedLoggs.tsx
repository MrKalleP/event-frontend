import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.type === "crashed");

export const CrashedLoggs = () => (

    <Card bordered={false} style={{ backgroundColor: "#CD0205" }}>
        <Statistic
            title="Crashed"
            value={CrashedFilterData.length}
            valueStyle={{ color: 'black' }}
            prefix={<AlertOutlined />}
            suffix="pcs"
        />
    </Card>

);