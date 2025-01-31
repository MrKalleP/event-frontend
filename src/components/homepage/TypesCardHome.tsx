import { Card, Statistic } from 'antd';
import { useFetchLogsByType } from '../../hooks/useFetchByType';
import { TypesCardHomeProps } from '../../utils/Interface';


const TypesCardHome = ({ type, title, bgColor, textColor, icon: Icon }: TypesCardHomeProps) => {
    const { data: homePageCardData = [] } = useFetchLogsByType({ type });

    return (
        <Card bordered={false} style={{ backgroundColor: bgColor }}>
            <Statistic
                title={<span className="card-title-homepage ">{title}</span>}
                value={homePageCardData.length}
                valueStyle={{ color: textColor }}
                prefix={Icon ? <Icon /> : null}
                suffix="pcs"
            />
        </Card>
    );
};

export default TypesCardHome;