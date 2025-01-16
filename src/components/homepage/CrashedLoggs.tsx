import { AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';

export const CrashedLoggs = ({ data }) => {

    const CrashedFilterData = Array.isArray(data) ? data.filter(item => item.type === "crashed") : [];

    return (
        <Card bordered={false} style={{ backgroundColor: "#D04CC1", padding: ".1rem" }}>
            <Statistic
                title={<span className="crashed-title">Crashed</span>}
                value={CrashedFilterData.length}
                valueStyle={{ color: 'white' }}
                prefix={<AlertOutlined />}
                suffix="pcs"
                style={{ fontSize: "1rem" }}
            />
        </Card>
    );
};