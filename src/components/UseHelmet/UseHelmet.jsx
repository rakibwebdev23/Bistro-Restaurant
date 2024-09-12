
import { Helmet } from 'react-helmet';

const UseHelmet = ({helmetTitle}) => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | { helmetTitle }</title>
            </Helmet>
        </div>
    );
};

export default UseHelmet;