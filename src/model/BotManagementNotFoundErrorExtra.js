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
 * The BotManagementNotFoundErrorExtra model module.
 * @module model/BotManagementNotFoundErrorExtra
 * @version 17.0.0
 */
class BotManagementNotFoundErrorExtra {
    /**
     * Constructs a new <code>BotManagementNotFoundErrorExtra</code>.
     * @alias module:model/BotManagementNotFoundErrorExtra
     */
    constructor() { 
        
        BotManagementNotFoundErrorExtra.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementNotFoundErrorExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementNotFoundErrorExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementNotFoundErrorExtra} The populated <code>BotManagementNotFoundErrorExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementNotFoundErrorExtra();

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
BotManagementNotFoundErrorExtra.prototype['title'] = undefined;

/**
 * @member {module:model/BotManagementNotFoundErrorExtra.StatusEnum} status
 */
BotManagementNotFoundErrorExtra.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
BotManagementNotFoundErrorExtra['StatusEnum'] = {

    /**
     * value: 404
     * @const
     */
    "404": 404
};



export default BotManagementNotFoundErrorExtra;

