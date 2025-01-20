
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';




export const InfoLoggs = ({ data }) => {
    const filtredInfo = Array.isArray(data) ? data.filter(item => item.type === "info") : []
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