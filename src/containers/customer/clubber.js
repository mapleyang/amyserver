import React, { Component } from 'react'
import { Table, Select, Form, Input, Button, Row, Col } from 'antd'
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

const dataSource = [];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '账号',
  dataIndex: 'number',
  key: 'number',
}, {
  title: '手机',
  dataIndex: 'phone',
  key: 'phone',
},{
  title: "保单",
  dataIndex: "policies",
  key: "policies",
  render: (text, record) => (<a>查看</a>),
}];

class Clubber extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  componentWillMount () {
    let data = [];
    for(let i = 0; i < 10; i++) {
      let item = {
        name: "mapple" + i,
        number: "yzq00" + i,
        phone: "1833255603" + i
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
                label="用户姓名">
                <Input placeholder="请输入用户姓名" />
              </FormItem>
            </Col>
            <Col span={8}>
               <FormItem
                labelCol = {{ span: 6 }}
                wrapperCol = {{ span: 14 }}
                label="用户账号">
                <Input placeholder="请输入用户账号" />
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
                label="用户手机">
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

export default Clubber = Form.create({
})(Clubber);
