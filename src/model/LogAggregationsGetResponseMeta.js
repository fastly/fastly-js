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
import LogAggregationsGetResponseMetaFilters from './LogAggregationsGetResponseMetaFilters';

/**
 * The LogAggregationsGetResponseMeta model module.
 * @module model/LogAggregationsGetResponseMeta
 * @version 13.0.0
 */
class LogAggregationsGetResponseMeta {
    /**
     * Constructs a new <code>LogAggregationsGetResponseMeta</code>.
     * @alias module:model/LogAggregationsGetResponseMeta
     */
    constructor() { 
        
        LogAggregationsGetResponseMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogAggregationsGetResponseMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogAggregationsGetResponseMeta} obj Optional instance to populate.
     * @return {module:model/LogAggregationsGetResponseMeta} The populated <code>LogAggregationsGetResponseMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogAggregationsGetResponseMeta();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = LogAggregationsGetResponseMetaFilters.constructFromObject(data['filters']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the ID of the service for which data should be returned.
 * @member {String} service_id
 */
LogAggregationsGetResponseMeta.prototype['service_id'] = undefined;

/**
 * Start time for the query as supplied in the request.
 * @member {String} start
 */
LogAggregationsGetResponseMeta.prototype['start'] = undefined;

/**
 * End time for the query as supplied in the request.
 * @member {String} end
 */
LogAggregationsGetResponseMeta.prototype['end'] = undefined;

/**
 * Number of records per page.
 * @member {Number} limit
 * @default 20
 */
LogAggregationsGetResponseMeta.prototype['limit'] = 20;

/**
 * Comma-separated list of the series names whose values were used to sort the results.
 * @member {String} sort
 */
LogAggregationsGetResponseMeta.prototype['sort'] = undefined;

/**
 * @member {module:model/LogAggregationsGetResponseMetaFilters} filters
 */
LogAggregationsGetResponseMeta.prototype['filters'] = undefined;






export default LogAggregationsGetResponseMeta;

