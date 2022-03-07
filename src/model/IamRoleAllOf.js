/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IamRoleAllOf model module.
 * @module model/IamRoleAllOf
 * @version 3.0.0-beta2
 */
class IamRoleAllOf {
    /**
     * Constructs a new <code>IamRoleAllOf</code>.
     * @alias module:model/IamRoleAllOf
     */
    constructor() { 
        
        IamRoleAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IamRoleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamRoleAllOf} obj Optional instance to populate.
     * @return {module:model/IamRoleAllOf} The populated <code>IamRoleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IamRoleAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean');
            }
            if (data.hasOwnProperty('permissions_count')) {
                obj['permissions_count'] = ApiClient.convertToType(data['permissions_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the role.
 * @member {String} id
 */
IamRoleAllOf.prototype['id'] = undefined;

/**
 * The type of the object.
 * @member {String} object
 */
IamRoleAllOf.prototype['object'] = undefined;

/**
 * Name of the role.
 * @member {String} name
 */
IamRoleAllOf.prototype['name'] = undefined;

/**
 * Description of the role.
 * @member {String} description
 */
IamRoleAllOf.prototype['description'] = undefined;

/**
 * This attribute is set to `true` if the role is managed by the customer. It is set to `false` if the role was created by Fastly.
 * @member {Boolean} custom
 */
IamRoleAllOf.prototype['custom'] = undefined;

/**
 * Number of permissions assigned to the role.
 * @member {Number} permissions_count
 */
IamRoleAllOf.prototype['permissions_count'] = undefined;






export default IamRoleAllOf;

