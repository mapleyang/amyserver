import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Input  } from 'antd'
import './index.scss';

const SubMenu = Menu.SubMenu;

class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  loginClick () {
    location.hash = "/login";
  }

  userInfoClick () {
    location.hash = "/user";
  }


  /*登出操作*/
  loginOutClick () {
    window.$.ajax({
      type: 'GET',
      url: "/chealth/background/login/logout",
      dataType:'html',
      success:function(res){
        let data = JSON.parse(res)
        if(data.success === "true") {
          sessionStorage.removeItem("userInfo")
          location.hash = "/login"               
        }
        else {
           
        }
      },
      error:function(){
      }
    });
  }

  render() {
    return (
      <div className="header-area">
        <Row className="header-row-menu">
          <Col span={10} className="header-logo">
            <Row>
              <Col span={8} style={{textAlign: "right"}}>
                <img src="./logo.png" />
                <span className="logo-line"></span>
              </Col>
              <Col span={16}>
                <div className="header-name"><span>AmyChain区块链后台系统</span></div>
              </Col>
            </Row>
          </Col>
          <Col span={10} className="input-area">
            <Input placeholder="搜索..." />
          </Col>
          <Col span={4} className="user-area">
            <img src="./user.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

