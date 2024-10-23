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
import TypeWafActiveRule from './TypeWafActiveRule';
import WafActiveRuleData from './WafActiveRuleData';
import WafActiveRuleResponseDataAllOf from './WafActiveRuleResponseDataAllOf';
import WafActiveRuleResponseDataAttributes from './WafActiveRuleResponseDataAttributes';
import WafActiveRuleResponseDataRelationships from './WafActiveRuleResponseDataRelationships';

/**
 * The WafActiveRuleResponseData model module.
 * @module model/WafActiveRuleResponseData
 * @version 7.10.0
 */
class WafActiveRuleResponseData {
    /**
     * Constructs a new <code>WafActiveRuleResponseData</code>.
     * @alias module:model/WafActiveRuleResponseData
     * @implements module:model/WafActiveRuleData
     * @implements module:model/WafActiveRuleResponseDataAllOf
     */
    constructor() { 
        WafActiveRuleData.initialize(this);WafActiveRuleResponseDataAllOf.initialize(this);
        WafActiveRuleResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRuleResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleResponseData} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleResponseData} The populated <code>WafActiveRuleResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRuleResponseData();
            WafActiveRuleData.constructFromObject(data, obj);
            WafActiveRuleResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafActiveRule.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafActiveRuleResponseDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = WafActiveRuleResponseDataRelationships.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafActiveRule} type
 */
WafActiveRuleResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/WafActiveRuleResponseDataAttributes} attributes
 */
WafActiveRuleResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/WafActiveRuleResponseDataRelationships} relationships
 */
WafActiveRuleResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
WafActiveRuleResponseData.prototype['id'] = undefined;


// Implement WafActiveRuleData interface:
/**
 * @member {module:model/TypeWafActiveRule} type
 */
WafActiveRuleData.prototype['type'] = undefined;
/**
 * @member {module:model/WafActiveRuleDataAttributes} attributes
 */
WafActiveRuleData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafActiveRule} relationships
 */
WafActiveRuleData.prototype['relationships'] = undefined;
// Implement WafActiveRuleResponseDataAllOf interface:
/**
 * @member {String} id
 */
WafActiveRuleResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/WafActiveRuleResponseDataAttributes} attributes
 */
WafActiveRuleResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/WafActiveRuleResponseDataRelationships} relationships
 */
WafActiveRuleResponseDataAllOf.prototype['relationships'] = undefined;




export default WafActiveRuleResponseData;

