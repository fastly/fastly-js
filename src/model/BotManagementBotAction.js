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
 * The BotManagementBotAction model module.
 * @module model/BotManagementBotAction
 * @version 17.0.0
 */
class BotManagementBotAction {
    /**
     * Constructs a new <code>BotManagementBotAction</code>.
     * The action applied to requests from a single bot. Set the action to &#39;inherit&#39; to apply the category&#39;s action or to a specific value to override the category&#39;s action.
     * @alias module:model/BotManagementBotAction
     * @param type {module:model/BotManagementBotAction.TypeEnum} The type of action to apply.
     */
    constructor(type) { 
        
        BotManagementBotAction.initialize(this, type);
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
     * Constructs a <code>BotManagementBotAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementBotAction} obj Optional instance to populate.
     * @return {module:model/BotManagementBotAction} The populated <code>BotManagementBotAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementBotAction();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of action to apply.
 * @member {module:model/BotManagementBotAction.TypeEnum} type
 */
BotManagementBotAction.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BotManagementBotAction['TypeEnum'] = {

    /**
     * value: "allow"
     * @const
     */
    "allow": "allow",

    /**
     * value: "block"
     * @const
     */
    "block": "block",

    /**
     * value: "challenge"
     * @const
     */
    "challenge": "challenge",

    /**
     * value: "inherit"
     * @const
     */
    "inherit": "inherit"
};



export default BotManagementBotAction;

