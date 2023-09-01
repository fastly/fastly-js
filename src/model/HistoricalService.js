/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HistoricalUsageResults from './HistoricalUsageResults';

/**
 * The HistoricalService model module.
 * @module model/HistoricalService
 * @version 6.1.1
 */
class HistoricalService {
    /**
     * Constructs a new <code>HistoricalService</code>.
     * @alias module:model/HistoricalService
     * @extends Object
     */
    constructor() { 
        
        HistoricalService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalService} obj Optional instance to populate.
     * @return {module:model/HistoricalService} The populated <code>HistoricalService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalService();

            ApiClient.constructFromObject(data, obj, 'HistoricalUsageResults');
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the service.
 * @member {String} name
 */
HistoricalService.prototype['name'] = undefined;






export default HistoricalService;

