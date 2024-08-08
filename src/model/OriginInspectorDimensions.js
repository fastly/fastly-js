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
 * The OriginInspectorDimensions model module.
 * @module model/OriginInspectorDimensions
 * @version 7.7.0
 */
class OriginInspectorDimensions {
    /**
     * Constructs a new <code>OriginInspectorDimensions</code>.
     * The unique combination of dimensions associated with this timeseries.
     * @alias module:model/OriginInspectorDimensions
     */
    constructor() { 
        
        OriginInspectorDimensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorDimensions} obj Optional instance to populate.
     * @return {module:model/OriginInspectorDimensions} The populated <code>OriginInspectorDimensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorDimensions();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The geographic region from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across regions.
 * @member {String} region
 */
OriginInspectorDimensions.prototype['region'] = undefined;

/**
 * The POP from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across POPs.
 * @member {String} datacenter
 */
OriginInspectorDimensions.prototype['datacenter'] = undefined;

/**
 * The origin host from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across origin hosts.
 * @member {String} host
 */
OriginInspectorDimensions.prototype['host'] = undefined;






export default OriginInspectorDimensions;

