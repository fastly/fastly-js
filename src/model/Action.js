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
import ActionType from './ActionType';

/**
 * The Action model module.
 * @module model/Action
 * @version 16.1.0
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * The action to take when a rule matches.
     * @alias module:model/Action
     * @param type {module:model/ActionType} 
     * @param value {String} The value for the action. For `service` actions, this is the target Fastly service ID.
     */
    constructor(type, value) { 
        
        Action.initialize(this, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, value) { 
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ActionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActionType} type
 */
Action.prototype['type'] = undefined;

/**
 * The value for the action. For `service` actions, this is the target Fastly service ID.
 * @member {String} value
 */
Action.prototype['value'] = undefined;






export default Action;

