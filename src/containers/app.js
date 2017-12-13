import React, { Component } from 'react'
import Header from './header/index';
import LeftMenu from "./menu/index";
import '../styles/index.scss'
import { Row, Col, Button, Card, notification  } from 'antd'

const data = [{
  title: "1",
  classname: "normal"
},{
  title: "2",
  classname: "normal"
},{
  title: "3",
  classname: "normal"
},{
  title: "4",
  classname: "normal"
}]

export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      pathname: "",
      modle: "customerService",
      data: data,
    }
  }

  componentWillMount () {
    // if(!sessionStorage.getItem("userInfo")) {
    //   location.hash = "/login"
    // }
  }

  componentDidMount () {
    this.getNewBlock()
  }

  //区块生成
  getNewBlock () {
    let _this = this;
    setInterval(function () {
      let data = _this.state.data
      let item = {
        title: _this.state.data.length + 1,
        classname: "test"
      }
      data.push(item);
      _this.setState({
        data: data
      })
    }, 4000)
  }

  getHeader () {
    let header = "";
    header = <Header setModle={this.setModle.bind(this)} />
    return header;
  }

  setModle (value) {
    this.setState({
      modle: value
    })
  }

  cardClick (value) {
    notification.open({
      message: "第" + value.title + "个区块信息",
      description: 'This is the content of the current block. This is the content of the current block. This is the content of the current block.',
    });
  }

  getLeftArea () {
    let item;
    item = <div className="main-content">
      <Row className="content-area">
        <Col span={4} className="main-left-content">
          <LeftMenu modle={this.state.modle} />
        </Col>
        <Col span={16} className="main-right-content">
          {this.props.children}
        </Col>
        <Col span={2} className="block-chain">
          <div className="block-list">
            {this.state.data.map((el, index) => {
              let item = "";
              if ((this.state.data.length - index) < 6) {
                item = <Card className={el.classname} onClick={this.cardClick.bind(this, el)}>
                  <p>{el.title}</p>
                </Card>
              }
              return item
            })}
          </div>
        </Col>
      </Row>
    </div>
    return item;
  }

  render() {
    return (
      <div className="main">
        <div className="main-header">{this.getHeader()}</div>
        {this.getLeftArea()}
      </div>
    );
  }
}