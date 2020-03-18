import base from 'api/services/aabase';
import * as template from 'api/services/template';
const services = {
  ...base,
  ...template,
};
console.log('services', services);
export default services;
