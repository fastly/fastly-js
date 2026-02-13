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
import Values503Responses from './Values503Responses';
import ValuesBandwidth from './ValuesBandwidth';
import ValuesBrowser from './ValuesBrowser';
import ValuesCacheHitRatio from './ValuesCacheHitRatio';
import ValuesCountryStats from './ValuesCountryStats';
import ValuesDuration from './ValuesDuration';
import ValuesMisses from './ValuesMisses';
import ValuesRate from './ValuesRate';
import ValuesRequests from './ValuesRequests';
import ValuesStatusCodes from './ValuesStatusCodes';

/**
 * The LogInsightsValues model module.
 * @module model/LogInsightsValues
 * @version 15.0.0-beta.1
 */
class LogInsightsValues {
    /**
     * Constructs a new <code>LogInsightsValues</code>.
     * @alias module:model/LogInsightsValues
     * @implements module:model/ValuesCacheHitRatio
     * @implements module:model/ValuesCountryStats
     * @implements module:model/ValuesStatusCodes
     * @implements module:model/Values503Responses
     * @implements module:model/ValuesBrowser
     * @implements module:model/ValuesRate
     * @implements module:model/ValuesBandwidth
     * @implements module:model/ValuesDuration
     * @implements module:model/ValuesMisses
     * @implements module:model/ValuesRequests
     */
    constructor() { 
        ValuesCacheHitRatio.initialize(this);ValuesCountryStats.initialize(this);ValuesStatusCodes.initialize(this);Values503Responses.initialize(this);ValuesBrowser.initialize(this);ValuesRate.initialize(this);ValuesBandwidth.initialize(this);ValuesDuration.initialize(this);ValuesMisses.initialize(this);ValuesRequests.initialize(this);
        LogInsightsValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogInsightsValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogInsightsValues} obj Optional instance to populate.
     * @return {module:model/LogInsightsValues} The populated <code>LogInsightsValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogInsightsValues();
            ValuesCacheHitRatio.constructFromObject(data, obj);
            ValuesCountryStats.constructFromObject(data, obj);
            ValuesStatusCodes.constructFromObject(data, obj);
            Values503Responses.constructFromObject(data, obj);
            ValuesBrowser.constructFromObject(data, obj);
            ValuesRate.constructFromObject(data, obj);
            ValuesBandwidth.constructFromObject(data, obj);
            ValuesDuration.constructFromObject(data, obj);
            ValuesMisses.constructFromObject(data, obj);
            ValuesRequests.constructFromObject(data, obj);

