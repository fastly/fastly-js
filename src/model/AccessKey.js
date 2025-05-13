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
 * The AccessKey model module.
 * @module model/AccessKey
 * @version 11.0.0
 */
class AccessKey {
    /**
     * Constructs a new <code>AccessKey</code>.
     * @alias module:model/AccessKey
     * @param description {String} A description of the access key.
     * @param permission {String} The permissions granted to an access key.
     */
    constructor(description, permission) { 
        
        AccessKey.initialize(this, description, permission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, permission) { 
        obj['description'] = description;
        obj['permission'] = permission;
    }

    /**
     * Constructs a <code>AccessKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessKey} obj Optional instance to populate.
     * @return {module:model/AccessKey} The populated <code>AccessKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessKey();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('buckets')) {
                obj['buckets'] = ApiClient.convertToType(data['buckets'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A description of the access key.
 * @member {String} description
 */
AccessKey.prototype['description'] = undefined;

/**
 * The permissions granted to an access key.
 * @member {String} permission
 */
AccessKey.prototype['permission'] = undefined;

/**
 * @member {Array.<String>} buckets
 */
AccessKey.prototype['buckets'] = undefined;






export default AccessKey;

