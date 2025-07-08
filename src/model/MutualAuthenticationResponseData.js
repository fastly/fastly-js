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
import MutualAuthenticationData from './MutualAuthenticationData';
import MutualAuthenticationResponseAttributes from './MutualAuthenticationResponseAttributes';
import MutualAuthenticationResponseDataAllOf from './MutualAuthenticationResponseDataAllOf';
import RelationshipsForMutualAuthentication from './RelationshipsForMutualAuthentication';
import TypeMutualAuthentication from './TypeMutualAuthentication';

/**
 * The MutualAuthenticationResponseData model module.
 * @module model/MutualAuthenticationResponseData
 * @version 12.1.0
 */
class MutualAuthenticationResponseData {
    /**
     * Constructs a new <code>MutualAuthenticationResponseData</code>.
     * @alias module:model/MutualAuthenticationResponseData
     * @implements module:model/MutualAuthenticationData
     * @implements module:model/MutualAuthenticationResponseDataAllOf
     */
    constructor() { 
        MutualAuthenticationData.initialize(this);MutualAuthenticationResponseDataAllOf.initialize(this);
        MutualAuthenticationResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualAuthenticationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualAuthenticationResponseData} obj Optional instance to populate.
     * @return {module:model/MutualAuthenticationResponseData} The populated <code>MutualAuthenticationResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualAuthenticationResponseData();
            MutualAuthenticationData.constructFromObject(data, obj);
            MutualAuthenticationResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeMutualAuthentication.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = MutualAuthenticationResponseAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForMutualAuthentication.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeMutualAuthentication} type
 */
MutualAuthenticationResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/MutualAuthenticationResponseAttributes} attributes
 */
MutualAuthenticationResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForMutualAuthentication} relationships
 */
MutualAuthenticationResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
MutualAuthenticationResponseData.prototype['id'] = undefined;


// Implement MutualAuthenticationData interface:
/**
 * @member {module:model/TypeMutualAuthentication} type
 */
MutualAuthenticationData.prototype['type'] = undefined;
/**
 * @member {module:model/MutualAuthenticationDataAttributes} attributes
 */
MutualAuthenticationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForMutualAuthentication} relationships
 */
MutualAuthenticationData.prototype['relationships'] = undefined;
// Implement MutualAuthenticationResponseDataAllOf interface:
/**
 * @member {String} id
 */
MutualAuthenticationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/MutualAuthenticationResponseAttributes} attributes
 */
MutualAuthenticationResponseDataAllOf.prototype['attributes'] = undefined;




export default MutualAuthenticationResponseData;

