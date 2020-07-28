import vClickOutside from 'v-click-outside';

import QButton from './QButton';
import { QCheckbox, QCheckboxGroup } from './QCheckbox';
import QCollapse from './QCollapse';
import QCollapseItem from './QCollapseItem';
import QContextMenu from './QContextMenu';
import QInput from './QInput';
import QMessageBox from './QMessageBox';
import QPopover from './QPopover';
import QScrollbar from './QScrollbar';
import { QSelect, QOption } from './QSelect';
import QTabPane from './QTabPane';
import QTabs from './QTabs';
import QTag from './QTag';
import QTextarea from './QTextarea';

const components = [
  QButton,
  QCheckbox,
  QCheckboxGroup,
  QCollapse,
  QCollapseItem,
  QContextMenu,
  QInput,
  QMessageBox,
  QPopover,
  QScrollbar,
  QSelect,
  QOption,
  QTabPane,
  QTextarea,
  QTabs,
  QTag
];

const install = function(Vue) {
  Vue.use(vClickOutside);

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$message = QMessageBox.bind(Vue);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  //   Vue.use(InfiniteScroll);
  //   Vue.use(Loading.directive);

  //   Vue.prototype.$ELEMENT = {
  //     size: opts.size || '',
  //     zIndex: opts.zIndex || 2000
  //   };

  //   Vue.prototype.$loading = Loading.service;
  //   Vue.prototype.$msgbox = MessageBox;
  //   Vue.prototype.$alert = MessageBox.alert;
  //   Vue.prototype.$confirm = MessageBox.confirm;
  //   Vue.prototype.$prompt = MessageBox.prompt;
  //   Vue.prototype.$notify = Notification;
  //   Vue.prototype.$message = Message;
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
  QCheckbox,
  QCheckboxGroup,
  QCollapse,
  QCollapseItem,
  QContextMenu,
  QInput,
  QMessageBox,
  QPopover,
  QScrollbar,
  QSelect,
  QOption,
  QTabPane,
  QTextarea,
  QTabs,
  QTag
};
