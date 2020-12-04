import QTable from '../../src/qComponents/QTable';

const argtypes = {
  total: {
    control: { type1: 'object' }
  },
  childrenKey: {
    table: { disable: true }
  },
  expandable: {
    table: { disable: true }
  },
  indentSize: {
    table: { disable: true }
  },
  uniqueKey: {
    table: { disable: true }
  },
  pagesInExpand: {
    table: { disable: true }
  }
};

const defaultArgs = {
  separatorKeys: ['left', 'right'],
  defaultSort: {
    key: 'right1',
    direction: 'descending'
  },
  rows: [
    {
      left1: '1',
      left2: '2',
      left3: '3',
      right1: '1',
      right2: '2',
      right3: '3'
    },
    {
      left1: '4',
      left2: '5',
      left3: '6',
      right1: '4',
      right2: '5',
      right3: '6'
    },
    {
      left1: '7',
      left2: '8',
      left3: '9',
      right1: '7',
      right2: '8',
      right3: '9'
    }
  ],
  selectable: true,
  total: {
    grouping: 'total: 3',
    right1: '1',
    right2: '2',
    right3: '3'
  },
  changeSort(sort) {
    console.log('sort', sort);
  },
  customRowClass: ({ rowIndex }) => {
    if (rowIndex === 0) {
      return 'green-row';
    }

    return '';
  },
  customRowStyle: ({ rowIndex }) => {
    if (rowIndex === 2) {
      return { '--row-custom-border-color': '#ff0' };
    }

    return '';
  }
};

export default {
  title: 'Components/QTable',
  component: QTable,
  argTypes: argtypes,
  decorators: [
    () => ({ template: '<div style="width: 90vw;"><story /></div>' })
  ]
};

export const QTableStory = (_, { argTypes }) => ({
  props: Object.keys(argTypes).filter(arg => arg !== 'columns'),
  data() {
    return {
      contextMenu: [
        {
          action: 'action1',
          name: 'Показать относительные значения',
          icon: 'q-icon-percent'
        },
        {
          action: 'action2',
          name: 'Сортировать по убыванию',
          icon: 'q-icon-arrow-down'
        },
        {
          action: 'action3',
          name: 'Сортировать по возрастанию',
          icon: 'q-icon-arrow-up'
        }
      ],
      columns: [
        {
          key: 'left1',
          value: 'Left 1',
          type: 'left',
          formatter: val => `formatted_${val}`
        },
        {
          key: 'left2',
          value: 'Left 2',
          type: 'left'
        },
        {
          key: 'left3',
          value: 'Left 3',
          type: 'left'
        },
        {
          key: 'right1',
          value: 'Right 1',
          type: 'right',
          percentable: true,
          sortable: true,
          slots: {
            header: 'customHeader',
            row: 'customRow'
          }
        },
        {
          key: 'right2',
          value: 'Right 2',
          type: 'right',
          percentable: true
        },
        {
          key: 'right3',
          value: 'Right 3',
          type: 'right',
          percentable: true
        }
      ]
    };
  },
  methods: {
    handleRowClick(row) {
      console.log(row);
    },
    changeColumnsOrder({ oldPositionIndex, newPositionIndex }) {
      const cols = this.columns;
      cols.splice(newPositionIndex, 0, cols.splice(oldPositionIndex, 1)[0]);
    },
    handleAction(a, key) {
      if (a === 'action1') {
        const cols = [...this.columns];
        const currentCol = cols.find(column => key === column.key);
        currentCol.percent = !currentCol.percent;
        this.columns = cols;
      }

      if (a === 'action2') {
        this.$refs.table.setSort(key, 'descending');
      }

      if (a === 'action3') {
        this.$refs.table.setSort(key, 'ascending');
      }
    }
  },
  template: `
    <q-table
      ref="table"
      :columns="columns"
      @change-order="changeColumnsOrder"
      @change-sort="changeSort"
      @row-click="handleRowClick"
      v-bind="$props"
    >
      <template #customHeader="{ column }">
        <template v-if="column.percent">
          <span class="q-icon-percent" />
        </template>
        <span class="text" style="margin-left:8px">{{ column.value }}</span>
        <q-context-menu
          :menu-items="contextMenu"
          @action="handleAction($event, column.key)"
        />
      </template>

      <template #customRow="{ row }">
        {{ row.value }}
        <span v-if="row.column.percent">
          %
        </span>
      </template>
    </q-table>
  `
});

QTableStory.storyName = 'Default';
QTableStory.args = defaultArgs;
