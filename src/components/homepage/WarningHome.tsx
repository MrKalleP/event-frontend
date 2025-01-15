import { WarningOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { allLogs } from './CrashedLoggs';

const warningFilterData = allLogs.filter(item => item.type === "warning")

export const WarningHome = () => (

    <Card bordered={false} style={{ backgroundColor: "#FFFF8F", padding: ".1rem" }}>
        <Statistic
            title={<span className="warning-title">Warnings</span>}
            value={warningFilterData.length}
            valueStyle={{ color: '#07495B' }}
            prefix={<WarningOutlined />}
            suffix="pcs"
            style={{ fontSize: "1rem" }}
        />
    </Card>

)