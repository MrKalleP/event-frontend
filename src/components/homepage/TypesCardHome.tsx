import { Card, Statistic } from 'antd';
import { useFetchAllLogsForProjects } from '../../hooks/useAllLogsForProjects';
import { TypesCardHomeProps } from '../../utils/Interface';


const TypesCardHome = ({ type, title, bgColor, textColor, icon: Icon, titleColor }: TypesCardHomeProps) => {
    const { data: homePageCardData = [] } = useFetchAllLogsForProjects();
    const filteredData = type ? homePageCardData.filter(log => log.type === type) : homePageCardData;
    return (
        <Card bordered={false} style={{ backgroundColor: bgColor }}>
            <Statistic
                title={<span className="card-title-homepage" style={{ color: titleColor }}>{title}</span>}
                value={filteredData.length}
                valueStyle={{ color: textColor }}
                prefix={Icon ? <Icon /> : null}
                suffix="pcs"
            />
        </Card>
    );
};

export default TypesCardHome;