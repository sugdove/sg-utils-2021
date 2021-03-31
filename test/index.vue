<template>
  <div class="content">
    <div class="helpBox">
      <a-form layout="inline" :form="searchForm">
        <a-form-item label="客户名称">
          <a-input v-model="searchForm.name"></a-input>
        </a-form-item>
        <a-form-item label="单号">
          <a-input-number
            placeholder="运单号/客户单号"
            v-model="searchForm.numbers"
            style="width:174px"
            :min="1"
          ></a-input-number>
        </a-form-item>
        <a-form-item label="派单日期">
          <a-range-picker v-model="searchForm.dateRang" @change="onChange" />
        </a-form-item>
      </a-form>
    </div>
    <div class="btnGroup">
      <a-button @click="handleAdd">新增配载</a-button>
      <a-button :disabled="disabledChangeBtn">修改</a-button>
      <a-button>导入</a-button>
      <a-button>导出</a-button>
      <a-button :disabled="disabledDeleteBtn">删除</a-button>
    </div>
    <div class="tableContent">
      <a-table :columns="columns" :data-source="data" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
      </a-table>
    </div>
    <addFormModal :visible.sync="addFormVisible"></addFormModal>
  </div>
</template>
<script>
import addFormModal from "./components/addFormModal"
export default {
  components:{
    addFormModal
  },
  computed: {
    disabledChangeBtn(){
      if(this.selectedRowKeys.length === 1){
        return false
      }
      return true
    },
    disabledDeleteBtn(){
      if(this.selectedRowKeys.length === 0){
        return true
      }
      return false
    }
  },
  data() {
    return {
      searchForm: {},
      addFormVisible:false,
      columns: [
        {
          title: "派单号",
          dataIndex: "number",
          key: "number",
        },
        {
          title: "车辆状态",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "路线",
          dataIndex: "line",
          key: "line",
        },
        {
          title: "车牌号码",
          key: "carNumber",
          dataIndex: "carNumber",
        },
        {
          title: "司机姓名",
          key: "carName",
          dataIndex: "carName",
        },
        {
          title: "联系电话",
          key: "phoneNumber",
          dataIndex: "phoneNumber",
        },
        {
          title: "便捷GPS信号",
          key: "GPS",
          dataIndex: "GPS",
        },
        {
          title: "派单人",
          dataIndex: "sellPeopel",
          key: "sellPeopel",
        },
        {
          title: "派单时间",
          dataIndex: "sellTime",
          key: "sellTime",
        },
      ],
      data: [
        {
          key: "22",
          number: "1132",
          status: '未完成',
          line:"重庆->成都",
          carNumber: "川K1873",
          carName: ["nice", "developer"],
          phoneNumber:18482177581,
          GPS:112,
          sellPeopel:"小李",
          sellTime:"2020-9-10"
        },
        {
          key: "33",
          number: "1132",
          status: '未完成',
          line:"重庆->成都",
          carNumber: "川K1873",
          carName: ["nice", "developer"],
          phoneNumber:18482177581,
          GPS:112,
          sellPeopel:"小李",
          sellTime:"2020-9-10"
        },
      ],
      selectedRowKeys:[]
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleAdd(){
      this.addFormVisible = true
      console.log(1)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  padding: 20px;
}
.helpBox {
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  padding: 10px;
}
.btnGroup {
  margin: 10px 0px;
}
.btnGroup .ant-btn {
  margin-right: 10px;
}
</style>