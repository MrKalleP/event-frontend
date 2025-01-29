import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { useFetchLogsByType } from '../../../hooks/useFetchByType';

export const ErrorsHome = () => {
    const { data: errorFilterData } = useFetchLogsByType({ type: "error" })
    return (
        <Card bordered={false} style={{ backgroundColor: "var(--errors-color-)" }}>
            <Statistic
                title={<span className="error-title">Errors</span>}
                value={errorFilterData ? errorFilterData.length : 0}
                valueStyle={{ color: 'var(--white-color-)' }}
                prefix={<FireOutlined />}
                suffix="pcs"
            />
        </Card>

    )
}