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

/**
 * The DomainInspectorEntryDimensions model module.
 * @module model/DomainInspectorEntryDimensions
 * @version 6.1.0
 */
class DomainInspectorEntryDimensions {
    /**
     * Constructs a new <code>DomainInspectorEntryDimensions</code>.
     * The unique combination of dimensions associated with this timeseries.
     * @alias module:model/DomainInspectorEntryDimensions
     */
    constructor() { 
        
        DomainInspectorEntryDimensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainInspectorEntryDimensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainInspectorEntryDimensions} obj Optional instance to populate.
     * @return {module:model/DomainInspectorEntryDimensions} The populated <code>DomainInspectorEntryDimensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainInspectorEntryDimensions();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The geographic region from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across regions.
 * @member {String} region
 */
DomainInspectorEntryDimensions.prototype['region'] = undefined;

/**
 * The POP from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across POPs.
 * @member {String} datacenter
 */
DomainInspectorEntryDimensions.prototype['datacenter'] = undefined;

/**
 * The domain from which the edge responses in this data entry were delivered. If unspecified, results are aggregated across domains.
 * @member {String} domain
 */
DomainInspectorEntryDimensions.prototype['domain'] = undefined;






export default DomainInspectorEntryDimensions;

