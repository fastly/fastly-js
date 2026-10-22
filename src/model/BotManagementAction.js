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
 * The BotManagementAction model module.
 * @module model/BotManagementAction
 * @version 17.0.0
 */
class BotManagementAction {
    /**
     * Constructs a new <code>BotManagementAction</code>.
     * The action applied to matching requests.
     * @alias module:model/BotManagementAction
     * @param type {module:model/BotManagementAction.TypeEnum} The type of action to apply.
     */
    constructor(type) { 
        
        BotManagementAction.initialize(this, type);
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
     * Constructs a <code>BotManagementAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementAction} obj Optional instance to populate.
     * @return {module:model/BotManagementAction} The populated <code>BotManagementAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementAction();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of action to apply.
 * @member {module:model/BotManagementAction.TypeEnum} type
 */
BotManagementAction.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BotManagementAction['TypeEnum'] = {

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
    "challenge": "challenge"
};



export default BotManagementAction;

