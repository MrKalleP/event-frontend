

import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const errorFilterData = test_data.filter(item => item.type === "error")

export const ErrorsHome = () => (

    <Card bordered={false} style={{ backgroundColor: "#FA8D8F" }}>
        <Statistic
            title="Errors "
            value={errorFilterData.length}
            precision={2}
            valueStyle={{ color: 'black' }}
            prefix={<FireOutlined />}
            suffix="pcs"
        />
    </Card>

)