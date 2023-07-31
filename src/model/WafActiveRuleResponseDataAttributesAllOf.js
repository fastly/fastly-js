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
 * The WafActiveRuleResponseDataAttributesAllOf model module.
 * @module model/WafActiveRuleResponseDataAttributesAllOf
 * @version 6.0.0
 */
class WafActiveRuleResponseDataAttributesAllOf {
    /**
     * Constructs a new <code>WafActiveRuleResponseDataAttributesAllOf</code>.
     * @alias module:model/WafActiveRuleResponseDataAttributesAllOf
     */
    constructor() { 
        
        WafActiveRuleResponseDataAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRuleResponseDataAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleResponseDataAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleResponseDataAttributesAllOf} The populated <code>WafActiveRuleResponseDataAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRuleResponseDataAttributesAllOf();

            if (data.hasOwnProperty('latest_revision')) {
                obj['latest_revision'] = ApiClient.convertToType(data['latest_revision'], 'Number');
            }
            if (data.hasOwnProperty('outdated')) {
                obj['outdated'] = ApiClient.convertToType(data['outdated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The latest rule revision number that is available for the associated rule revision.
 * @member {Number} latest_revision
 */
WafActiveRuleResponseDataAttributesAllOf.prototype['latest_revision'] = undefined;

/**
 * Indicates if the associated rule revision is up to date or not.
 * @member {Boolean} outdated
 */
WafActiveRuleResponseDataAttributesAllOf.prototype['outdated'] = undefined;






export default WafActiveRuleResponseDataAttributesAllOf;

