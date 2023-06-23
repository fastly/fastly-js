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
import DirectorBackendAllOf from './DirectorBackendAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The DirectorBackend model module.
 * @module model/DirectorBackend
 * @version 4.2.2
 */
class DirectorBackend {
    /**
     * Constructs a new <code>DirectorBackend</code>.
     * @alias module:model/DirectorBackend
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/DirectorBackendAllOf
     */
    constructor() { 
        Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);DirectorBackendAllOf.initialize(this);
        DirectorBackend.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DirectorBackend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorBackend} obj Optional instance to populate.
     * @return {module:model/DirectorBackend} The populated <code>DirectorBackend</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectorBackend();
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            DirectorBackendAllOf.constructFromObject(data, obj);

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
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('backend_name')) {
                obj['backend_name'] = ApiClient.convertToType(data['backend_name'], 'String');
            }
            if (data.hasOwnProperty('director')) {
                obj['director'] = ApiClient.convertToType(data['director'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DirectorBackend.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
DirectorBackend.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DirectorBackend.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
DirectorBackend.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
DirectorBackend.prototype['version'] = undefined;

/**
 * The name of the backend.
 * @member {String} backend_name
 */
DirectorBackend.prototype['backend_name'] = undefined;

/**
 * Name for the Director.
 * @member {String} director
 */
DirectorBackend.prototype['director'] = undefined;


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
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
// Implement DirectorBackendAllOf interface:
/**
 * The name of the backend.
 * @member {String} backend_name
 */
DirectorBackendAllOf.prototype['backend_name'] = undefined;
/**
 * Name for the Director.
 * @member {String} director
 */
DirectorBackendAllOf.prototype['director'] = undefined;




export default DirectorBackend;

