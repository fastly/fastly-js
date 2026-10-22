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
 * The BotManagementInvalidRequestErrorExtra model module.
 * @module model/BotManagementInvalidRequestErrorExtra
 * @version 17.0.0
 */
class BotManagementInvalidRequestErrorExtra {
    /**
     * Constructs a new <code>BotManagementInvalidRequestErrorExtra</code>.
     * @alias module:model/BotManagementInvalidRequestErrorExtra
     * @param title {String} 
     * @param status {module:model/BotManagementInvalidRequestErrorExtra.StatusEnum} 
     * @param detail {String} 
     */
    constructor(title, status, detail) { 
        
        BotManagementInvalidRequestErrorExtra.initialize(this, title, status, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, status, detail) { 
        obj['title'] = title;
        obj['status'] = status;
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>BotManagementInvalidRequestErrorExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementInvalidRequestErrorExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementInvalidRequestErrorExtra} The populated <code>BotManagementInvalidRequestErrorExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementInvalidRequestErrorExtra();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
BotManagementInvalidRequestErrorExtra.prototype['title'] = undefined;

/**
 * @member {module:model/BotManagementInvalidRequestErrorExtra.StatusEnum} status
 */
BotManagementInvalidRequestErrorExtra.prototype['status'] = undefined;

/**
 * @member {String} detail
 */
BotManagementInvalidRequestErrorExtra.prototype['detail'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
BotManagementInvalidRequestErrorExtra['StatusEnum'] = {

    /**
     * value: 400
     * @const
     */
    "400": 400
};



export default BotManagementInvalidRequestErrorExtra;

