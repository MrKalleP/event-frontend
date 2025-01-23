
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { useFetchLogsByType } from '../../hooks/useFetchByType';
import { LogBody } from '../../utils/Interface';

export const InfoLoggs = ({ data }: { data: LogBody[] }) => {

    const { data: filtredInfo } = useFetchLogsByType({ type: "info" })

    return (
        <Card bordered={false} style={{ backgroundColor: "var(--Info-color-)" }}>
            <Statistic
                title={<span className="info-title">Info</span>}
                value={filtredInfo.length}
                valueStyle={{ color: 'var(--white-color-)' }}
                prefix={<InfoCircleOutlined />}
                suffix="pcs"

            />
        </Card>

    )
}