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
import Acl from './Acl';
import AclResponseAllOf from './AclResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The AclResponse model module.
 * @module model/AclResponse
 * @version 7.4.0
 */
class AclResponse {
    /**
     * Constructs a new <code>AclResponse</code>.
     * @alias module:model/AclResponse
     * @implements module:model/Acl
     * @implements module:model/Timestamps
     * @implements module:model/AclResponseAllOf
     */
    constructor() { 
        Acl.initialize(this);Timestamps.initialize(this);AclResponseAllOf.initialize(this);
        AclResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AclResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclResponse} obj Optional instance to populate.
     * @return {module:model/AclResponse} The populated <code>AclResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AclResponse();
            Acl.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            AclResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
 * @member {String} name
 */
AclResponse.prototype['name'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
AclResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
AclResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
AclResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
AclResponse.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
AclResponse.prototype['version'] = undefined;

/**
 * @member {String} id
 */
AclResponse.prototype['id'] = undefined;


// Implement Acl interface:
/**
 * Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
 * @member {String} name
 */
Acl.prototype['name'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement AclResponseAllOf interface:
/**
 * @member {String} service_id
 */
AclResponseAllOf.prototype['service_id'] = undefined;
/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
AclResponseAllOf.prototype['version'] = undefined;
/**
 * @member {String} id
 */
AclResponseAllOf.prototype['id'] = undefined;




export default AclResponse;

