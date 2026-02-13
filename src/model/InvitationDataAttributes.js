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
import RoleUser from './RoleUser';

/**
 * The InvitationDataAttributes model module.
 * @module model/InvitationDataAttributes
 * @version 15.0.0-beta.3
 */
class InvitationDataAttributes {
    /**
     * Constructs a new <code>InvitationDataAttributes</code>.
     * @alias module:model/InvitationDataAttributes
     */
    constructor() { 
        
        InvitationDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvitationDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationDataAttributes} obj Optional instance to populate.
     * @return {module:model/InvitationDataAttributes} The populated <code>InvitationDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvitationDataAttributes();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('limit_services')) {
                obj['limit_services'] = ApiClient.convertToType(data['limit_services'], 'Boolean');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = RoleUser.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The email address of the invitee.
 * @member {String} email
 */
InvitationDataAttributes.prototype['email'] = undefined;

/**
 * Indicates the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */
InvitationDataAttributes.prototype['limit_services'] = undefined;

/**
 * @member {module:model/RoleUser} role
 */
InvitationDataAttributes.prototype['role'] = undefined;

/**
 * @member {Array.<String>} roles
 */
InvitationDataAttributes.prototype['roles'] = undefined;

/**
 * Indicates whether or not the invitation is active.
 * @member {module:model/InvitationDataAttributes.StatusCodeEnum} status_code
 */
InvitationDataAttributes.prototype['status_code'] = undefined;





/**
 * Allowed values for the <code>status_code</code> property.
 * @enum {Number}
 * @readonly
 */
InvitationDataAttributes['StatusCodeEnum'] = {

    /**
     * value: 0
     * @const
     */
    "inactive": 0,

    /**
     * value: 1
     * @const
     */
    "active": 1
};



export default InvitationDataAttributes;

