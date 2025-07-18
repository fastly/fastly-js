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
import Environment from './Environment';
import SchemasVersionResponse from './SchemasVersionResponse';

/**
 * The ServiceListResponseAllOf model module.
 * @module model/ServiceListResponseAllOf
 * @version 12.1.0
 */
class ServiceListResponseAllOf {
    /**
     * Constructs a new <code>ServiceListResponseAllOf</code>.
     * @alias module:model/ServiceListResponseAllOf
     */
    constructor() { 
        
        ServiceListResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceListResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceListResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceListResponseAllOf} The populated <code>ServiceListResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceListResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [SchemasVersionResponse]);
            }
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [Environment]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ServiceListResponseAllOf.prototype['id'] = undefined;

/**
 * Current [version](https://www.fastly.com/documentation/reference/api/services/version/) of the service.
 * @member {Number} version
 */
ServiceListResponseAllOf.prototype['version'] = undefined;

/**
 * A list of [versions](https://www.fastly.com/documentation/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceListResponseAllOf.prototype['versions'] = undefined;

/**
 * A list of environments where the service has been deployed.
 * @member {Array.<module:model/Environment>} environments
 */
ServiceListResponseAllOf.prototype['environments'] = undefined;






export default ServiceListResponseAllOf;

