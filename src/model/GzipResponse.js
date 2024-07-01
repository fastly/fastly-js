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
import Gzip from './Gzip';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The GzipResponse model module.
 * @module model/GzipResponse
 * @version 7.5.0
 */
class GzipResponse {
    /**
     * Constructs a new <code>GzipResponse</code>.
     * @alias module:model/GzipResponse
     * @implements module:model/Gzip
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/Timestamps
     */
    constructor() { 
        Gzip.initialize(this);ServiceIdAndVersionString.initialize(this);Timestamps.initialize(this);
        GzipResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GzipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GzipResponse} obj Optional instance to populate.
     * @return {module:model/GzipResponse} The populated <code>GzipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GzipResponse();
            Gzip.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('content_types')) {
                obj['content_types'] = ApiClient.convertToType(data['content_types'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
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
        }
        return obj;
    }


}

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
GzipResponse.prototype['cache_condition'] = undefined;

/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */
GzipResponse.prototype['content_types'] = undefined;

/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */
GzipResponse.prototype['extensions'] = undefined;

/**
 * Name of the gzip configuration.
 * @member {String} name
 */
GzipResponse.prototype['name'] = undefined;

/**
 * @member {String} service_id
 */
GzipResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
GzipResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
GzipResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
GzipResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
GzipResponse.prototype['updated_at'] = undefined;


// Implement Gzip interface:
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
Gzip.prototype['cache_condition'] = undefined;
/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */
Gzip.prototype['content_types'] = undefined;
/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */
Gzip.prototype['extensions'] = undefined;
/**
 * Name of the gzip configuration.
 * @member {String} name
 */
Gzip.prototype['name'] = undefined;
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;
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




export default GzipResponse;

