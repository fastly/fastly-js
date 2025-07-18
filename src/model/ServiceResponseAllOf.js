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
 * The ServiceResponseAllOf model module.
 * @module model/ServiceResponseAllOf
 * @version 12.1.0
 */
class ServiceResponseAllOf {
    /**
     * Constructs a new <code>ServiceResponseAllOf</code>.
     * @alias module:model/ServiceResponseAllOf
     */
    constructor() { 
        
        ServiceResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceResponseAllOf} The populated <code>ServiceResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('publish_key')) {
                obj['publish_key'] = ApiClient.convertToType(data['publish_key'], 'String');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
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
ServiceResponseAllOf.prototype['id'] = undefined;

/**
 * Unused at this time.
 * @member {String} publish_key
 */
ServiceResponseAllOf.prototype['publish_key'] = undefined;

/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */
ServiceResponseAllOf.prototype['paused'] = undefined;

/**
 * A list of [versions](https://www.fastly.com/documentation/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceResponseAllOf.prototype['versions'] = undefined;

/**
 * A list of environments where the service has been deployed.
 * @member {Array.<module:model/Environment>} environments
 */
ServiceResponseAllOf.prototype['environments'] = undefined;






export default ServiceResponseAllOf;

