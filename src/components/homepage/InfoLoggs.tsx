
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import test_data from "../../utils/testdata.json"

const filtredInfo = test_data.filter(item => item.type === "info")

export const InfoLoggs = () => (
    <Card bordered={false} style={{ backgroundColor: "#3A4DCB", padding: ".5rem" }}>
        <Statistic
            title={<span className="info-title">Info</span>}
            value={filtredInfo.length}
            valueStyle={{ color: 'white' }}
            prefix={<InfoCircleOutlined />}
            suffix="pcs"
            style={{ fontSize: "2rem" }}
        />
    </Card>

)