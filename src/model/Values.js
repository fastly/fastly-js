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
 * The Values model module.
 * @module model/Values
 * @version 6.2.2
 */
class Values {
    /**
     * Constructs a new <code>Values</code>.
     * The results of the query, optionally filtered and grouped over the requested timespan.
     * @alias module:model/Values
     */
    constructor() { 
        
        Values.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Values} obj Optional instance to populate.
     * @return {module:model/Values} The populated <code>Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Values();

            if (data.hasOwnProperty('edge_requests')) {
                obj['edge_requests'] = ApiClient.convertToType(data['edge_requests'], 'Number');
            }
            if (data.hasOwnProperty('edge_resp_header_bytes')) {
                obj['edge_resp_header_bytes'] = ApiClient.convertToType(data['edge_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_resp_body_bytes')) {
                obj['edge_resp_body_bytes'] = ApiClient.convertToType(data['edge_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('status_1xx')) {
                obj['status_1xx'] = ApiClient.convertToType(data['status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('status_2xx')) {
                obj['status_2xx'] = ApiClient.convertToType(data['status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('status_3xx')) {
                obj['status_3xx'] = ApiClient.convertToType(data['status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('status_4xx')) {
                obj['status_4xx'] = ApiClient.convertToType(data['status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('status_5xx')) {
                obj['status_5xx'] = ApiClient.convertToType(data['status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('status_200')) {
                obj['status_200'] = ApiClient.convertToType(data['status_200'], 'Number');
            }
            if (data.hasOwnProperty('status_204')) {
                obj['status_204'] = ApiClient.convertToType(data['status_204'], 'Number');
            }
            if (data.hasOwnProperty('status_206')) {
                obj['status_206'] = ApiClient.convertToType(data['status_206'], 'Number');
            }
            if (data.hasOwnProperty('status_301')) {
                obj['status_301'] = ApiClient.convertToType(data['status_301'], 'Number');
            }
            if (data.hasOwnProperty('status_302')) {
                obj['status_302'] = ApiClient.convertToType(data['status_302'], 'Number');
            }
            if (data.hasOwnProperty('status_304')) {
                obj['status_304'] = ApiClient.convertToType(data['status_304'], 'Number');
            }
            if (data.hasOwnProperty('status_400')) {
                obj['status_400'] = ApiClient.convertToType(data['status_400'], 'Number');
            }
            if (data.hasOwnProperty('status_401')) {
                obj['status_401'] = ApiClient.convertToType(data['status_401'], 'Number');
            }
            if (data.hasOwnProperty('status_403')) {
                obj['status_403'] = ApiClient.convertToType(data['status_403'], 'Number');
            }
            if (data.hasOwnProperty('status_404')) {
                obj['status_404'] = ApiClient.convertToType(data['status_404'], 'Number');
            }
            if (data.hasOwnProperty('status_416')) {
                obj['status_416'] = ApiClient.convertToType(data['status_416'], 'Number');
            }
            if (data.hasOwnProperty('status_429')) {
                obj['status_429'] = ApiClient.convertToType(data['status_429'], 'Number');
            }
            if (data.hasOwnProperty('status_500')) {
                obj['status_500'] = ApiClient.convertToType(data['status_500'], 'Number');
            }
            if (data.hasOwnProperty('status_501')) {
                obj['status_501'] = ApiClient.convertToType(data['status_501'], 'Number');
            }
            if (data.hasOwnProperty('status_502')) {
                obj['status_502'] = ApiClient.convertToType(data['status_502'], 'Number');
            }
            if (data.hasOwnProperty('status_503')) {
                obj['status_503'] = ApiClient.convertToType(data['status_503'], 'Number');
            }
            if (data.hasOwnProperty('status_504')) {
                obj['status_504'] = ApiClient.convertToType(data['status_504'], 'Number');
            }
            if (data.hasOwnProperty('status_505')) {
                obj['status_505'] = ApiClient.convertToType(data['status_505'], 'Number');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('resp_header_bytes')) {
                obj['resp_header_bytes'] = ApiClient.convertToType(data['resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('resp_body_bytes')) {
                obj['resp_body_bytes'] = ApiClient.convertToType(data['resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bereq_header_bytes')) {
                obj['bereq_header_bytes'] = ApiClient.convertToType(data['bereq_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bereq_body_bytes')) {
                obj['bereq_body_bytes'] = ApiClient.convertToType(data['bereq_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('edge_hit_requests')) {
                obj['edge_hit_requests'] = ApiClient.convertToType(data['edge_hit_requests'], 'Number');
            }
            if (data.hasOwnProperty('edge_miss_requests')) {
                obj['edge_miss_requests'] = ApiClient.convertToType(data['edge_miss_requests'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetches')) {
                obj['origin_fetches'] = ApiClient.convertToType(data['origin_fetches'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_resp_header_bytes')) {
                obj['origin_fetch_resp_header_bytes'] = ApiClient.convertToType(data['origin_fetch_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('origin_fetch_resp_body_bytes')) {
                obj['origin_fetch_resp_body_bytes'] = ApiClient.convertToType(data['origin_fetch_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
            if (data.hasOwnProperty('edge_hit_ratio')) {
                obj['edge_hit_ratio'] = ApiClient.convertToType(data['edge_hit_ratio'], 'Number');
            }
            if (data.hasOwnProperty('origin_offload')) {
                obj['origin_offload'] = ApiClient.convertToType(data['origin_offload'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_200')) {
                obj['origin_status_200'] = ApiClient.convertToType(data['origin_status_200'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_204')) {
                obj['origin_status_204'] = ApiClient.convertToType(data['origin_status_204'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_206')) {
                obj['origin_status_206'] = ApiClient.convertToType(data['origin_status_206'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_301')) {
                obj['origin_status_301'] = ApiClient.convertToType(data['origin_status_301'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_302')) {
                obj['origin_status_302'] = ApiClient.convertToType(data['origin_status_302'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_304')) {
                obj['origin_status_304'] = ApiClient.convertToType(data['origin_status_304'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_400')) {
                obj['origin_status_400'] = ApiClient.convertToType(data['origin_status_400'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_401')) {
                obj['origin_status_401'] = ApiClient.convertToType(data['origin_status_401'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_403')) {
                obj['origin_status_403'] = ApiClient.convertToType(data['origin_status_403'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_404')) {
                obj['origin_status_404'] = ApiClient.convertToType(data['origin_status_404'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_416')) {
                obj['origin_status_416'] = ApiClient.convertToType(data['origin_status_416'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_429')) {
                obj['origin_status_429'] = ApiClient.convertToType(data['origin_status_429'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_500')) {
                obj['origin_status_500'] = ApiClient.convertToType(data['origin_status_500'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_501')) {
                obj['origin_status_501'] = ApiClient.convertToType(data['origin_status_501'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_502')) {
                obj['origin_status_502'] = ApiClient.convertToType(data['origin_status_502'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_503')) {
                obj['origin_status_503'] = ApiClient.convertToType(data['origin_status_503'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_504')) {
                obj['origin_status_504'] = ApiClient.convertToType(data['origin_status_504'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_505')) {
                obj['origin_status_505'] = ApiClient.convertToType(data['origin_status_505'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_1xx')) {
                obj['origin_status_1xx'] = ApiClient.convertToType(data['origin_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_2xx')) {
                obj['origin_status_2xx'] = ApiClient.convertToType(data['origin_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_3xx')) {
                obj['origin_status_3xx'] = ApiClient.convertToType(data['origin_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_4xx')) {
                obj['origin_status_4xx'] = ApiClient.convertToType(data['origin_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('origin_status_5xx')) {
                obj['origin_status_5xx'] = ApiClient.convertToType(data['origin_status_5xx'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of requests sent by end users to Fastly.
 * @member {Number} edge_requests
 */
Values.prototype['edge_requests'] = undefined;

/**
 * Total header bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_header_bytes
 */
Values.prototype['edge_resp_header_bytes'] = undefined;

/**
 * Total body bytes delivered from Fastly to the end user.
 * @member {Number} edge_resp_body_bytes
 */
Values.prototype['edge_resp_body_bytes'] = undefined;

/**
 * Number of 1xx \"Informational\" category status codes delivered.
 * @member {Number} status_1xx
 */
Values.prototype['status_1xx'] = undefined;

/**
 * Number of 2xx \"Success\" status codes delivered.
 * @member {Number} status_2xx
 */
Values.prototype['status_2xx'] = undefined;

/**
 * Number of 3xx \"Redirection\" codes delivered.
 * @member {Number} status_3xx
 */
Values.prototype['status_3xx'] = undefined;

/**
 * Number of 4xx \"Client Error\" codes delivered.
 * @member {Number} status_4xx
 */
Values.prototype['status_4xx'] = undefined;

/**
 * Number of 5xx \"Server Error\" codes delivered.
 * @member {Number} status_5xx
 */
Values.prototype['status_5xx'] = undefined;

/**
 * Number of responses delivered with status code 200 (Success).
 * @member {Number} status_200
 */
Values.prototype['status_200'] = undefined;

/**
 * Number of responses delivered with status code 204 (No Content).
 * @member {Number} status_204
 */
Values.prototype['status_204'] = undefined;

/**
 * Number of responses delivered with status code 206 (Partial Content).
 * @member {Number} status_206
 */
Values.prototype['status_206'] = undefined;

/**
 * Number of responses delivered with status code 301 (Moved Permanently).
 * @member {Number} status_301
 */
Values.prototype['status_301'] = undefined;

/**
 * Number of responses delivered with status code 302 (Found).
 * @member {Number} status_302
 */
Values.prototype['status_302'] = undefined;

/**
 * Number of responses delivered with status code 304 (Not Modified).
 * @member {Number} status_304
 */
Values.prototype['status_304'] = undefined;

/**
 * Number of responses delivered with status code 400 (Bad Request).
 * @member {Number} status_400
 */
Values.prototype['status_400'] = undefined;

/**
 * Number of responses delivered with status code 401 (Unauthorized).
 * @member {Number} status_401
 */
Values.prototype['status_401'] = undefined;

/**
 * Number of responses delivered with status code 403 (Forbidden).
 * @member {Number} status_403
 */
Values.prototype['status_403'] = undefined;

/**
 * Number of responses delivered with status code 404 (Not Found).
 * @member {Number} status_404
 */
Values.prototype['status_404'] = undefined;

/**
 * Number of responses delivered with status code 416 (Range Not Satisfiable).
 * @member {Number} status_416
 */
Values.prototype['status_416'] = undefined;

/**
 * Number of responses delivered with status code 429 (Too Many Requests).
 * @member {Number} status_429
 */
Values.prototype['status_429'] = undefined;

/**
 * Number of responses delivered with status code 500 (Internal Server Error).
 * @member {Number} status_500
 */
Values.prototype['status_500'] = undefined;

/**
 * Number of responses delivered with status code 501 (Not Implemented).
 * @member {Number} status_501
 */
Values.prototype['status_501'] = undefined;

/**
 * Number of responses delivered with status code 502 (Bad Gateway).
 * @member {Number} status_502
 */
Values.prototype['status_502'] = undefined;

/**
 * Number of responses delivered with status code 503 (Service Unavailable).
 * @member {Number} status_503
 */
Values.prototype['status_503'] = undefined;

/**
 * Number of responses delivered with status code 504 (Gateway Timeout).
 * @member {Number} status_504
 */
Values.prototype['status_504'] = undefined;

/**
 * Number of responses delivered with status code 505 (HTTP Version Not Supported).
 * @member {Number} status_505
 */
Values.prototype['status_505'] = undefined;

/**
 * Number of requests processed.
 * @member {Number} requests
 */
Values.prototype['requests'] = undefined;

/**
 * Total header bytes delivered.
 * @member {Number} resp_header_bytes
 */
Values.prototype['resp_header_bytes'] = undefined;

/**
 * Total body bytes delivered.
 * @member {Number} resp_body_bytes
 */
Values.prototype['resp_body_bytes'] = undefined;

/**
 * Total header bytes sent to origin.
 * @member {Number} bereq_header_bytes
 */
Values.prototype['bereq_header_bytes'] = undefined;

/**
 * Total body bytes sent to origin.
 * @member {Number} bereq_body_bytes
 */
Values.prototype['bereq_body_bytes'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a hit at the edge.
 * @member {Number} edge_hit_requests
 */
Values.prototype['edge_hit_requests'] = undefined;

/**
 * Number of requests sent by end users to Fastly that resulted in a miss at the edge.
 * @member {Number} edge_miss_requests
 */
Values.prototype['edge_miss_requests'] = undefined;

/**
 * Number of requests sent to origin.
 * @member {Number} origin_fetches
 */
Values.prototype['origin_fetches'] = undefined;

/**
 * Total header bytes received from origin.
 * @member {Number} origin_fetch_resp_header_bytes
 */
Values.prototype['origin_fetch_resp_header_bytes'] = undefined;

/**
 * Total body bytes received from origin.
 * @member {Number} origin_fetch_resp_body_bytes
 */
Values.prototype['origin_fetch_resp_body_bytes'] = undefined;

/**
 * Total bytes delivered (`resp_header_bytes` + `resp_body_bytes` + `bereq_header_bytes` + `bereq_body_bytes`).
 * @member {Number} bandwidth
 */
Values.prototype['bandwidth'] = undefined;

/**
 * Ratio of cache hits to cache misses at the edge, between 0 and 1 (`edge_hit_requests` / (`edge_hit_requests` + `edge_miss_requests`)).
 * @member {Number} edge_hit_ratio
 */
Values.prototype['edge_hit_ratio'] = undefined;

/**
 * Ratio of response bytes delivered from the edge compared to what is delivered from origin, between 0 and 1. (`edge_resp_body_bytes` + `edge_resp_header_bytes`) / (`origin_fetch_resp_body_bytes` + `origin_fetch_resp_header_bytes` + `edge_resp_body_bytes` + `edge_resp_header_bytes`).
 * @member {Number} origin_offload
 */
Values.prototype['origin_offload'] = undefined;

/**
 * Number of responses received from origin with status code 200 (Success).
 * @member {Number} origin_status_200
 */
Values.prototype['origin_status_200'] = undefined;

/**
 * Number of responses received from origin with status code 204 (No Content).
 * @member {Number} origin_status_204
 */
Values.prototype['origin_status_204'] = undefined;

/**
 * Number of responses received from origin with status code 206 (Partial Content).
 * @member {Number} origin_status_206
 */
Values.prototype['origin_status_206'] = undefined;

/**
 * Number of responses received from origin with status code 301 (Moved Permanently).
 * @member {Number} origin_status_301
 */
Values.prototype['origin_status_301'] = undefined;

/**
 * Number of responses received from origin with status code 302 (Found).
 * @member {Number} origin_status_302
 */
Values.prototype['origin_status_302'] = undefined;

/**
 * Number of responses received from origin with status code 304 (Not Modified).
 * @member {Number} origin_status_304
 */
Values.prototype['origin_status_304'] = undefined;

/**
 * Number of responses received from origin with status code 400 (Bad Request).
 * @member {Number} origin_status_400
 */
Values.prototype['origin_status_400'] = undefined;

/**
 * Number of responses received from origin with status code 401 (Unauthorized).
 * @member {Number} origin_status_401
 */
Values.prototype['origin_status_401'] = undefined;

/**
 * Number of responses received from origin with status code 403 (Forbidden).
 * @member {Number} origin_status_403
 */
Values.prototype['origin_status_403'] = undefined;

/**
 * Number of responses received from origin with status code 404 (Not Found).
 * @member {Number} origin_status_404
 */
Values.prototype['origin_status_404'] = undefined;

/**
 * Number of responses received from origin with status code 416 (Range Not Satisfiable).
 * @member {Number} origin_status_416
 */
Values.prototype['origin_status_416'] = undefined;

/**
 * Number of responses received from origin with status code 429 (Too Many Requests).
 * @member {Number} origin_status_429
 */
Values.prototype['origin_status_429'] = undefined;

/**
 * Number of responses received from origin with status code 500 (Internal Server Error).
 * @member {Number} origin_status_500
 */
Values.prototype['origin_status_500'] = undefined;

/**
 * Number of responses received from origin with status code 501 (Not Implemented).
 * @member {Number} origin_status_501
 */
Values.prototype['origin_status_501'] = undefined;

/**
 * Number of responses received from origin with status code 502 (Bad Gateway).
 * @member {Number} origin_status_502
 */
Values.prototype['origin_status_502'] = undefined;

/**
 * Number of responses received from origin with status code 503 (Service Unavailable).
 * @member {Number} origin_status_503
 */
Values.prototype['origin_status_503'] = undefined;

/**
 * Number of responses received from origin with status code 504 (Gateway Timeout).
 * @member {Number} origin_status_504
 */
Values.prototype['origin_status_504'] = undefined;

/**
 * Number of responses received from origin with status code 505 (HTTP Version Not Supported).
 * @member {Number} origin_status_505
 */
Values.prototype['origin_status_505'] = undefined;

/**
 * Number of \"Informational\" category status codes received from origin.
 * @member {Number} origin_status_1xx
 */
Values.prototype['origin_status_1xx'] = undefined;

/**
 * Number of \"Success\" status codes received from origin.
 * @member {Number} origin_status_2xx
 */
Values.prototype['origin_status_2xx'] = undefined;

/**
 * Number of \"Redirection\" codes received from origin.
 * @member {Number} origin_status_3xx
 */
Values.prototype['origin_status_3xx'] = undefined;

/**
 * Number of \"Client Error\" codes received from origin.
 * @member {Number} origin_status_4xx
 */
Values.prototype['origin_status_4xx'] = undefined;

/**
 * Number of \"Server Error\" codes received from origin.
 * @member {Number} origin_status_5xx
 */
Values.prototype['origin_status_5xx'] = undefined;






export default Values;

