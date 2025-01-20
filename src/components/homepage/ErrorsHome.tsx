import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';

export const ErrorsHome = ({ data }) => {
    const errorFilterData = Array.isArray(data) ? data.filter(item => item.type === "error") : []
    return (
        <Card bordered={false} style={{ backgroundColor: "var(--errors-color-)", padding: ".1rem" }}>
            <Statistic
                title={<span className="error-title">Errors</span>}
                value={errorFilterData.length}
                valueStyle={{ color: 'var(--white-color-)' }}
                prefix={<FireOutlined />}
                suffix="pcs"
            />
        </Card>

    )
}