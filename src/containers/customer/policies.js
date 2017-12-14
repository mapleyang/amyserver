import React, { Component } from 'react'
import { Table, Form, Input, Button, Row, Col, Modal, Timeline} from 'antd'
import './index.scss'
import Operate from "./operate"
const FormItem = Form.Item;

let columns = (_this) => {
  return [{
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
    render: (text, record) => (<a onClick={_this.uploadClick.bind(_this, record)}>{text}</a>),
  }, {
    title: '保单详情',
    dataIndex: 'detail',
    key: 'detail',
    render: (text, record) => (<a onClick={_this.detailClick.bind(_this, record)}>查看</a>),
  }];
}

class Policies extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: [],
      columns: columns(this),
      uploadVisible: false,
      detailVisible: false,
      record: ""
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

  uploadClick (record) {
    this.setState({
      uploadVisible: true,
      record: record
    })
  }

  handleOk = (e) => {
    const _this = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        _this.setState({
          uploadVisible: false,
        });
      }
    });
  }

  handleCancel = (e) => {
    this.setState({
      uploadVisible: false,
      detailVisible: false
    });
  }

  detailClick (record) {
    this.setState({
      detailVisible: true,
      record: record
    });
    //获取详情请求

  }

  detailHandleOk () {
    this.setState({
      detailVisible: false
    })
  }


  searchClick () {}

  clearClick () {}


  render() {
    const { getFieldDecorator } = this.props.form;
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
          <Table className="amy-table" dataSource={this.state.dataSource} columns={this.state.columns} size="small" />
        </div>
         <Modal
          title={"投保单号为" + this.state.record.transactionID + "健康数据上传"}
          visible={this.state.uploadVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Row>
            <FormItem
              labelCol = {{ span: 6 }}
              wrapperCol = {{ span: 14 }}
              label="体重指数">
              {getFieldDecorator('weightExponent', {
                rules: [{ required: true, message: '请输入体重指数' }],
              })(
                  <Input placeholder="请输入体重指数" />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              labelCol = {{ span: 6 }}
              wrapperCol = {{ span: 14 }}
              label="血压">
              {getFieldDecorator('bloodpressureExponent', {
                rules: [{ required: true, message: '请输入血压' }],
              })(
                <Input placeholder="请输入血压" />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              labelCol = {{ span: 6 }}
              wrapperCol = {{ span: 14 }}
              label="脉压">
              {getFieldDecorator('pulsepressureExponent', {
                rules: [{ required: true, message: '请输入脉压' }],
              })(
                <Input placeholder="请输入脉压" />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              labelCol = {{ span: 6 }}
              wrapperCol = {{ span: 14 }}
              label="血小板数">
              {getFieldDecorator('plateletCount', {
                rules: [{ required: true, message: '请输入血小板数' }],
              })(
                <Input placeholder="请输入血小板数" />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem
              labelCol = {{ span: 6 }}
              wrapperCol = {{ span: 14 }}
              label="甘油三酯">
              {getFieldDecorator('serum', {
                rules: [{ required: true, message: '请输入甘油三酯' }],
              })(
                <Input placeholder="请输入甘油三酯" />
              )}
            </FormItem>
          </Row>
        </Modal>
        <Modal
          title={"投保单号为" + this.state.record.transactionID + "的保单区块数据交易追溯详情"}
          visible={this.state.detailVisible}
          onOk={this.detailHandleOk}
          onCancel={this.handleCancel}
          className="policies-detail">
          <div>
            <Timeline>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Policies = Form.create({
})(Policies);
