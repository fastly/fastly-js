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
import PlatformMetadata from './PlatformMetadata';
import PlatformValues from './PlatformValues';

/**
 * The PlatformMetricsResponse model module.
 * @module model/PlatformMetricsResponse
 * @version 15.0.0-beta.3
 */
class PlatformMetricsResponse {
    /**
     * Constructs a new <code>PlatformMetricsResponse</code>.
     * @alias module:model/PlatformMetricsResponse
     */
    constructor() { 
        
        PlatformMetricsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformMetricsResponse} obj Optional instance to populate.
     * @return {module:model/PlatformMetricsResponse} The populated <code>PlatformMetricsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformMetricsResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PlatformMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PlatformValues]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PlatformMetadata} meta
 */
PlatformMetricsResponse.prototype['meta'] = undefined;

/**
 * An array of values representing the metric values at each point in time. Note that this dataset is sparse: only the keys with non-zero values will be included in the record. 
 * @member {Array.<module:model/PlatformValues>} data
 */
PlatformMetricsResponse.prototype['data'] = undefined;






export default PlatformMetricsResponse;

