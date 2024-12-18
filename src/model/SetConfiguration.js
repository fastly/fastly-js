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
 * The SetConfiguration model module.
 * @module model/SetConfiguration
 * @version 8.0.0
 */
class SetConfiguration {
    /**
     * Constructs a new <code>SetConfiguration</code>.
     * @alias module:model/SetConfiguration
     */
    constructor() { 
        
        SetConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetConfiguration} obj Optional instance to populate.
     * @return {module:model/SetConfiguration} The populated <code>SetConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetConfiguration();

            if (data.hasOwnProperty('workspace_id')) {
                obj['workspace_id'] = ApiClient.convertToType(data['workspace_id'], 'String');
            }
            if (data.hasOwnProperty('traffic_ramp')) {
                obj['traffic_ramp'] = ApiClient.convertToType(data['traffic_ramp'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The new workspace_id. Required in the `PUT` request body when `product_id` is `ngwaf`. Optional in the `PATCH` request body for `ngwaf`.
 * @member {String} workspace_id
 */
SetConfiguration.prototype['workspace_id'] = undefined;

/**
 * The new traffic ramp. Optional in the `PATCH` request body for `ngwaf`.
 * @member {String} traffic_ramp
 */
SetConfiguration.prototype['traffic_ramp'] = undefined;

/**
 * The new mode to run the product in. One of `block`, `log`, or `off`. Optional in the `PATCH` request body for `ddos_protection`.
 * @member {String} mode
 */
SetConfiguration.prototype['mode'] = undefined;






export default SetConfiguration;

