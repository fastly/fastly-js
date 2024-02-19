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

/**
 * The HeaderResponseAdditional model module.
 * @module model/HeaderResponseAdditional
 * @version 7.0.1
 */
class HeaderResponseAdditional {
    /**
     * Constructs a new <code>HeaderResponseAdditional</code>.
     * @alias module:model/HeaderResponseAdditional
     */
    constructor() { 
        
        HeaderResponseAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HeaderResponseAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeaderResponseAdditional} obj Optional instance to populate.
     * @return {module:model/HeaderResponseAdditional} The populated <code>HeaderResponseAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeaderResponseAdditional();

            if (data.hasOwnProperty('ignore_if_set')) {
                obj['ignore_if_set'] = ApiClient.convertToType(data['ignore_if_set'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Don't add the header if it is added already. Only applies to 'set' action. Numerical value (\"0\" = false, \"1\" = true)
 * @member {String} ignore_if_set
 */
HeaderResponseAdditional.prototype['ignore_if_set'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
HeaderResponseAdditional.prototype['priority'] = '100';






export default HeaderResponseAdditional;

