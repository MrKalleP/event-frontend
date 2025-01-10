import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../../utils/testdata.json"

const errorFilterData = test_data.filter(item => item.type === "error")

export const ErrorsHome = () => (

    <Card bordered={false} style={{ backgroundColor: "#C52E2E " }}>
        <Statistic
            title={<span className="error-title">Errors</span>}
            value={errorFilterData.length}
            valueStyle={{ color: 'white' }}
            prefix={<FireOutlined />}
            suffix="pcs"
        />
    </Card>

)