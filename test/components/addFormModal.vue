<template>
  <div>
    <a-modal
      v-model="trueVisible"
      title="新增干线配载"
      @ok="handleOk"
      width="80%"
    >
      <a-form :form="form" layout="inline" @submit="handleSubmit">
        <a-form-item label="客户单号">
          <a-input type="textarea" placeholder="多个请用,号连接"></a-input>
        </a-form-item>
        <a-form-item label="提货时限">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="目的地">
          <a-select style="width:80px" default-value="成都">
            <a-select-option
              v-for="(item, index) in placeArr"
              :key="index"
              :value="item"
            >
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            查询
          </a-button>
        </a-form-item>
      </a-form>
      <div class="tableContent">
        <div class="tagHeader">
          <a-button @click="handleAdd" style="margin-bottom:10px">
            添加
          </a-button>
          <a-tabs
            v-model="activeKey"
            hide-add
            type="editable-card"
            @edit="onEdit"
          >
            <a-tab-pane
              v-for="pane in panes"
              :key="pane.key"
              :tab="pane.title"
              :closable="pane.closable"
            >
            </a-tab-pane>
          </a-tabs>
        </div>

        <a-transfer
          :data-source="mockData"
          :target-keys="targetKeys"
          :disabled="disabled"
          :show-search="showSearch"
          :filter-option="
            (inputValue, item) => item.title.indexOf(inputValue) !== -1
          "
          :show-select-all="false"
          @change="onChange"
        >
          <template
            slot="children"
            slot-scope="{
              props: {
                direction,
                filteredItems,
                selectedKeys,
                disabled: listDisabled,
              },
              on: { itemSelectAll, itemSelect },
            }"
          >
            <a-table
              :row-selection="
                getRowSelection({
                  disabled: listDisabled,
                  selectedKeys,
                  itemSelectAll,
                  itemSelect,
                })
              "
              :columns="direction === 'left' ? leftColumns : rightColumns"
              :data-source="filteredItems"
              size="small"
              :style="{ pointerEvents: listDisabled ? 'none' : null }"
              :custom-row="
                ({ key, disabled: itemDisabled }) => ({
                  on: {
                    click: () => {
                      if (itemDisabled || listDisabled) return;
                      itemSelect(key, !selectedKeys.includes(key));
                    },
                  },
                })
              "
            />
          </template>
        </a-transfer>
        <!--<a-switch
      un-checked-children="disabled"
      checked-children="disabled"
      :checked="disabled"
      style="margin-top: 16px"
      @change="triggerDisable"
    />
    <a-switch
      un-checked-children="showSearch"
      checked-children="showSearch"
      :checked="showSearch"
      style="margin-top: 16px"
      @change="triggerShowSearch"
    />
    -->
      </div>
      <a-modal v-model="visible2" title="选择RDC" @ok="handleOk2">
        <a-table
          :columns="columns"
          :data-source="data"
          :row-selection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange,
          }"
        >
        </a-table>
      </a-modal>
    </a-modal>
  </div>
</template>
<script>
import difference from "lodash/difference";
const mockData = [];
const panes = [
  { title: "Tab 1", content: "Content of Tab 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab 2", key: "2" },
];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    z1: `mock${i + 1}`,
    z2: `mock${i + 1}`,
    z3: `mock${i + 1}`,
    z4: `mock${i + 1}`,
    z5: `mock${i + 1}`,
    z6: `mock${i + 1}`,
    z7: `mock${i + 1}`,
    z8: `mock${i + 1}`,
  });
}
const originTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

const leftTableColumns = [
  {
    dataIndex: "z1",
    title: "运单号",
  },
  {
    dataIndex: "z2",
    title: "到货时限",
  },
  {
    dataIndex: "z3",
    title: "客户单号",
  },
  {
    dataIndex: "z4",
    title: "下单车型",
  },
  {
    dataIndex: "z5",
    title: "件数",
  },
  {
    dataIndex: "z6",
    title: "目的地",
  },
  {
    dataIndex: "z7",
    title: "总体积",
  },
  {
    dataIndex: "z8",
    title: "总重量",
  },
];
//roc moke data
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "ROC代码",
    dataIndex: "ROC_code",
    key: "ROC_code",
  },
  {
    title: "ROC名称",
    dataIndex: "ROC_name",
    key: "ROC_name",
  },
];
const data = [
  {
    key: "1",
    index: 1,
    ROC_code: 11259874,
    ROC_name: "测试1",
  },
  {
    key: "2",
    index: 2,
    ROC_code: 112594564,
    ROC_name: "测试2",
  },
];

export default {
  props: {
    visible: {},
  },
  watch: {
    visible(val) {
      this.trueVisible = val;
    },
    trueVisible(val) {
      this.$emit("update:visible", val);
    },
  },
  data() {
    return {
      trueVisible: false,
      placeArr: ["成都", "重庆"],
      form: {},
      mockData,
      targetKeys: originTargetKeys,
      disabled: false,
      showSearch: false,
      leftColumns: leftTableColumns,
      rightColumns: leftTableColumns,
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,
      visible2: false,
      selectedRowKeys: [],
      columns,
      data,
    };
  },
  methods: {
    handleOk(e) {
      console.log(e);
      this.trueVisible = false;
    },
    handleOk2(e) {
      console.log(e);
      this.visible2 = false;
    },
    onChange(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
    },

    triggerDisable(disabled) {
      this.disabled = disabled;
    },

    triggerShowSearch(showSearch) {
      this.showSearch = showSearch;
    },
    getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
      return {
        getCheckboxProps: (item) => ({
          props: { disabled: disabled || item.disabled },
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          itemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          itemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    },
    callback(key) {
      console.log(key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    handleAdd() {
      this.visible2 = true;
    },
    add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: `New Tab ${activeKey}`,
        content: `Content of new Tab ${activeKey}`,
        key: activeKey,
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter((pane) => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>
<style scoped>
.tagHeader {
  padding-left: 20px;
  margin-left: 50%;
  margin-bottom: -17px;
}
</style>