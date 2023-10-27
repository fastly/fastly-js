/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The LegacyWafRuleStatus model module.
 * @module model/LegacyWafRuleStatus
 * @version 6.2.1
 */
class LegacyWafRuleStatus {
    /**
     * Constructs a new <code>LegacyWafRuleStatus</code>.
     * @alias module:model/LegacyWafRuleStatus
     */
    constructor() { 
        
        LegacyWafRuleStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyWafRuleStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyWafRuleStatus} obj Optional instance to populate.
     * @return {module:model/LegacyWafRuleStatus} The populated <code>LegacyWafRuleStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyWafRuleStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'String');
            }
            if (data.hasOwnProperty('unique_rule_id')) {
                obj['unique_rule_id'] = ApiClient.convertToType(data['unique_rule_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Describes the behavior for the particular rule within this firewall. Permitted values: `log`, `block`, and `disabled`. 
 * @member {String} status
 */
LegacyWafRuleStatus.prototype['status'] = undefined;

/**
 * The ModSecurity rule ID.
 * @member {String} modsec_rule_id
 */
LegacyWafRuleStatus.prototype['modsec_rule_id'] = undefined;

/**
 * The Rule ID.
 * @member {String} unique_rule_id
 */
LegacyWafRuleStatus.prototype['unique_rule_id'] = undefined;






export default LegacyWafRuleStatus;

