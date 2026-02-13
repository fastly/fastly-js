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
import InvitationCreateDataAllOf from './InvitationCreateDataAllOf';
import InvitationData from './InvitationData';
import InvitationDataAttributes from './InvitationDataAttributes';
import RelationshipServiceInvitationsCreate from './RelationshipServiceInvitationsCreate';
import TypeInvitation from './TypeInvitation';

/**
 * The InvitationCreateData model module.
 * @module model/InvitationCreateData
 * @version 15.0.0-beta.3
 */
class InvitationCreateData {
    /**
     * Constructs a new <code>InvitationCreateData</code>.
     * @alias module:model/InvitationCreateData
     * @implements module:model/InvitationData
     * @implements module:model/InvitationCreateDataAllOf
     */
    constructor() { 
        InvitationData.initialize(this);InvitationCreateDataAllOf.initialize(this);
        InvitationCreateData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationCreateData} obj Optional instance to populate.
     * @return {module:model/InvitationCreateData} The populated <code>InvitationCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationCreateData();
            InvitationData.constructFromObject(data, obj);
            InvitationCreateDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeInvitation.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = InvitationDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipServiceInvitationsCreate.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeInvitation} type
 */
InvitationCreateData.prototype['type'] = undefined;

/**
 * @member {module:model/InvitationDataAttributes} attributes
 */
InvitationCreateData.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipServiceInvitationsCreate} relationships
 */
InvitationCreateData.prototype['relationships'] = undefined;


// Implement InvitationData interface:
/**
 * @member {module:model/TypeInvitation} type
 */
InvitationData.prototype['type'] = undefined;
/**
 * @member {module:model/InvitationDataAttributes} attributes
 */
InvitationData.prototype['attributes'] = undefined;
// Implement InvitationCreateDataAllOf interface:
/**
 * @member {module:model/RelationshipServiceInvitationsCreate} relationships
 */
InvitationCreateDataAllOf.prototype['relationships'] = undefined;




export default InvitationCreateData;

