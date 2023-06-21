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
import TypeWafExclusion from './TypeWafExclusion';
import WafExclusionData from './WafExclusionData';
import WafExclusionResponseDataAllOf from './WafExclusionResponseDataAllOf';
import WafExclusionResponseDataAttributes from './WafExclusionResponseDataAttributes';
import WafExclusionResponseDataRelationships from './WafExclusionResponseDataRelationships';

/**
 * The WafExclusionResponseData model module.
 * @module model/WafExclusionResponseData
 * @version 4.2.1
 */
class WafExclusionResponseData {
    /**
     * Constructs a new <code>WafExclusionResponseData</code>.
     * @alias module:model/WafExclusionResponseData
     * @implements module:model/WafExclusionData
     * @implements module:model/WafExclusionResponseDataAllOf
     */
    constructor() { 
        WafExclusionData.initialize(this);WafExclusionResponseDataAllOf.initialize(this);
        WafExclusionResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafExclusionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseData} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseData} The populated <code>WafExclusionResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafExclusionResponseData();
            WafExclusionData.constructFromObject(data, obj);
            WafExclusionResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafExclusion.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafExclusionResponseDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = WafExclusionResponseDataRelationships.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafExclusion} type
 */
WafExclusionResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/WafExclusionResponseDataAttributes} attributes
 */
WafExclusionResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/WafExclusionResponseDataRelationships} relationships
 */
WafExclusionResponseData.prototype['relationships'] = undefined;

/**
 * Alphanumeric string identifying a WAF exclusion.
 * @member {String} id
 */
WafExclusionResponseData.prototype['id'] = undefined;


// Implement WafExclusionData interface:
/**
 * @member {module:model/TypeWafExclusion} type
 */
WafExclusionData.prototype['type'] = undefined;
/**
 * @member {module:model/WafExclusionDataAttributes} attributes
 */
WafExclusionData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafExclusion} relationships
 */
WafExclusionData.prototype['relationships'] = undefined;
// Implement WafExclusionResponseDataAllOf interface:
/**
 * Alphanumeric string identifying a WAF exclusion.
 * @member {String} id
 */
WafExclusionResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/WafExclusionResponseDataAttributes} attributes
 */
WafExclusionResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/WafExclusionResponseDataRelationships} relationships
 */
WafExclusionResponseDataAllOf.prototype['relationships'] = undefined;




export default WafExclusionResponseData;

