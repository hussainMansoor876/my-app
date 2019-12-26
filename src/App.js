import React from 'react';
import 'antd/dist/antd.css';
import { Table, Icon, Radio, Form, Divider, Button } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: text => <a>{text}</a>,
  },
  {
    title: 'leadID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'FB Name',
    key: 'name',
    render: (text, record) => (
      <span>
        <a>Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
        <Divider type="vertical" />
        <a className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  },
  {
    title: 'By',
    dataIndex: 'by',
    key: 'by'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'key'
  }
];

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    date: 'John Brown',
    id: `${i}2`,
    phone: `New York No. ${i} Lake Park`,
    name: `My name is John Brown, I am ${i}2 years old.`,
    by: 'Hello',
    action: 'Hello 123'
  });
}


const scroll = { y: 240 };
const pagination = { position: 'bottom', defaultPageSize: 50 };

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bordered: true,
      pagination,
      size: 'default',
      rowSelection: {},
      hasData: true,
      tableLayout: undefined,
    };
  }

  handleToggle = prop => enable => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleTableLayoutChange = e => {
    this.setState({ tableLayout: e.target.value });
  };

  handleDataChange = hasData => {
    this.setState({ hasData });
  };

  showTitle = () => {
    return (
      <div>
        <Button icon="plus" style={{ paddingBottom: 2 }} />
      </div>
    )
  }

  render() {
    const { state } = this;
    return (
      <div>
        <div style={{ paddingTop: 100, marginRight: 50, marginLeft: 50 }}>
          <Form
            layout="inline"
            className="components-table-demo-control-bar"
            style={{ marginBottom: 16 }}
          >
            <Form.Item label="Size">
              <Radio.Group value={state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Table Layout">
              <Radio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
                <Radio.Button value={undefined}>Unset</Radio.Button>
                <Radio.Button value="fixed">Fixed</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
          <Table
            {...this.state}
            title={this.showTitle}
            // defaultExpandAllRows={true}
            columns={columns.map(item => ({ ...item }))}
            dataSource={data}
          />
        </div>
      </div>
    )
  }
}

export default App;
