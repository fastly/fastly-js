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
 * The BotManagementCategoryBotsAction model module.
 * @module model/BotManagementCategoryBotsAction
 * @version 17.1.0
 */
class BotManagementCategoryBotsAction {
    /**
     * Constructs a new <code>BotManagementCategoryBotsAction</code>.
     * The action to apply to every bot in a category.
     * @alias module:model/BotManagementCategoryBotsAction
     * @param type {module:model/BotManagementCategoryBotsAction.TypeEnum} The type of action to apply. Only `inherit` is supported.
     */
    constructor(type) { 
        
        BotManagementCategoryBotsAction.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>BotManagementCategoryBotsAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementCategoryBotsAction} obj Optional instance to populate.
     * @return {module:model/BotManagementCategoryBotsAction} The populated <code>BotManagementCategoryBotsAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementCategoryBotsAction();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of action to apply. Only `inherit` is supported.
 * @member {module:model/BotManagementCategoryBotsAction.TypeEnum} type
 */
BotManagementCategoryBotsAction.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BotManagementCategoryBotsAction['TypeEnum'] = {

    /**
     * value: "inherit"
     * @const
     */
    "inherit": "inherit"
};



export default BotManagementCategoryBotsAction;

