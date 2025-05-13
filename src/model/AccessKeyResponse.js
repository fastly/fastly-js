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
 * The AccessKeyResponse model module.
 * @module model/AccessKeyResponse
 * @version 11.0.0
 */
class AccessKeyResponse {
    /**
     * Constructs a new <code>AccessKeyResponse</code>.
     * @alias module:model/AccessKeyResponse
     */
    constructor() { 
        
        AccessKeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessKeyResponse} obj Optional instance to populate.
     * @return {module:model/AccessKeyResponse} The populated <code>AccessKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessKeyResponse();

            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('buckets')) {
                obj['buckets'] = ApiClient.convertToType(data['buckets'], ['String']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Generated access key.
 * @member {String} access_key
 */
AccessKeyResponse.prototype['access_key'] = undefined;

/**
 * Generated secret key.
 * @member {String} secret_key
 */
AccessKeyResponse.prototype['secret_key'] = undefined;

/**
 * Description for the access key.
 * @member {String} description
 */
AccessKeyResponse.prototype['description'] = undefined;

/**
 * Permissions granted to an access key.
 * @member {String} permission
 */
AccessKeyResponse.prototype['permission'] = undefined;

/**
 * @member {Array.<String>} buckets
 */
AccessKeyResponse.prototype['buckets'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
AccessKeyResponse.prototype['created_at'] = undefined;






export default AccessKeyResponse;

