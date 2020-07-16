import Vue from 'vue';

import './global/_global.scss';

import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';

import QComponents from '../src/qComponents';

import '../src/all.scss';

locale.use(lang);
Vue.use(ElementUI);
Vue.use(QComponents);
