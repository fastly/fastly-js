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
import NetworkProtectRuleResponse from './NetworkProtectRuleResponse';
import NetworkProtectRuleSetDefaultAction from './NetworkProtectRuleSetDefaultAction';

/**
 * The NetworkProtectRuleSet model module.
 * @module model/NetworkProtectRuleSet
 * @version 17.0.0
 */
class NetworkProtectRuleSet {
    /**
     * Constructs a new <code>NetworkProtectRuleSet</code>.
     * Shared ordered rules and default action.
     * @alias module:model/NetworkProtectRuleSet
     * @param default_action {module:model/NetworkProtectRuleSetDefaultAction} 
     * @param rules {Array.<module:model/NetworkProtectRuleResponse>} Rules in evaluation order with read-only timestamps.
     */
    constructor(default_action, rules) { 
        
        NetworkProtectRuleSet.initialize(this, default_action, rules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, default_action, rules) { 
        obj['default_action'] = default_action;
        obj['rules'] = rules;
    }

    /**
     * Constructs a <code>NetworkProtectRuleSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleSet} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleSet} The populated <code>NetworkProtectRuleSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleSet();

            if (data.hasOwnProperty('default_action')) {
                obj['default_action'] = NetworkProtectRuleSetDefaultAction.constructFromObject(data['default_action']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [NetworkProtectRuleResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkProtectRuleSetDefaultAction} default_action
 */
NetworkProtectRuleSet.prototype['default_action'] = undefined;

/**
 * Rules in evaluation order with read-only timestamps.
 * @member {Array.<module:model/NetworkProtectRuleResponse>} rules
 */
NetworkProtectRuleSet.prototype['rules'] = undefined;






export default NetworkProtectRuleSet;

