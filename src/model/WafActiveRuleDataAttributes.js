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
import WafRuleRevisionOrLatest from './WafRuleRevisionOrLatest';

/**
 * The WafActiveRuleDataAttributes model module.
 * @module model/WafActiveRuleDataAttributes
 * @version 10.0.0
 */
class WafActiveRuleDataAttributes {
    /**
     * Constructs a new <code>WafActiveRuleDataAttributes</code>.
     * @alias module:model/WafActiveRuleDataAttributes
     */
    constructor() { 
        
        WafActiveRuleDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRuleDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleDataAttributes} The populated <code>WafActiveRuleDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRuleDataAttributes();

            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'Number');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = WafRuleRevisionOrLatest.constructFromObject(data['revision']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ModSecurity rule ID of the associated rule revision.
 * @member {Number} modsec_rule_id
 */
WafActiveRuleDataAttributes.prototype['modsec_rule_id'] = undefined;

/**
 * @member {module:model/WafRuleRevisionOrLatest} revision
 */
WafActiveRuleDataAttributes.prototype['revision'] = undefined;

/**
 * Describes the behavior for the particular rule revision within this firewall version.
 * @member {module:model/WafActiveRuleDataAttributes.StatusEnum} status
 */
WafActiveRuleDataAttributes.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
WafActiveRuleDataAttributes['StatusEnum'] = {

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "block"
     * @const
     */
    "block": "block",

    /**
     * value: "score"
     * @const
     */
    "score": "score"
};



export default WafActiveRuleDataAttributes;

