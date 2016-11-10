
require('antd/dist/antd.css');

// bingo dig Components
exports.Charts = {
    Map: {
        China: require("./chart/map/china"),
        GuangDong: require("./chart/map/guangdong"),
        GuiZhou: require("./chart/map/guizhou"),
        JiangXi: require("./chart/map/jiangxi"),
        SiChuan: require("./chart/map/sichuan"),
    },
    MapGeo:{
        GuangDong: require("./chart/map/guangdong_geo")
    },
    Chart: require("./chart"),
    Echarts: require("./chart/echarts")
};

// ant Design Components
export { Affix } from 'antd';

export { Anchor } from 'antd';

export { AutoComplete } from 'antd';

export { Alert } from 'antd';

export { BackTop } from 'antd';

export { Badge } from 'antd';

export { Breadcrumb } from 'antd';

export { Button } from 'antd';

export { Calendar } from 'antd';

export { Card } from 'antd';

export { Collapse } from 'antd';

export { Carousel } from 'antd';

export { Cascader } from 'antd';

export { Checkbox } from 'antd';

export { Col } from 'antd';

export { DatePicker } from 'antd';

export { Dropdown } from 'antd';

export { Form } from 'antd';

export { Icon } from 'antd';

export { Input } from 'antd';

export { InputNumber } from 'antd';

export { LocaleProvider } from 'antd';

export { message } from 'antd';

export { Menu } from 'antd';

export { Modal } from 'antd';

export { notification } from 'antd';

export { Pagination } from 'antd';

export { Popconfirm } from 'antd';

export { Popover } from 'antd';

export { Progress } from 'antd';

export { Radio } from 'antd';

export { Rate } from 'antd';

export { Row } from 'antd';

export { Select } from 'antd';

export { Slider } from 'antd';

export { Spin } from 'antd';

export { Steps } from 'antd';

export { Switch } from 'antd';

export { Table } from 'antd';

export { Transfer } from 'antd';

export { Tree } from 'antd';

export { TreeSelect } from 'antd';

export { Tabs } from 'antd';

export { Tag } from 'antd';

export { TimePicker } from 'antd';

export { Timeline } from 'antd';

export { Tooltip } from 'antd';

export { Mention } from 'antd';

export { Upload } from 'antd';