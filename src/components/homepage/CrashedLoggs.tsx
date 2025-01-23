import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { useFetchLogsByType } from '../../hooks/useFetchByType';

export const CrashedLoggs = () => {

    const { data: CrashedFilterData } = useFetchLogsByType({ type: 'crashed' });

    return (
        <Card bordered={false} style={{ backgroundColor: "var(--Crashed-color-)" }}>
            <Statistic
                title={<span className="crashed-title">Crashed</span>}
                value={CrashedFilterData ? CrashedFilterData.length : 0}
                valueStyle={{ color: 'var(--white-color-)' }}
                prefix={<AlertOutlined />}
                suffix="pcs"
            />
        </Card>
    );
};