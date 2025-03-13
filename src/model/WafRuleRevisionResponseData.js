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
import RelationshipWafRule from './RelationshipWafRule';
import TypeWafRuleRevision from './TypeWafRuleRevision';
import WafRuleRevision from './WafRuleRevision';
import WafRuleRevisionAttributes from './WafRuleRevisionAttributes';
import WafRuleRevisionResponseDataAllOf from './WafRuleRevisionResponseDataAllOf';

/**
 * The WafRuleRevisionResponseData model module.
 * @module model/WafRuleRevisionResponseData
 * @version 10.0.0
 */
class WafRuleRevisionResponseData {
    /**
     * Constructs a new <code>WafRuleRevisionResponseData</code>.
     * @alias module:model/WafRuleRevisionResponseData
     * @implements module:model/WafRuleRevision
     * @implements module:model/WafRuleRevisionResponseDataAllOf
     */
    constructor() { 
        WafRuleRevision.initialize(this);WafRuleRevisionResponseDataAllOf.initialize(this);
        WafRuleRevisionResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleRevisionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionResponseData} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionResponseData} The populated <code>WafRuleRevisionResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleRevisionResponseData();
            WafRuleRevision.constructFromObject(data, obj);
            WafRuleRevisionResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafRuleRevision.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafRuleRevisionAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipWafRule.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafRuleRevision} type
 */
WafRuleRevisionResponseData.prototype['type'] = undefined;

/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */
WafRuleRevisionResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */
WafRuleRevisionResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipWafRule} relationships
 */
WafRuleRevisionResponseData.prototype['relationships'] = undefined;


// Implement WafRuleRevision interface:
/**
 * @member {module:model/TypeWafRuleRevision} type
 */
WafRuleRevision.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */
WafRuleRevision.prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */
WafRuleRevision.prototype['attributes'] = undefined;
// Implement WafRuleRevisionResponseDataAllOf interface:
/**
 * @member {module:model/RelationshipWafRule} relationships
 */
WafRuleRevisionResponseDataAllOf.prototype['relationships'] = undefined;




export default WafRuleRevisionResponseData;

