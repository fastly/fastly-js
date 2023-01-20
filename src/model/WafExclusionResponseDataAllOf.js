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
import WafExclusionResponseDataAttributes from './WafExclusionResponseDataAttributes';
import WafExclusionResponseDataRelationships from './WafExclusionResponseDataRelationships';

/**
 * The WafExclusionResponseDataAllOf model module.
 * @module model/WafExclusionResponseDataAllOf
 * @version v3.1.0
 */
class WafExclusionResponseDataAllOf {
    /**
     * Constructs a new <code>WafExclusionResponseDataAllOf</code>.
     * @alias module:model/WafExclusionResponseDataAllOf
     */
    constructor() { 
        
        WafExclusionResponseDataAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafExclusionResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseDataAllOf} The populated <code>WafExclusionResponseDataAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafExclusionResponseDataAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafExclusionResponseDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = WafExclusionResponseDataRelationships.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

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






export default WafExclusionResponseDataAllOf;

