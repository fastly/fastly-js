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
 * The HeaderEvent model module.
 * @module model/HeaderEvent
 * @version 16.0.0
 */
class HeaderEvent {
    /**
     * Constructs a new <code>HeaderEvent</code>.
     * @alias module:model/HeaderEvent
     */
    constructor() { 
        
        HeaderEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HeaderEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeaderEvent} obj Optional instance to populate.
     * @return {module:model/HeaderEvent} The populated <code>HeaderEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeaderEvent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('header_name')) {
                obj['header_name'] = ApiClient.convertToType(data['header_name'], 'String');
            }
            if (data.hasOwnProperty('old_value')) {
                obj['old_value'] = ApiClient.convertToType(data['old_value'], 'String');
            }
            if (data.hasOwnProperty('new_value')) {
                obj['new_value'] = ApiClient.convertToType(data['new_value'], 'String');
            }
            if (data.hasOwnProperty('changed_at')) {
                obj['changed_at'] = ApiClient.convertToType(data['changed_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
HeaderEvent.prototype['id'] = undefined;

/**
 * @member {String} header_name
 */
HeaderEvent.prototype['header_name'] = undefined;

/**
 * @member {String} old_value
 */
HeaderEvent.prototype['old_value'] = undefined;

/**
 * @member {String} new_value
 */
HeaderEvent.prototype['new_value'] = undefined;

/**
 * @member {Date} changed_at
 */
HeaderEvent.prototype['changed_at'] = undefined;






export default HeaderEvent;

