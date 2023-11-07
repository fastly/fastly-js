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
import RelationshipCustomer from './RelationshipCustomer';
import RelationshipCustomerCustomer from './RelationshipCustomerCustomer';
import RelationshipServiceInvitations from './RelationshipServiceInvitations';
import RelationshipServiceInvitationsServiceInvitations from './RelationshipServiceInvitationsServiceInvitations';

/**
 * The RelationshipsForInvitation model module.
 * @module model/RelationshipsForInvitation
 * @version 6.2.2
 */
class RelationshipsForInvitation {
    /**
     * Constructs a new <code>RelationshipsForInvitation</code>.
     * @alias module:model/RelationshipsForInvitation
     * @implements module:model/RelationshipCustomer
     * @implements module:model/RelationshipServiceInvitations
     */
    constructor() { 
        RelationshipCustomer.initialize(this);RelationshipServiceInvitations.initialize(this);
        RelationshipsForInvitation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForInvitation} obj Optional instance to populate.
     * @return {module:model/RelationshipsForInvitation} The populated <code>RelationshipsForInvitation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForInvitation();
            RelationshipCustomer.constructFromObject(data, obj);
            RelationshipServiceInvitations.constructFromObject(data, obj);

            if (data.hasOwnProperty('customer')) {
                obj['customer'] = RelationshipCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('service_invitations')) {
                obj['service_invitations'] = RelationshipServiceInvitationsServiceInvitations.constructFromObject(data['service_invitations']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipCustomerCustomer} customer
 */
RelationshipsForInvitation.prototype['customer'] = undefined;

/**
 * @member {module:model/RelationshipServiceInvitationsServiceInvitations} service_invitations
 */
RelationshipsForInvitation.prototype['service_invitations'] = undefined;


// Implement RelationshipCustomer interface:
/**
 * @member {module:model/RelationshipCustomerCustomer} customer
 */
RelationshipCustomer.prototype['customer'] = undefined;
// Implement RelationshipServiceInvitations interface:
/**
 * @member {module:model/RelationshipServiceInvitationsServiceInvitations} service_invitations
 */
RelationshipServiceInvitations.prototype['service_invitations'] = undefined;




export default RelationshipsForInvitation;