            if (data.hasOwnProperty('cache_hit_ratio')) {
                obj['cache_hit_ratio'] = ApiClient.convertToType(data['cache_hit_ratio'], 'Number');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('region_chr')) {
                obj['region_chr'] = ApiClient.convertToType(data['region_chr'], 'Number');
            }
            if (data.hasOwnProperty('region_error_rate')) {
                obj['region_error_rate'] = ApiClient.convertToType(data['region_error_rate'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('rate_per_status')) {
                obj['rate_per_status'] = ApiClient.convertToType(data['rate_per_status'], 'Number');
            }
            if (data.hasOwnProperty('rate_per_url')) {
                obj['rate_per_url'] = ApiClient.convertToType(data['rate_per_url'], 'Number');
            }
            if (data.hasOwnProperty('503_rate_per_url')) {
                obj['503_rate_per_url'] = ApiClient.convertToType(data['503_rate_per_url'], 'Number');
            }
            if (data.hasOwnProperty('browser_version')) {
                obj['browser_version'] = ApiClient.convertToType(data['browser_version'], 'String');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('average_bandwidth_bytes')) {
                obj['average_bandwidth_bytes'] = ApiClient.convertToType(data['average_bandwidth_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_percentage')) {
                obj['bandwidth_percentage'] = ApiClient.convertToType(data['bandwidth_percentage'], 'Number');
            }
            if (data.hasOwnProperty('average_response_time')) {
                obj['average_response_time'] = ApiClient.convertToType(data['average_response_time'], 'Number');
            }
            if (data.hasOwnProperty('p95_response_time')) {
                obj['p95_response_time'] = ApiClient.convertToType(data['p95_response_time'], 'Number');
            }
            if (data.hasOwnProperty('response_time_percentage')) {
                obj['response_time_percentage'] = ApiClient.convertToType(data['response_time_percentage'], 'Number');
            }
            if (data.hasOwnProperty('miss_rate')) {
                obj['miss_rate'] = ApiClient.convertToType(data['miss_rate'], 'Number');
            }
            if (data.hasOwnProperty('request_percentage')) {
                obj['request_percentage'] = ApiClient.convertToType(data['request_percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The cache hit ratio for the URL specified in the dimension.
 * @member {Number} cache_hit_ratio
 */
LogInsightsValues.prototype['cache_hit_ratio'] = undefined;

/**
 * The client's country subdivision code as defined by ISO 3166-2.
 * @member {String} region
 */
LogInsightsValues.prototype['region'] = undefined;

/**
 * The cache hit ratio for the region.
 * @member {Number} region_chr
 */
LogInsightsValues.prototype['region_chr'] = undefined;

/**
 * The error rate for the region.
 * @member {Number} region_error_rate
 */
LogInsightsValues.prototype['region_error_rate'] = undefined;

/**
 * The HTTP request path.
 * @member {String} url
 */
LogInsightsValues.prototype['url'] = undefined;

/**
 * The URL accounts for this percentage of the status code in this dimension.
 * @member {Number} rate_per_status
 */
LogInsightsValues.prototype['rate_per_status'] = undefined;

/**
 * The rate at which the reason in this dimension occurs among responses to this URL with a 503 status code.
 * @member {Number} rate_per_url
 */
LogInsightsValues.prototype['rate_per_url'] = undefined;

/**
 * The rate at which 503 status codes are returned for this URL.
 * @member {Number} 503_rate_per_url
 */
LogInsightsValues.prototype['503_rate_per_url'] = undefined;

/**
 * The version of the client's browser.
 * @member {String} browser_version
 */
LogInsightsValues.prototype['browser_version'] = undefined;

/**
 * The percentage of requests matching the value in the current dimension.
 * @member {Number} rate
 */
LogInsightsValues.prototype['rate'] = undefined;

/**
 * The average bandwidth in bytes for responses to requests to the URL in the current dimension.
 * @member {Number} average_bandwidth_bytes
 */
LogInsightsValues.prototype['average_bandwidth_bytes'] = undefined;

/**
 * The total bandwidth percentage for all responses to requests to the URL in the current dimension.
 * @member {Number} bandwidth_percentage
 */
LogInsightsValues.prototype['bandwidth_percentage'] = undefined;

/**
 * The average time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} average_response_time
 */
LogInsightsValues.prototype['average_response_time'] = undefined;

/**
 * The P95 time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} p95_response_time
 */
LogInsightsValues.prototype['p95_response_time'] = undefined;

/**
 * The total percentage of time to respond to all requests to the URL in the current dimension.
 * @member {Number} response_time_percentage
 */
LogInsightsValues.prototype['response_time_percentage'] = undefined;

/**
 * The miss rate for requests to the URL in the current dimension.
 * @member {Number} miss_rate
 */
LogInsightsValues.prototype['miss_rate'] = undefined;

/**
 * The percentage of all requests made to the URL in the current dimension.
 * @member {Number} request_percentage
 */
LogInsightsValues.prototype['request_percentage'] = undefined;


// Implement ValuesCacheHitRatio interface:
/**
 * The cache hit ratio for the URL specified in the dimension.
 * @member {Number} cache_hit_ratio
 */
ValuesCacheHitRatio.prototype['cache_hit_ratio'] = undefined;
// Implement ValuesCountryStats interface:
/**
 * The client's country subdivision code as defined by ISO 3166-2.
 * @member {String} region
 */
ValuesCountryStats.prototype['region'] = undefined;
/**
 * The cache hit ratio for the region.
 * @member {Number} region_chr
 */
ValuesCountryStats.prototype['region_chr'] = undefined;
/**
 * The error rate for the region.
 * @member {Number} region_error_rate
 */
ValuesCountryStats.prototype['region_error_rate'] = undefined;
// Implement ValuesStatusCodes interface:
/**
 * The HTTP request path.
 * @member {String} url
 */
ValuesStatusCodes.prototype['url'] = undefined;
/**
 * The URL accounts for this percentage of the status code in this dimension.
 * @member {Number} rate_per_status
 */
ValuesStatusCodes.prototype['rate_per_status'] = undefined;
/**
 * The rate at which the status code in this dimension occurs for this URL.
 * @member {Number} rate_per_url
 */
ValuesStatusCodes.prototype['rate_per_url'] = undefined;
// Implement Values503Responses interface:
/**
 * The HTTP request path.
 * @member {String} url
 */
Values503Responses.prototype['url'] = undefined;
/**
 * The rate at which the reason in this dimension occurs among responses to this URL with a 503 status code.
 * @member {Number} rate_per_url
 */
Values503Responses.prototype['rate_per_url'] = undefined;
/**
 * The rate at which 503 status codes are returned for this URL.
 * @member {Number} 503_rate_per_url
 */
Values503Responses.prototype['503_rate_per_url'] = undefined;
// Implement ValuesBrowser interface:
/**
 * The version of the client's browser.
 * @member {String} browser_version
 */
ValuesBrowser.prototype['browser_version'] = undefined;
/**
 * The percentage of requests by this version of the browser specified in the dimension.
 * @member {Number} rate
 */
ValuesBrowser.prototype['rate'] = undefined;
// Implement ValuesRate interface:
/**
 * The percentage of requests matching the value in the current dimension.
 * @member {Number} rate
 */
ValuesRate.prototype['rate'] = undefined;
// Implement ValuesBandwidth interface:
/**
 * The average bandwidth in bytes for responses to requests to the URL in the current dimension.
 * @member {Number} average_bandwidth_bytes
 */
ValuesBandwidth.prototype['average_bandwidth_bytes'] = undefined;
/**
 * The total bandwidth percentage for all responses to requests to the URL in the current dimension.
 * @member {Number} bandwidth_percentage
 */
ValuesBandwidth.prototype['bandwidth_percentage'] = undefined;
// Implement ValuesDuration interface:
/**
 * The average time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} average_response_time
 */
ValuesDuration.prototype['average_response_time'] = undefined;
/**
 * The P95 time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} p95_response_time
 */
ValuesDuration.prototype['p95_response_time'] = undefined;
/**
 * The total percentage of time to respond to all requests to the URL in the current dimension.
 * @member {Number} response_time_percentage
 */
ValuesDuration.prototype['response_time_percentage'] = undefined;
// Implement ValuesMisses interface:
/**
 * The miss rate for requests to the URL in the current dimension.
 * @member {Number} miss_rate
 */
ValuesMisses.prototype['miss_rate'] = undefined;
// Implement ValuesRequests interface:
/**
 * The percentage of all requests made to the URL in the current dimension.
 * @member {Number} request_percentage
 */
ValuesRequests.prototype['request_percentage'] = undefined;




export default LogInsightsValues;

