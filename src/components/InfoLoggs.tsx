
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

export const InfoLoggs = () => (

    <Card bordered={false} style={{ backgroundColor: "#8F91FF" }}>
        <Statistic
            title="Info"
            value={test_data.length}
            precision={2}
            valueStyle={{ color: 'black' }}
            prefix={<InfoCircleOutlined />}
            suffix="logs"
        />
    </Card>

)