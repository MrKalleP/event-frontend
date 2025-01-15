import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { allLogs } from './CrashedLoggs';

const errorFilterData = allLogs.filter(item => item.type === "error")

export const ErrorsHome = () => (

    <Card bordered={false} style={{ backgroundColor: "#C52E2E ", padding: ".1rem" }}>
        <Statistic
            title={<span className="error-title">Errors</span>}
            value={errorFilterData.length}
            valueStyle={{ color: 'white' }}
            prefix={<FireOutlined />}
            suffix="pcs"
            style={{ fontSize: "1rem" }}
        />
    </Card>

)