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
 * The LegacyWafConfigurationSet model module.
 * @module model/LegacyWafConfigurationSet
 * @version 6.2.2
 */
class LegacyWafConfigurationSet {
    /**
     * Constructs a new <code>LegacyWafConfigurationSet</code>.
     * @alias module:model/LegacyWafConfigurationSet
     */
    constructor() { 
        
        LegacyWafConfigurationSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyWafConfigurationSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyWafConfigurationSet} obj Optional instance to populate.
     * @return {module:model/LegacyWafConfigurationSet} The populated <code>LegacyWafConfigurationSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyWafConfigurationSet();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The active configuration set is the default configuration set when creating a new WAF. When Fastly adds configuration sets, the new versions become the default (active).
 * @member {Boolean} active
 */
LegacyWafConfigurationSet.prototype['active'] = undefined;

/**
 * The name of the configuration set.
 * @member {String} name
 */
LegacyWafConfigurationSet.prototype['name'] = undefined;






export default LegacyWafConfigurationSet;

