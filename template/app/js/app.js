// Styles:
import '../scss/style.scss';

// open.DASH:
import openDASH from 'opendash';

// User Adapter:
import userAdapter from '@opendash/user-adapter-local';

// Data Adapter:
// import {{ opendash-template-name }}DataAdapter from './{{ opendash-template-name }}.data-adapter.js';

// Widgets:
// import widgetName from 'opendash-widget-widget-name';

const instance = new openDASH();

instance.env('OD-EVENTS-LOG', true);

instance.registerUserAdapter(userAdapter);
// instance.registerDataAdapter('{{ opendash-template-name }}', {{ opendash-template-name }}DataAdapter);

// instance.registerWidget(widgetName);

// App initialisieren:
const app = angular.module('app', [instance.name]);