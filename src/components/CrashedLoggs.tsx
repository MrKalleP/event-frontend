import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.crashed === "true");

export const CrashedLoggs = () => (

    <Card bordered={false} style={{ backgroundColor: "#CD0205" }}>
        <Statistic
            title="Crashed"
            value={CrashedFilterData.length}
            precision={0}
            valueStyle={{ color: 'black' }}
            prefix={<AlertOutlined />}
            suffix="logs"
        />
    </Card>

);