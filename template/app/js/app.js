// Styles:
import '../scss/style.scss';

// open.DASH:
import openDASH from 'opendash';

// User Adapter:
import userAdapter from '@opendash/user-adapter-baasbox';

// Data Adapter:
// import {{ opendash-template-name }}DataAdapter from './{{ opendash-template-name }}.data-adapter.js';

// Widgets:
import widgetName from 'opendash-widget-widget-name';

const instance = new openDASH();

instance.env('USER-ADAPTER-BAASBOX-ENDPOINT', 'https://example.com');
instance.env('USER-ADAPTER-BAASBOX-APP-CODE', '123456789');
instance.env('USER-ADAPTER-BAASBOX-COLLECTION', 'openDASH2');

instance.env('OD-EVENTS-LOG', true);

instance.registerUserAdapter(userAdapter);
// instance.registerDataAdapter('{{ opendash-template-name }}', {{ opendash-template-name }}DataAdapter);

// instance.registerWidget('widgetName', widgetName());

// App initialisieren:
const app = angular.module('app', [instance.name]);