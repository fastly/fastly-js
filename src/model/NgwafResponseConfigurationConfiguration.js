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
 * The NgwafResponseConfigurationConfiguration model module.
 * @module model/NgwafResponseConfigurationConfiguration
 * @version 11.0.0
 */
class NgwafResponseConfigurationConfiguration {
    /**
     * Constructs a new <code>NgwafResponseConfigurationConfiguration</code>.
     * @alias module:model/NgwafResponseConfigurationConfiguration
     */
    constructor() { 
        
        NgwafResponseConfigurationConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NgwafResponseConfigurationConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafResponseConfigurationConfiguration} obj Optional instance to populate.
     * @return {module:model/NgwafResponseConfigurationConfiguration} The populated <code>NgwafResponseConfigurationConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafResponseConfigurationConfiguration();

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
 * Workspace ID
 * @member {String} workspace_id
 */
NgwafResponseConfigurationConfiguration.prototype['workspace_id'] = undefined;

/**
 * The percentage of traffic to inspect.
 * @member {String} traffic_ramp
 */
NgwafResponseConfigurationConfiguration.prototype['traffic_ramp'] = undefined;






export default NgwafResponseConfigurationConfiguration;

