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
import InvitationData from './InvitationData';
import InvitationResponseDataAllOf from './InvitationResponseDataAllOf';
import RelationshipsForInvitation from './RelationshipsForInvitation';
import Timestamps from './Timestamps';
import TypeInvitation from './TypeInvitation';

/**
 * The InvitationResponseData model module.
 * @module model/InvitationResponseData
 * @version 7.0.1
 */
class InvitationResponseData {
    /**
     * Constructs a new <code>InvitationResponseData</code>.
     * @alias module:model/InvitationResponseData
     * @implements module:model/InvitationData
     * @implements module:model/InvitationResponseDataAllOf
     */
    constructor() { 
        InvitationData.initialize(this);InvitationResponseDataAllOf.initialize(this);
        InvitationResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponseData} obj Optional instance to populate.
     * @return {module:model/InvitationResponseData} The populated <code>InvitationResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationResponseData();
            InvitationData.constructFromObject(data, obj);
            InvitationResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeInvitation.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Timestamps.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForInvitation.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeInvitation} type
 */
InvitationResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
InvitationResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForInvitation} relationships
 */
InvitationResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
InvitationResponseData.prototype['id'] = undefined;


// Implement InvitationData interface:
/**
 * @member {module:model/TypeInvitation} type
 */
InvitationData.prototype['type'] = undefined;
/**
 * @member {module:model/InvitationDataAttributes} attributes
 */
InvitationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipServiceInvitationsCreate} relationships
 */
InvitationData.prototype['relationships'] = undefined;
// Implement InvitationResponseDataAllOf interface:
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




export default InvitationResponseData;

