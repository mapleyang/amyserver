const MenuList = {
  group: [{
    key: "channels",
    icon: "appstore",
    title: "渠道用户",
    children: []
  },{
    key: "ghmanager",
    icon: "appstore",
    title: "GH 管理员",
    children: []
  },{
    key: "ghassist",
    icon: "appstore",
    title: "GH 客服管理",
    children: []
  }],
  base: [{
    key: "base_physical",
    icon: "appstore",
    title: "体检服务",
    children: [{
      key: "base_physical_area",
      icon: "",
      title: "服务区域"
    },{
      key: "base_physical_institution",
      icon: "",
      title: "服务机构"
    },{
      key: "base_physical_combo",
      icon: "",
      title: "服务套餐"
    }]
  },{
    key: "base_expert",
    icon: "appstore",
    title: "专家预约",
    children: [{
      key: "base_expert_hospital",
      icon: "",
      title: "服务医院"
    }]
  }],
  analysis: [{
    key: "analysis_user",
    icon: "appstore",
    title: "用户分析"
  },{
    key: "analysis_service",
    icon: "appstore",
    title: "服务分析"
  }],
  project: [{
    key: "project",
    icon: "appstore",
    title: "项目管理"
  }],
  customerService: [{
    key: "clubberinfo",
    icon: "appstore",
    title: "用户信息"
  },{
    key: "policies",
    icon: "appstore",
    title: "保单信息"
  },{
    key: "blockoperate",
    icon: "appstore",
    title: "区块链操作"
  },{
    key: "userdata",
    icon: "appstore",
    title: "数据资产"
  }],
}

export default MenuList;