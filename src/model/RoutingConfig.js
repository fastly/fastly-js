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
import InitialVersion from './InitialVersion';

/**
 * The RoutingConfig model module.
 * @module model/RoutingConfig
 * @version 16.1.0
 */
class RoutingConfig {
    /**
     * Constructs a new <code>RoutingConfig</code>.
     * All attributes for creating a routing config.
     * @alias module:model/RoutingConfig
     * @param name {String} The user-defined name for the routing config.
     */
    constructor(name) { 
        
        RoutingConfig.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RoutingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoutingConfig} obj Optional instance to populate.
     * @return {module:model/RoutingConfig} The populated <code>RoutingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoutingConfig();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('initial_version')) {
                obj['initial_version'] = InitialVersion.constructFromObject(data['initial_version']);
            }
        }
        return obj;
    }


}

/**
 * The user-defined name for the routing config.
 * @member {String} name
 */
RoutingConfig.prototype['name'] = undefined;

/**
 * @member {module:model/InitialVersion} initial_version
 */
RoutingConfig.prototype['initial_version'] = undefined;






export default RoutingConfig;

