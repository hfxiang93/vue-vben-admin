import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '船舶名称',
    dataIndex: 'danweimingcheng',
    align: 'left',
  },
  {
    title: '创建人',
    dataIndex: 'chuangjianren',
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
    dataIndex: 'last_modified',
    width: 180,
  },
  {
    title: '开户银行',
    dataIndex: 'kaihuyinxing',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'danweimingcheng',
    label: '船舶名称',
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
    field: 'danweimingcheng',
    label: '船舶名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentDept',
    label: '上级船舶',
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
    field: 'chuangjianren',
    label: '创建人',
    component: 'Input',
    required: true,
  },
  {
    field: 'disable',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    required: true,
  },
  {
    label: '开户银行',
    field: 'kaihuyinxing',
    component: 'InputTextArea',
  },
];
