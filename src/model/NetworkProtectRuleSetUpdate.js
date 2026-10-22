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
 * The NetworkProtectRuleSetUpdate model module.
 * @module model/NetworkProtectRuleSetUpdate
 * @version 17.0.0
 */
class NetworkProtectRuleSetUpdate {
    /**
     * Constructs a new <code>NetworkProtectRuleSetUpdate</code>.
     * Attributes accepted when updating a rule set.
     * @alias module:model/NetworkProtectRuleSetUpdate
     */
    constructor() { 
        
        NetworkProtectRuleSetUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkProtectRuleSetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleSetUpdate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleSetUpdate} The populated <code>NetworkProtectRuleSetUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleSetUpdate();

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
NetworkProtectRuleSetUpdate.prototype['default_action'] = undefined;

/**
 * Rules in evaluation order; the first match wins.
 * @member {Array.<module:model/NetworkProtectRule>} rules
 */
NetworkProtectRuleSetUpdate.prototype['rules'] = undefined;






export default NetworkProtectRuleSetUpdate;

