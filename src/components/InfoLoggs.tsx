
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const filtredInfo = test_data.filter(item => item.type === "info")

export const InfoLoggs = () => (

    <Card bordered={false} style={{ backgroundColor: "#8F91FF" }}>
        <Statistic
            title="Info"
            value={filtredInfo.length}
            valueStyle={{ color: 'black' }}
            prefix={<InfoCircleOutlined />}
            suffix="pcs"
        />
    </Card>

)