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
import RelationshipWafRule from './RelationshipWafRule';
import TypeWafTag from './TypeWafTag';
import WafRuleRevisionResponseDataAllOf from './WafRuleRevisionResponseDataAllOf';
import WafTag from './WafTag';
import WafTagAttributes from './WafTagAttributes';

/**
 * The WafTagsResponseDataItem model module.
 * @module model/WafTagsResponseDataItem
 * @version 4.3.0
 */
class WafTagsResponseDataItem {
    /**
     * Constructs a new <code>WafTagsResponseDataItem</code>.
     * @alias module:model/WafTagsResponseDataItem
     * @implements module:model/WafTag
     * @implements module:model/WafRuleRevisionResponseDataAllOf
     */
    constructor() { 
        WafTag.initialize(this);WafRuleRevisionResponseDataAllOf.initialize(this);
        WafTagsResponseDataItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafTagsResponseDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafTagsResponseDataItem} obj Optional instance to populate.
     * @return {module:model/WafTagsResponseDataItem} The populated <code>WafTagsResponseDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafTagsResponseDataItem();
            WafTag.constructFromObject(data, obj);
            WafRuleRevisionResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafTag.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafTagAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipWafRule.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafTag} type
 */
WafTagsResponseDataItem.prototype['type'] = undefined;

/**
 * Alphanumeric string identifying a WAF tag.
 * @member {String} id
 */
WafTagsResponseDataItem.prototype['id'] = undefined;

/**
 * @member {module:model/WafTagAttributes} attributes
 */
WafTagsResponseDataItem.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipWafRule} relationships
 */
WafTagsResponseDataItem.prototype['relationships'] = undefined;


// Implement WafTag interface:
/**
 * @member {module:model/TypeWafTag} type
 */
WafTag.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF tag.
 * @member {String} id
 */
WafTag.prototype['id'] = undefined;
/**
 * @member {module:model/WafTagAttributes} attributes
 */
WafTag.prototype['attributes'] = undefined;
// Implement WafRuleRevisionResponseDataAllOf interface:
/**
 * @member {module:model/RelationshipWafRule} relationships
 */
WafRuleRevisionResponseDataAllOf.prototype['relationships'] = undefined;




export default WafTagsResponseDataItem;

