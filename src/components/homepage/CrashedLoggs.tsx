import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';

export const CrashedLoggs = ({ data }) => {

    const CrashedFilterData = Array.isArray(data) ? data.filter(item => item.type === "crashed") : [];

    return (
        <Card bordered={false} style={{ backgroundColor: "var(--Crashed-color-)", padding: ".1rem" }}>
            <Statistic
                title={<span className="crashed-title">Crashed</span>}
                value={CrashedFilterData.length}
                valueStyle={{ color: 'var(--white-color-)' }}
                prefix={<AlertOutlined />}
                suffix="pcs"

            />
        </Card>
    );
};