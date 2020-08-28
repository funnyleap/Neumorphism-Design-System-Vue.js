import vClickOutside from 'v-click-outside';

import QButton from './QButton';
import QBreadcrumbs from './QBreadcrumbs';
import { QCheckbox, QCheckboxGroup } from './QCheckbox';
import { QSelect, QOption } from './QSelect';
import { QRadio, QRadioGroup } from './QRadio';
import { QCascader, QCascaderPanel } from './QCascader';
import QInput from './QInput';
import QInputNumber from './QInputNumber';
import QTextarea from './QTextarea';
import QTag from './QTag';
import QCollapse from './QCollapse';
import QCollapseItem from './QCollapseItem';
import QColorPicker from './QColorPicker';
import QContextMenu from './QContextMenu';
import QDialog from './QDialog';
import QMessageBox from './QMessageBox';
import QNotification from './QNotification';
import QPagination from './QPagination';
import QPopover from './QPopover';
import QScrollbar from './QScrollbar';
import { QTabs, QTabPane } from './QTabs';
import QDrawer from './QDrawer';

const components = [
  QButton,
  QBreadcrumbs,
  QCascader,
  QCascaderPanel,
  QCheckbox,
  QCheckboxGroup,
  QRadio,
  QRadioGroup,
  QCollapse,
  QCollapseItem,
  QColorPicker,
  QContextMenu,
  QInput,
  QInputNumber,
  QMessageBox,
  QPagination,
  QPopover,
  QScrollbar,
  QSelect,
  QOption,
  QTextarea,
  QTabs,
  QTabPane,
  QTag,
  QDrawer
];

let zIndexCounter = 2000;

const install = Vue => {
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$Q = {};

  Object.defineProperty(Vue.prototype.$Q, 'zIndex', {
    get() {
      zIndexCounter += 1;

      return zIndexCounter;
    }
  });

  Vue.use(vClickOutside);

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$notify = QNotification;
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$dialog = QDialog.bind(Vue);
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$message = QMessageBox.bind(Vue);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  //   Vue.use(InfiniteScroll);
  //   Vue.use(Loading.directive);

  //   Vue.prototype.$loading = Loading.service;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  //   locale: locale.use,
  install,

  QButton,
  QBreadcrumbs,
  QCheckbox,
  QCheckboxGroup,
  QCollapse,
  QCollapseItem,
  QContextMenu,
  QDialog,
  QInput,
  QInputNumber,
  QMessageBox,
  QNotification,
  QPagination,
  QPopover,
  QScrollbar,
  QSelect,
  QOption,
  QTabPane,
  QTextarea,
  QTabs,
  QTag,
  QDrawer
};
