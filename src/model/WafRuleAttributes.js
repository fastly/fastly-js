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
 * The WafRuleAttributes model module.
 * @module model/WafRuleAttributes
 * @version 7.6.0
 */
class WafRuleAttributes {
    /**
     * Constructs a new <code>WafRuleAttributes</code>.
     * @alias module:model/WafRuleAttributes
     */
    constructor() { 
        
        WafRuleAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleAttributes} obj Optional instance to populate.
     * @return {module:model/WafRuleAttributes} The populated <code>WafRuleAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleAttributes();

            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'Number');
            }
            if (data.hasOwnProperty('publisher')) {
                obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Corresponding ModSecurity rule ID.
 * @member {Number} modsec_rule_id
 */
WafRuleAttributes.prototype['modsec_rule_id'] = undefined;

/**
 * Rule publisher.
 * @member {module:model/WafRuleAttributes.PublisherEnum} publisher
 */
WafRuleAttributes.prototype['publisher'] = undefined;

/**
 * The rule's [type](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-the-types-of-rules).
 * @member {module:model/WafRuleAttributes.TypeEnum} type
 */
WafRuleAttributes.prototype['type'] = undefined;





/**
 * Allowed values for the <code>publisher</code> property.
 * @enum {String}
 * @readonly
 */
WafRuleAttributes['PublisherEnum'] = {

    /**
     * value: "fastly"
     * @const
     */
    "fastly": "fastly",

    /**
     * value: "trustwave"
     * @const
     */
    "trustwave": "trustwave",

    /**
     * value: "owasp"
     * @const
     */
    "owasp": "owasp"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
WafRuleAttributes['TypeEnum'] = {

    /**
     * value: "strict"
     * @const
     */
    "strict": "strict",

    /**
     * value: "score"
     * @const
     */
    "score": "score",

    /**
     * value: "threshold"
     * @const
     */
    "threshold": "threshold"
};



export default WafRuleAttributes;

