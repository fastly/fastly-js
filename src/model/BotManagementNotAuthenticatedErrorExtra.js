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
 * The BotManagementNotAuthenticatedErrorExtra model module.
 * @module model/BotManagementNotAuthenticatedErrorExtra
 * @version 17.0.0
 */
class BotManagementNotAuthenticatedErrorExtra {
    /**
     * Constructs a new <code>BotManagementNotAuthenticatedErrorExtra</code>.
     * @alias module:model/BotManagementNotAuthenticatedErrorExtra
     */
    constructor() { 
        
        BotManagementNotAuthenticatedErrorExtra.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementNotAuthenticatedErrorExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementNotAuthenticatedErrorExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementNotAuthenticatedErrorExtra} The populated <code>BotManagementNotAuthenticatedErrorExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementNotAuthenticatedErrorExtra();

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
BotManagementNotAuthenticatedErrorExtra.prototype['title'] = undefined;

/**
 * @member {module:model/BotManagementNotAuthenticatedErrorExtra.StatusEnum} status
 */
BotManagementNotAuthenticatedErrorExtra.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
BotManagementNotAuthenticatedErrorExtra['StatusEnum'] = {

    /**
     * value: 401
     * @const
     */
    "401": 401
};



export default BotManagementNotAuthenticatedErrorExtra;

