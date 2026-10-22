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
import NetworkProtectRule from './NetworkProtectRule';
import NetworkProtectRuleSetDefaultAction from './NetworkProtectRuleSetDefaultAction';

/**
 * The NetworkProtectRuleSetCreate model module.
 * @module model/NetworkProtectRuleSetCreate
 * @version 17.0.0
 */
class NetworkProtectRuleSetCreate {
    /**
     * Constructs a new <code>NetworkProtectRuleSetCreate</code>.
     * Attributes accepted when creating a rule set.
     * @alias module:model/NetworkProtectRuleSetCreate
     * @param default_action {module:model/NetworkProtectRuleSetDefaultAction} 
     */
    constructor(default_action) { 
        
        NetworkProtectRuleSetCreate.initialize(this, default_action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, default_action) { 
        obj['default_action'] = default_action;
    }

    /**
     * Constructs a <code>NetworkProtectRuleSetCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleSetCreate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleSetCreate} The populated <code>NetworkProtectRuleSetCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleSetCreate();

            if (data.hasOwnProperty('default_action')) {
                obj['default_action'] = NetworkProtectRuleSetDefaultAction.constructFromObject(data['default_action']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [NetworkProtectRule]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkProtectRuleSetDefaultAction} default_action
 */
NetworkProtectRuleSetCreate.prototype['default_action'] = undefined;

/**
 * Rules in evaluation order; the first match wins.
 * @member {Array.<module:model/NetworkProtectRule>} rules
 */
NetworkProtectRuleSetCreate.prototype['rules'] = undefined;






export default NetworkProtectRuleSetCreate;

