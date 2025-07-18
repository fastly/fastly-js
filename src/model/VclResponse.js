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
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';
import Vcl from './Vcl';

/**
 * The VclResponse model module.
 * @module model/VclResponse
 * @version 12.1.0
 */
class VclResponse {
    /**
     * Constructs a new <code>VclResponse</code>.
     * @alias module:model/VclResponse
     * @implements module:model/Vcl
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     */
    constructor() { 
        Vcl.initialize(this);ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);
        VclResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VclResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VclResponse} obj Optional instance to populate.
     * @return {module:model/VclResponse} The populated <code>VclResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VclResponse();
            Vcl.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('main')) {
                obj['main'] = ApiClient.convertToType(data['main'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
        }
        return obj;
    }


}

/**
 * The VCL code to be included.
 * @member {String} content
 */
VclResponse.prototype['content'] = undefined;

/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */
VclResponse.prototype['main'] = undefined;

/**
 * The name of this VCL.
 * @member {String} name
 */
VclResponse.prototype['name'] = undefined;

/**
 * @member {String} service_id
 */
VclResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
VclResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
VclResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
VclResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
VclResponse.prototype['updated_at'] = undefined;


// Implement Vcl interface:
/**
 * The VCL code to be included.
 * @member {String} content
 */
Vcl.prototype['content'] = undefined;
/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */
Vcl.prototype['main'] = undefined;
/**
 * The name of this VCL.
 * @member {String} name
 */
Vcl.prototype['name'] = undefined;
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




export default VclResponse;

