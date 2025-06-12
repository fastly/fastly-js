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
import LogTimeseriesGetResponseMetaFilters from './LogTimeseriesGetResponseMetaFilters';

/**
 * The LogTimeseriesGetResponseMeta model module.
 * @module model/LogTimeseriesGetResponseMeta
 * @version 12.0.0
 */
class LogTimeseriesGetResponseMeta {
    /**
     * Constructs a new <code>LogTimeseriesGetResponseMeta</code>.
     * @alias module:model/LogTimeseriesGetResponseMeta
     */
    constructor() { 
        
        LogTimeseriesGetResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogTimeseriesGetResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogTimeseriesGetResponseMeta} obj Optional instance to populate.
     * @return {module:model/LogTimeseriesGetResponseMeta} The populated <code>LogTimeseriesGetResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogTimeseriesGetResponseMeta();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('granularity')) {
                obj['granularity'] = ApiClient.convertToType(data['granularity'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = LogTimeseriesGetResponseMetaFilters.constructFromObject(data['filters']);
            }
        }
        return obj;
    }


}

/**
 * ID of the service for which data was returned.
 * @member {String} service_id
 */
LogTimeseriesGetResponseMeta.prototype['service_id'] = undefined;

/**
 * Start time for the query as supplied in the request.
 * @member {String} start
 */
LogTimeseriesGetResponseMeta.prototype['start'] = undefined;

/**
 * End time for the query as supplied in the request.
 * @member {String} end
 */
LogTimeseriesGetResponseMeta.prototype['end'] = undefined;

/**
 * The granularity of the time buckets in the response.
 * @member {String} granularity
 */
LogTimeseriesGetResponseMeta.prototype['granularity'] = undefined;

/**
 * @member {module:model/LogTimeseriesGetResponseMetaFilters} filters
 */
LogTimeseriesGetResponseMeta.prototype['filters'] = undefined;






export default LogTimeseriesGetResponseMeta;

