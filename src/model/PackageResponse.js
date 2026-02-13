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
import Package from './Package';
import PackageMetadata from './PackageMetadata';
import PackageResponseAllOf from './PackageResponseAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The PackageResponse model module.
 * @module model/PackageResponse
 * @version 15.0.0-beta.0
 */
class PackageResponse {
    /**
     * Constructs a new <code>PackageResponse</code>.
     * @alias module:model/PackageResponse
     * @implements module:model/Package
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     * @implements module:model/PackageResponseAllOf
     */
    constructor() { 
        Package.initialize(this);ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);PackageResponseAllOf.initialize(this);
        PackageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PackageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackageResponse} obj Optional instance to populate.
     * @return {module:model/PackageResponse} The populated <code>PackageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageResponse();
            Package.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            PackageResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PackageMetadata.constructFromObject(data['metadata']);
            }
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PackageMetadata} metadata
 */
PackageResponse.prototype['metadata'] = undefined;

/**
 * @member {String} service_id
 */
PackageResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
PackageResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
PackageResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
PackageResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
PackageResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the package.
 * @member {String} id
 */
PackageResponse.prototype['id'] = undefined;


// Implement Package interface:
/**
 * @member {module:model/PackageMetadata} metadata
 */
Package.prototype['metadata'] = undefined;
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
// Implement PackageResponseAllOf interface:
/**
 * Alphanumeric string identifying the package.
 * @member {String} id
 */
PackageResponseAllOf.prototype['id'] = undefined;




export default PackageResponse;

