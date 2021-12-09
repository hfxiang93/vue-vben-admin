import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'disabled',
    customRender: ({ record }) => {
      return h(Tag, { color: 'green' }, () => `${record.yearDispatch}年${record.week}周`);
    },
  },
  {
    title: '部门名称',
    dataIndex: 'departmentName',
    align: 'center',
  },
  {
    title: '创建人',
    dataIndex: 'userName',
  },
  {
    title: '状态',
    dataIndex: 'disable',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'departmentName',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'userName',
    label: '创建人',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'disable',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'departmentName',
    label: '部门名称',
    component: 'TreeSelect',
    componentProps: {
      replaceFields: {
        title: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'userName',
    label: '创建人',
    component: 'Input',
    required: true,
  },
];
