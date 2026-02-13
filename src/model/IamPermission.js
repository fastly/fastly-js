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

/**
 * The IamPermission model module.
 * @module model/IamPermission
 * @version 15.0.0-beta.4
 */
class IamPermission {
    /**
     * Constructs a new <code>IamPermission</code>.
     * @alias module:model/IamPermission
     */
    constructor() { 
        
        IamPermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IamPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamPermission} obj Optional instance to populate.
     * @return {module:model/IamPermission} The populated <code>IamPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IamPermission();

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
            if (data.hasOwnProperty('resource_name')) {
                obj['resource_name'] = ApiClient.convertToType(data['resource_name'], 'String');
            }
            if (data.hasOwnProperty('resource_description')) {
                obj['resource_description'] = ApiClient.convertToType(data['resource_description'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the permission.
 * @member {String} id
 */
IamPermission.prototype['id'] = undefined;

/**
 * The type of the object.
 * @member {String} object
 */
IamPermission.prototype['object'] = undefined;

/**
 * Name of the permission.
 * @member {String} name
 */
IamPermission.prototype['name'] = undefined;

/**
 * The description of the permission.
 * @member {String} description
 */
IamPermission.prototype['description'] = undefined;

/**
 * The name of the resource the operation will be performed on.
 * @member {String} resource_name
 */
IamPermission.prototype['resource_name'] = undefined;

/**
 * The description of the resource.
 * @member {String} resource_description
 */
IamPermission.prototype['resource_description'] = undefined;

/**
 * Permissions are either \"service\" level or \"account\" level.
 * @member {String} scope
 */
IamPermission.prototype['scope'] = undefined;






export default IamPermission;

