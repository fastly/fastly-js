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
import RelationshipsForInvitation from './RelationshipsForInvitation';
import Timestamps from './Timestamps';

/**
 * The InvitationResponseDataAllOf model module.
 * @module model/InvitationResponseDataAllOf
 * @version 11.0.0
 */
class InvitationResponseDataAllOf {
    /**
     * Constructs a new <code>InvitationResponseDataAllOf</code>.
     * @alias module:model/InvitationResponseDataAllOf
     */
    constructor() { 
        
        InvitationResponseDataAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/InvitationResponseDataAllOf} The populated <code>InvitationResponseDataAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationResponseDataAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Timestamps.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForInvitation.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InvitationResponseDataAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
InvitationResponseDataAllOf.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForInvitation} relationships
 */
InvitationResponseDataAllOf.prototype['relationships'] = undefined;






export default InvitationResponseDataAllOf;

