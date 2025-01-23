import { WarningOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { useFetchLogsByType } from '../../hooks/useFetchByType';
import { LogBody } from '../../utils/Interface';


export const WarningHome = ({ data }: { data: LogBody }) => {
    const { data: warningFilterData } = useFetchLogsByType({ type: "warning" })
    return (
        <Card bordered={false} style={{ backgroundColor: "var(--Warning-color-)" }}>
            <Statistic
                title={<span className="warning-title">Warnings</span>}
                value={warningFilterData.length}
                valueStyle={{ color: 'var( --dark-color-)' }}
                prefix={<WarningOutlined />}
                suffix="pcs"
            />
        </Card>
    )
}