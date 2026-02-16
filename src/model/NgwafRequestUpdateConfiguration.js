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
 * The NgwafRequestUpdateConfiguration model module.
 * @module model/NgwafRequestUpdateConfiguration
 * @version 15.0.0
 */
class NgwafRequestUpdateConfiguration {
    /**
     * Constructs a new <code>NgwafRequestUpdateConfiguration</code>.
     * @alias module:model/NgwafRequestUpdateConfiguration
     */
    constructor() { 
        
        NgwafRequestUpdateConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NgwafRequestUpdateConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafRequestUpdateConfiguration} obj Optional instance to populate.
     * @return {module:model/NgwafRequestUpdateConfiguration} The populated <code>NgwafRequestUpdateConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafRequestUpdateConfiguration();

            if (data.hasOwnProperty('workspace_id')) {
                obj['workspace_id'] = ApiClient.convertToType(data['workspace_id'], 'String');
            }
            if (data.hasOwnProperty('traffic_ramp')) {
                obj['traffic_ramp'] = ApiClient.convertToType(data['traffic_ramp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The workspace to link.
 * @member {String} workspace_id
 */
NgwafRequestUpdateConfiguration.prototype['workspace_id'] = undefined;

/**
 * The percentage of traffic to inspect.
 * @member {String} traffic_ramp
 */
NgwafRequestUpdateConfiguration.prototype['traffic_ramp'] = undefined;






export default NgwafRequestUpdateConfiguration;

