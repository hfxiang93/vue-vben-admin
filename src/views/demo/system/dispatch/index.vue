<template>
  <div>
    <BasicTable :row-selection="rowSelection" @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增派单</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <ShipModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAllDispatchList } from '/@/api/demo/system';

  import { useModal } from '/@/components/Modal';
  import ShipModal from './ShipModal.vue';

  import { columns, searchFormSchema } from './ship.data';

  export default defineComponent({
    name: 'DeptManagement',
    components: { BasicTable, ShipModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '派单列表',
        api: getAllDispatchList,
        fetchSetting: {
          listField: 'datalist',
          totalField: 'page.totalCount',
        },
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: true,
        striped: true,
        useSearchForm: true,
        clickToRowSelect: true,
        canColDrag: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        canResize: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });
      const rowSelection = {
        onChange: (selectedRowKeys: string[], selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.week === 44, // Column configuration not to be checked
          name: record.name,
        }),
      };

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        rowSelection,
      };
    },
  });
</script>
