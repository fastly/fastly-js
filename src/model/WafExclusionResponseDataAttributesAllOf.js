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
 * The WafExclusionResponseDataAttributesAllOf model module.
 * @module model/WafExclusionResponseDataAttributesAllOf
 * @version 6.0.0
 */
class WafExclusionResponseDataAttributesAllOf {
    /**
     * Constructs a new <code>WafExclusionResponseDataAttributesAllOf</code>.
     * @alias module:model/WafExclusionResponseDataAttributesAllOf
     */
    constructor() { 
        
        WafExclusionResponseDataAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafExclusionResponseDataAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseDataAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseDataAttributesAllOf} The populated <code>WafExclusionResponseDataAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafExclusionResponseDataAttributesAllOf();

            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
            }
            if (data.hasOwnProperty('exclusion_type')) {
                obj['exclusion_type'] = ApiClient.convertToType(data['exclusion_type'], 'String');
            }
            if (data.hasOwnProperty('logging')) {
                obj['logging'] = ApiClient.convertToType(data['logging'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('variable')) {
                obj['variable'] = ApiClient.convertToType(data['variable'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} condition
 */
WafExclusionResponseDataAttributesAllOf.prototype['condition'] = undefined;

/**
 * The type of exclusion.
 * @member {module:model/WafExclusionResponseDataAttributesAllOf.ExclusionTypeEnum} exclusion_type
 */
WafExclusionResponseDataAttributesAllOf.prototype['exclusion_type'] = undefined;

/**
 * Whether to generate a log upon matching.
 * @member {Boolean} logging
 * @default true
 */
WafExclusionResponseDataAttributesAllOf.prototype['logging'] = true;

/**
 * Name of the exclusion.
 * @member {String} name
 */
WafExclusionResponseDataAttributesAllOf.prototype['name'] = undefined;

/**
 * A numeric ID identifying a WAF exclusion.
 * @member {Number} number
 */
WafExclusionResponseDataAttributesAllOf.prototype['number'] = undefined;

/**
 * The variable to exclude. An optional selector can be specified after the variable separated by a colon (`:`) to restrict the variable to a particular parameter. Required for `exclusion_type=variable`.
 * @member {module:model/WafExclusionResponseDataAttributesAllOf.VariableEnum} variable
 */
WafExclusionResponseDataAttributesAllOf.prototype['variable'] = undefined;





/**
 * Allowed values for the <code>exclusion_type</code> property.
 * @enum {String}
 * @readonly
 */
WafExclusionResponseDataAttributesAllOf['ExclusionTypeEnum'] = {

    /**
     * value: "rule"
     * @const
     */
    "rule": "rule",

    /**
     * value: "variable"
     * @const
     */
    "variable": "variable",

    /**
     * value: "waf"
     * @const
     */
    "waf": "waf"
};


/**
 * Allowed values for the <code>variable</code> property.
 * @enum {String}
 * @readonly
 */
WafExclusionResponseDataAttributesAllOf['VariableEnum'] = {

    /**
     * value: "req.cookies"
     * @const
     */
    "req.cookies": "req.cookies",

    /**
     * value: "req.headers"
     * @const
     */
    "req.headers": "req.headers",

    /**
     * value: "req.post"
     * @const
     */
    "req.post": "req.post",

    /**
     * value: "req.post_filename"
     * @const
     */
    "req.post_filename": "req.post_filename",

    /**
     * value: "req.qs"
     * @const
     */
    "req.qs": "req.qs",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};



export default WafExclusionResponseDataAttributesAllOf;

