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
 * The LogInsightsMetaFilter model module.
 * @module model/LogInsightsMetaFilter
 * @version 8.0.0
 */
class LogInsightsMetaFilter {
    /**
     * Constructs a new <code>LogInsightsMetaFilter</code>.
     * The filters that were supplied in the request.
     * @alias module:model/LogInsightsMetaFilter
     */
    constructor() { 
        
        LogInsightsMetaFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogInsightsMetaFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogInsightsMetaFilter} obj Optional instance to populate.
     * @return {module:model/LogInsightsMetaFilter} The populated <code>LogInsightsMetaFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogInsightsMetaFilter();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('domain_exact_match')) {
                obj['domain_exact_match'] = ApiClient.convertToType(data['domain_exact_match'], 'Boolean');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Specifies the ID of the service for which data should be returned.
 * @member {String} service_id
 */
LogInsightsMetaFilter.prototype['service_id'] = undefined;

/**
 * Start time for the query as supplied in the request.
 * @member {String} start
 */
LogInsightsMetaFilter.prototype['start'] = undefined;

/**
 * End time for the query as supplied in the request.
 * @member {String} end
 */
LogInsightsMetaFilter.prototype['end'] = undefined;

/**
 * Value of the `domain_exact_match` filter as supplied in the request.
 * @member {Boolean} domain_exact_match
 */
LogInsightsMetaFilter.prototype['domain_exact_match'] = undefined;

/**
 * Number of records per page.
 * @member {Number} limit
 * @default 20
 */
LogInsightsMetaFilter.prototype['limit'] = 20;






export default LogInsightsMetaFilter;
