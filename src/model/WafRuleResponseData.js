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
import RelationshipsForWafRule from './RelationshipsForWafRule';
import TypeWafRule from './TypeWafRule';
import WafRule from './WafRule';
import WafRuleAttributes from './WafRuleAttributes';
import WafRuleResponseDataAllOf from './WafRuleResponseDataAllOf';

/**
 * The WafRuleResponseData model module.
 * @module model/WafRuleResponseData
 * @version 4.2.0
 */
class WafRuleResponseData {
    /**
     * Constructs a new <code>WafRuleResponseData</code>.
     * @alias module:model/WafRuleResponseData
     * @implements module:model/WafRule
     * @implements module:model/WafRuleResponseDataAllOf
     */
    constructor() { 
        WafRule.initialize(this);WafRuleResponseDataAllOf.initialize(this);
        WafRuleResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleResponseData} obj Optional instance to populate.
     * @return {module:model/WafRuleResponseData} The populated <code>WafRuleResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleResponseData();
            WafRule.constructFromObject(data, obj);
            WafRuleResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafRule.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafRuleAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForWafRule.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafRule} type
 */
WafRuleResponseData.prototype['type'] = undefined;

/**
 * @member {String} id
 */
WafRuleResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/WafRuleAttributes} attributes
 */
WafRuleResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForWafRule} relationships
 */
WafRuleResponseData.prototype['relationships'] = undefined;


// Implement WafRule interface:
/**
 * @member {module:model/TypeWafRule} type
 */
WafRule.prototype['type'] = undefined;
/**
 * @member {String} id
 */
WafRule.prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleAttributes} attributes
 */
WafRule.prototype['attributes'] = undefined;
// Implement WafRuleResponseDataAllOf interface:
/**
 * @member {module:model/RelationshipsForWafRule} relationships
 */
WafRuleResponseDataAllOf.prototype['relationships'] = undefined;




export default WafRuleResponseData;

