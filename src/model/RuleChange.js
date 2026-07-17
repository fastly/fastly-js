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
import Action from './Action';

/**
 * The RuleChange model module.
 * @module model/RuleChange
 * @version 16.0.0
 */
class RuleChange {
    /**
     * Constructs a new <code>RuleChange</code>.
     * A modification to an existing rule&#39;s action between versions.
     * @alias module:model/RuleChange
     */
    constructor() { 
        
        RuleChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleChange} obj Optional instance to populate.
     * @return {module:model/RuleChange} The populated <code>RuleChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleChange();

            if (data.hasOwnProperty('rule_id')) {
                obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
            }
            if (data.hasOwnProperty('old_action')) {
                obj['old_action'] = Action.constructFromObject(data['old_action']);
            }
            if (data.hasOwnProperty('new_action')) {
                obj['new_action'] = Action.constructFromObject(data['new_action']);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the rule. Stable across versions of the routing config.
 * @member {String} rule_id
 */
RuleChange.prototype['rule_id'] = undefined;

/**
 * @member {module:model/Action} old_action
 */
RuleChange.prototype['old_action'] = undefined;

/**
 * @member {module:model/Action} new_action
 */
RuleChange.prototype['new_action'] = undefined;






export default RuleChange;

