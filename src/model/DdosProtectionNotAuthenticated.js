/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
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
 * The DdosProtectionNotAuthenticated model module.
 * @module model/DdosProtectionNotAuthenticated
 * @version 11.0.0
 */
class DdosProtectionNotAuthenticated {
    /**
     * Constructs a new <code>DdosProtectionNotAuthenticated</code>.
     * @alias module:model/DdosProtectionNotAuthenticated
     */
    constructor() { 
        
        DdosProtectionNotAuthenticated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionNotAuthenticated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionNotAuthenticated} obj Optional instance to populate.
     * @return {module:model/DdosProtectionNotAuthenticated} The populated <code>DdosProtectionNotAuthenticated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionNotAuthenticated();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
DdosProtectionNotAuthenticated.prototype['title'] = undefined;

/**
 * @member {module:model/DdosProtectionNotAuthenticated.StatusEnum} status
 */
DdosProtectionNotAuthenticated.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
DdosProtectionNotAuthenticated['StatusEnum'] = {

    /**
     * value: 401
     * @const
     */
    "401": 401
};



export default DdosProtectionNotAuthenticated;

