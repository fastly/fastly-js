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
 * The LegacyWafRule model module.
 * @module model/LegacyWafRule
 * @version 8.0.0
 */
class LegacyWafRule {
    /**
     * Constructs a new <code>LegacyWafRule</code>.
     * @alias module:model/LegacyWafRule
     */
    constructor() { 
        
        LegacyWafRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyWafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyWafRule} obj Optional instance to populate.
     * @return {module:model/LegacyWafRule} The populated <code>LegacyWafRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyWafRule();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('rule_id')) {
                obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('vcl')) {
                obj['vcl'] = ApiClient.convertToType(data['vcl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Message metadata for the rule.
 * @member {String} message
 */
LegacyWafRule.prototype['message'] = undefined;

/**
 * Corresponding ModSecurity rule ID.
 * @member {String} rule_id
 */
LegacyWafRule.prototype['rule_id'] = undefined;

/**
 * Severity metadata for the rule.
 * @member {Number} severity
 */
LegacyWafRule.prototype['severity'] = undefined;

/**
 * The ModSecurity rule logic.
 * @member {String} source
 */
LegacyWafRule.prototype['source'] = undefined;

/**
 * The VCL representation of the rule logic.
 * @member {String} vcl
 */
LegacyWafRule.prototype['vcl'] = undefined;






export default LegacyWafRule;

