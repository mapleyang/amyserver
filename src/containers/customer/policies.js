import React, { Component } from 'react'
import { Table, Select, Form, Input, Button, Row, Col} from 'antd'
import './index.scss'
import Operate from "./operate"
import moment from 'moment';
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const modalItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
}
const Option = Select.Option;
const FormItem = Form.Item;
const InputGroup = Input.Group;

const columns = [{
  title: '投保单号',
  dataIndex: 'transactionID',
  key: 'transactionID',
}, {
  title: '保险单号',
  dataIndex: 'policyID',
  key: 'policyID',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '保单状态',
  dataIndex: 'transactionState',
  key: 'transactionState',
}, {
  title: '数据上传',
  dataIndex: 'upload',
  key: 'upload',
  render: (text, record) => (<a>{text}</a>),
}, {
  title: '保单详情',
  dataIndex: 'detail',
  key: 'detail',
  render: (text, record) => (<a>查看</a>),
}];

class Policies extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount () {
    let data = [];
    for(let i = 0; i < 10; i++) {
      let item = {
        transactionID: "00000" + i,
        policyID: "test00" + i,
        name: "mapple" + i,
        upload: i%2 ? "上传" : "已完成",
        transactionState: i%2 ? "待体检" : "核保中"
      }
      data.push(item);
    }
    this.setState({
      dataSource: data
    })
  }


  searchClick () {}

  clearClick () {}


  render() {
    return (
      <div className="clubber">
                <div className="search">
          <Row>
            <Col span={8}>
              <FormItem
                labelCol = {{ span: 6 }}
                wrapperCol = {{ span: 14 }}
                label="投保单号">
                <Input placeholder="请输入投保单号" />
              </FormItem>
            </Col>
            <Col span={8}>
               <FormItem
                labelCol = {{ span: 6 }}
                wrapperCol = {{ span: 14 }}
                label="保险单号">
                <Input placeholder="请输入保险单号" />
              </FormItem>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={12} style={{textAlign: "center"}}>
                  <Button type="primary" onClick={this.searchClick.bind(this)}>搜索</Button>
                </Col>
                <Col span={12}>
                  <Button type="primary" onClick={this.clearClick.bind(this)}>清空</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <FormItem
                labelCol = {{ span: 6 }}
                wrapperCol = {{ span: 14 }}
                label="用户姓名">
                <Input placeholder="请输入用户手机" />
              </FormItem>
            </Col>
            <Col span={8}>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </div>
        <div className="content">
          <Table className="amy-table" dataSource={this.state.dataSource} columns={columns} size="small" />
        </div>
      </div>
    );
  }
}

export default Policies = Form.create({
})(Policies);
