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
 * The WafRuleRevisionAttributes model module.
 * @module model/WafRuleRevisionAttributes
 * @version v3.1.0
 */
class WafRuleRevisionAttributes {
    /**
     * Constructs a new <code>WafRuleRevisionAttributes</code>.
     * @alias module:model/WafRuleRevisionAttributes
     */
    constructor() { 
        
        WafRuleRevisionAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleRevisionAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionAttributes} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionAttributes} The populated <code>WafRuleRevisionAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleRevisionAttributes();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'Number');
            }
            if (data.hasOwnProperty('paranoia_level')) {
                obj['paranoia_level'] = ApiClient.convertToType(data['paranoia_level'], 'Number');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'Number');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
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
WafRuleRevisionAttributes.prototype['message'] = undefined;

/**
 * Corresponding ModSecurity rule ID.
 * @member {Number} modsec_rule_id
 */
WafRuleRevisionAttributes.prototype['modsec_rule_id'] = undefined;

/**
 * Paranoia level for the rule.
 * @member {Number} paranoia_level
 */
WafRuleRevisionAttributes.prototype['paranoia_level'] = undefined;

/**
 * Revision number.
 * @member {Number} revision
 */
WafRuleRevisionAttributes.prototype['revision'] = undefined;

/**
 * Severity metadata for the rule.
 * @member {Number} severity
 */
WafRuleRevisionAttributes.prototype['severity'] = undefined;

/**
 * The ModSecurity rule logic.
 * @member {String} source
 */
WafRuleRevisionAttributes.prototype['source'] = undefined;

/**
 * The state, indicating if the revision is the most recent version of the rule.
 * @member {module:model/WafRuleRevisionAttributes.StateEnum} state
 */
WafRuleRevisionAttributes.prototype['state'] = undefined;

/**
 * The VCL representation of the rule logic.
 * @member {String} vcl
 */
WafRuleRevisionAttributes.prototype['vcl'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
WafRuleRevisionAttributes['StateEnum'] = {

    /**
     * value: "latest"
     * @const
     */
    "latest": "latest",

    /**
     * value: "outdated"
     * @const
     */
    "outdated": "outdated"
};



export default WafRuleRevisionAttributes;

