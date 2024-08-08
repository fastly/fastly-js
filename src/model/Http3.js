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
import Http3AllOf from './Http3AllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The Http3 model module.
 * @module model/Http3
 * @version 7.7.0
 */
class Http3 {
    /**
     * Constructs a new <code>Http3</code>.
     * @alias module:model/Http3
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     * @implements module:model/Http3AllOf
     */
    constructor() { 
        ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);Http3AllOf.initialize(this);
        Http3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Http3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Http3} obj Optional instance to populate.
     * @return {module:model/Http3} The populated <code>Http3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Http3();
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            Http3AllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
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
            if (data.hasOwnProperty('feature_revision')) {
                obj['feature_revision'] = ApiClient.convertToType(data['feature_revision'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service_id
 */
Http3.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
Http3.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Http3.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Http3.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Http3.prototype['updated_at'] = undefined;

/**
 * Revision number of the HTTP/3 feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
Http3.prototype['feature_revision'] = undefined;


// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
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
// Implement Http3AllOf interface:
/**
 * Revision number of the HTTP/3 feature implementation. Defaults to the most recent revision.
 * @member {Number} feature_revision
 */
Http3AllOf.prototype['feature_revision'] = undefined;




export default Http3;

