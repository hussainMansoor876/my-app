import React from 'react';
import 'antd/dist/antd.css';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

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
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    date: 'John Brown',
    id: `${i}2`,
    phone: `New York No. ${i} Lake Park`,
    name: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bordered: false,
      loading: false,
      pagination,
      size: 'default',
      title: undefined,
      showHeader,
      footer,
      rowSelection: {},
      scroll: undefined,
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

  handleEllipsisChange = enable => {
    this.setState({ ellipsis: enable });
  };

  handleTitleChange = enable => {
    this.setState({ title: enable ? title : undefined }, () => {
      console.log(this.state)
    });
  };

  handleHeaderChange = enable => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = enable => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = enable => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = enable => {
    this.setState({ scroll: enable ? scroll : undefined });
  };

  handleDataChange = hasData => {
    this.setState({ hasData });
  };

  handlePaginationChange = e => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  };

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
            <Form.Item label="Bordered">
              <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
            </Form.Item>
            <Form.Item label="loading">
              <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
            </Form.Item>
            <Form.Item label="Title">
              <Switch checked={!!state.title} onChange={this.handleTitleChange} />
            </Form.Item>
            <Form.Item label="Column Header">
              <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
            </Form.Item>
            <Form.Item label="Footer">
              <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
            </Form.Item>
            <Form.Item label="Checkbox">
              <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
            </Form.Item>
            <Form.Item label="Fixed Header">
              <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
            </Form.Item>
            <Form.Item label="Has Data">
              <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
            </Form.Item>
            <Form.Item label="Ellipsis">
              <Switch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />
            </Form.Item>
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
            <Form.Item label="Pagination">
              <Radio.Group
                value={state.pagination ? state.pagination.position : 'none'}
                onChange={this.handlePaginationChange}
              >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="both">Both</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
          <Table
            {...this.state}
            // title={title()}
            columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
            dataSource={state.hasData ? data : null}
          />
        </div>
      </div>
    )
  }
}

export default App;
