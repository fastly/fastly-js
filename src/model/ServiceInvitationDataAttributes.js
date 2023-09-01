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

/**
 * The ServiceInvitationDataAttributes model module.
 * @module model/ServiceInvitationDataAttributes
 * @version 6.1.0
 */
class ServiceInvitationDataAttributes {
    /**
     * Constructs a new <code>ServiceInvitationDataAttributes</code>.
     * @alias module:model/ServiceInvitationDataAttributes
     */
    constructor() { 
        
        ServiceInvitationDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceInvitationDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceInvitationDataAttributes} obj Optional instance to populate.
     * @return {module:model/ServiceInvitationDataAttributes} The populated <code>ServiceInvitationDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceInvitationDataAttributes();

            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The permission the accepting user will have in relation to the service.
 * @member {module:model/ServiceInvitationDataAttributes.PermissionEnum} permission
 * @default 'full'
 */
ServiceInvitationDataAttributes.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
ServiceInvitationDataAttributes['PermissionEnum'] = {

    /**
     * value: "full"
     * @const
     */
    "full": "full",

    /**
     * value: "read_only"
     * @const
     */
    "read_only": "read_only",

    /**
     * value: "purge_select"
     * @const
     */
    "purge_select": "purge_select",

    /**
     * value: "purge_all"
     * @const
     */
    "purge_all": "purge_all"
};



export default ServiceInvitationDataAttributes;

