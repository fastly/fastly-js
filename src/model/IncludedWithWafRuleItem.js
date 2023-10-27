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
import TypeWafRuleRevision from './TypeWafRuleRevision';
import WafRuleRevision from './WafRuleRevision';
import WafRuleRevisionAttributes from './WafRuleRevisionAttributes';
import WafTag from './WafTag';

/**
 * The IncludedWithWafRuleItem model module.
 * @module model/IncludedWithWafRuleItem
 * @version 6.2.1
 */
class IncludedWithWafRuleItem {
    /**
     * Constructs a new <code>IncludedWithWafRuleItem</code>.
     * @alias module:model/IncludedWithWafRuleItem
     * @implements module:model/WafTag
     * @implements module:model/WafRuleRevision
     */
    constructor() { 
        WafTag.initialize(this);WafRuleRevision.initialize(this);
        IncludedWithWafRuleItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IncludedWithWafRuleItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafRuleItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafRuleItem} The populated <code>IncludedWithWafRuleItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncludedWithWafRuleItem();
            WafTag.constructFromObject(data, obj);
            WafRuleRevision.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafRuleRevision.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafRuleRevisionAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafRuleRevision} type
 */
IncludedWithWafRuleItem.prototype['type'] = undefined;

/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */
IncludedWithWafRuleItem.prototype['id'] = undefined;

/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */
IncludedWithWafRuleItem.prototype['attributes'] = undefined;


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




export default IncludedWithWafRuleItem;

