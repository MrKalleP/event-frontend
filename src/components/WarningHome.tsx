
import { WarningOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const warningFilterData = test_data.filter(item => item.type === "warning")

export const WarningHome = () => (

    <Card bordered={false} style={{ backgroundColor: "#FFF266" }}>
        <Statistic
            title="Warnings"
            value={warningFilterData.length}
            valueStyle={{ color: 'black' }}
            prefix={<WarningOutlined />}
            suffix="pcs"
        />
    </Card>

)