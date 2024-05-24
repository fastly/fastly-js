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
 * The OriginInspectorMeasurements model module.
 * @module model/OriginInspectorMeasurements
 * @version 7.3.0
 */
class OriginInspectorMeasurements {
    /**
     * Constructs a new <code>OriginInspectorMeasurements</code>.
     * A measurements object provides a count of the total number of &#x60;responses&#x60; received by Fastly from your origin servers in the reported time period, for the relevant POP and backend name as specified in the [entry](#entry-data-model). It also includes the number of responses for specific HTTP response status codes and for status code ranges. This dataset is sparse: only the keys with non-zero values will be included in the record. Where a specific status code does not have a field in this model (e.g., &#x60;429 Too Many Requests&#x60;), any responses with that code will be counted as part of the range count (&#x60;4xx&#x60; in this case) but will not be separately identified in the data. 
     * @alias module:model/OriginInspectorMeasurements
     */
    constructor() { 
        
        OriginInspectorMeasurements.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorMeasurements} obj Optional instance to populate.
     * @return {module:model/OriginInspectorMeasurements} The populated <code>OriginInspectorMeasurements</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorMeasurements();

            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], 'Number');
            }
            if (data.hasOwnProperty('resp_header_bytes')) {
                obj['resp_header_bytes'] = ApiClient.convertToType(data['resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('resp_body_bytes')) {
                obj['resp_body_bytes'] = ApiClient.convertToType(data['resp_body_bytes'], 'Number');
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
            if (data.hasOwnProperty('latency_0_to_1ms')) {
                obj['latency_0_to_1ms'] = ApiClient.convertToType(data['latency_0_to_1ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_1_to_5ms')) {
                obj['latency_1_to_5ms'] = ApiClient.convertToType(data['latency_1_to_5ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_5_to_10ms')) {
                obj['latency_5_to_10ms'] = ApiClient.convertToType(data['latency_5_to_10ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_10_to_50ms')) {
                obj['latency_10_to_50ms'] = ApiClient.convertToType(data['latency_10_to_50ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_50_to_100ms')) {
                obj['latency_50_to_100ms'] = ApiClient.convertToType(data['latency_50_to_100ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_100_to_250ms')) {
                obj['latency_100_to_250ms'] = ApiClient.convertToType(data['latency_100_to_250ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_250_to_500ms')) {
                obj['latency_250_to_500ms'] = ApiClient.convertToType(data['latency_250_to_500ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_500_to_1000ms')) {
                obj['latency_500_to_1000ms'] = ApiClient.convertToType(data['latency_500_to_1000ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_1000_to_5000ms')) {
                obj['latency_1000_to_5000ms'] = ApiClient.convertToType(data['latency_1000_to_5000ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_5000_to_10000ms')) {
                obj['latency_5000_to_10000ms'] = ApiClient.convertToType(data['latency_5000_to_10000ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_10000_to_60000ms')) {
                obj['latency_10000_to_60000ms'] = ApiClient.convertToType(data['latency_10000_to_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('latency_60000ms')) {
                obj['latency_60000ms'] = ApiClient.convertToType(data['latency_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_responses')) {
                obj['waf_responses'] = ApiClient.convertToType(data['waf_responses'], 'Number');
            }
            if (data.hasOwnProperty('waf_resp_header_bytes')) {
                obj['waf_resp_header_bytes'] = ApiClient.convertToType(data['waf_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('waf_resp_body_bytes')) {
                obj['waf_resp_body_bytes'] = ApiClient.convertToType(data['waf_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_1xx')) {
                obj['waf_status_1xx'] = ApiClient.convertToType(data['waf_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_2xx')) {
                obj['waf_status_2xx'] = ApiClient.convertToType(data['waf_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_3xx')) {
                obj['waf_status_3xx'] = ApiClient.convertToType(data['waf_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_4xx')) {
                obj['waf_status_4xx'] = ApiClient.convertToType(data['waf_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_5xx')) {
                obj['waf_status_5xx'] = ApiClient.convertToType(data['waf_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_200')) {
                obj['waf_status_200'] = ApiClient.convertToType(data['waf_status_200'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_204')) {
                obj['waf_status_204'] = ApiClient.convertToType(data['waf_status_204'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_206')) {
                obj['waf_status_206'] = ApiClient.convertToType(data['waf_status_206'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_301')) {
                obj['waf_status_301'] = ApiClient.convertToType(data['waf_status_301'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_302')) {
                obj['waf_status_302'] = ApiClient.convertToType(data['waf_status_302'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_304')) {
                obj['waf_status_304'] = ApiClient.convertToType(data['waf_status_304'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_400')) {
                obj['waf_status_400'] = ApiClient.convertToType(data['waf_status_400'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_401')) {
                obj['waf_status_401'] = ApiClient.convertToType(data['waf_status_401'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_403')) {
                obj['waf_status_403'] = ApiClient.convertToType(data['waf_status_403'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_404')) {
                obj['waf_status_404'] = ApiClient.convertToType(data['waf_status_404'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_416')) {
                obj['waf_status_416'] = ApiClient.convertToType(data['waf_status_416'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_429')) {
                obj['waf_status_429'] = ApiClient.convertToType(data['waf_status_429'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_500')) {
                obj['waf_status_500'] = ApiClient.convertToType(data['waf_status_500'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_501')) {
                obj['waf_status_501'] = ApiClient.convertToType(data['waf_status_501'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_502')) {
                obj['waf_status_502'] = ApiClient.convertToType(data['waf_status_502'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_503')) {
                obj['waf_status_503'] = ApiClient.convertToType(data['waf_status_503'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_504')) {
                obj['waf_status_504'] = ApiClient.convertToType(data['waf_status_504'], 'Number');
            }
            if (data.hasOwnProperty('waf_status_505')) {
                obj['waf_status_505'] = ApiClient.convertToType(data['waf_status_505'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_0_to_1ms')) {
                obj['waf_latency_0_to_1ms'] = ApiClient.convertToType(data['waf_latency_0_to_1ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_1_to_5ms')) {
                obj['waf_latency_1_to_5ms'] = ApiClient.convertToType(data['waf_latency_1_to_5ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_5_to_10ms')) {
                obj['waf_latency_5_to_10ms'] = ApiClient.convertToType(data['waf_latency_5_to_10ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_10_to_50ms')) {
                obj['waf_latency_10_to_50ms'] = ApiClient.convertToType(data['waf_latency_10_to_50ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_50_to_100ms')) {
                obj['waf_latency_50_to_100ms'] = ApiClient.convertToType(data['waf_latency_50_to_100ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_100_to_250ms')) {
                obj['waf_latency_100_to_250ms'] = ApiClient.convertToType(data['waf_latency_100_to_250ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_250_to_500ms')) {
                obj['waf_latency_250_to_500ms'] = ApiClient.convertToType(data['waf_latency_250_to_500ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_500_to_1000ms')) {
                obj['waf_latency_500_to_1000ms'] = ApiClient.convertToType(data['waf_latency_500_to_1000ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_1000_to_5000ms')) {
                obj['waf_latency_1000_to_5000ms'] = ApiClient.convertToType(data['waf_latency_1000_to_5000ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_5000_to_10000ms')) {
                obj['waf_latency_5000_to_10000ms'] = ApiClient.convertToType(data['waf_latency_5000_to_10000ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_10000_to_60000ms')) {
                obj['waf_latency_10000_to_60000ms'] = ApiClient.convertToType(data['waf_latency_10000_to_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('waf_latency_60000ms')) {
                obj['waf_latency_60000ms'] = ApiClient.convertToType(data['waf_latency_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_responses')) {
                obj['compute_responses'] = ApiClient.convertToType(data['compute_responses'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_header_bytes')) {
                obj['compute_resp_header_bytes'] = ApiClient.convertToType(data['compute_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_resp_body_bytes')) {
                obj['compute_resp_body_bytes'] = ApiClient.convertToType(data['compute_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_1xx')) {
                obj['compute_status_1xx'] = ApiClient.convertToType(data['compute_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_2xx')) {
                obj['compute_status_2xx'] = ApiClient.convertToType(data['compute_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_3xx')) {
                obj['compute_status_3xx'] = ApiClient.convertToType(data['compute_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_4xx')) {
                obj['compute_status_4xx'] = ApiClient.convertToType(data['compute_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_5xx')) {
                obj['compute_status_5xx'] = ApiClient.convertToType(data['compute_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_200')) {
                obj['compute_status_200'] = ApiClient.convertToType(data['compute_status_200'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_204')) {
                obj['compute_status_204'] = ApiClient.convertToType(data['compute_status_204'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_206')) {
                obj['compute_status_206'] = ApiClient.convertToType(data['compute_status_206'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_301')) {
                obj['compute_status_301'] = ApiClient.convertToType(data['compute_status_301'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_302')) {
                obj['compute_status_302'] = ApiClient.convertToType(data['compute_status_302'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_304')) {
                obj['compute_status_304'] = ApiClient.convertToType(data['compute_status_304'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_400')) {
                obj['compute_status_400'] = ApiClient.convertToType(data['compute_status_400'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_401')) {
                obj['compute_status_401'] = ApiClient.convertToType(data['compute_status_401'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_403')) {
                obj['compute_status_403'] = ApiClient.convertToType(data['compute_status_403'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_404')) {
                obj['compute_status_404'] = ApiClient.convertToType(data['compute_status_404'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_416')) {
                obj['compute_status_416'] = ApiClient.convertToType(data['compute_status_416'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_429')) {
                obj['compute_status_429'] = ApiClient.convertToType(data['compute_status_429'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_500')) {
                obj['compute_status_500'] = ApiClient.convertToType(data['compute_status_500'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_501')) {
                obj['compute_status_501'] = ApiClient.convertToType(data['compute_status_501'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_502')) {
                obj['compute_status_502'] = ApiClient.convertToType(data['compute_status_502'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_503')) {
                obj['compute_status_503'] = ApiClient.convertToType(data['compute_status_503'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_504')) {
                obj['compute_status_504'] = ApiClient.convertToType(data['compute_status_504'], 'Number');
            }
            if (data.hasOwnProperty('compute_status_505')) {
                obj['compute_status_505'] = ApiClient.convertToType(data['compute_status_505'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_0_to_1ms')) {
                obj['compute_latency_0_to_1ms'] = ApiClient.convertToType(data['compute_latency_0_to_1ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_1_to_5ms')) {
                obj['compute_latency_1_to_5ms'] = ApiClient.convertToType(data['compute_latency_1_to_5ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_5_to_10ms')) {
                obj['compute_latency_5_to_10ms'] = ApiClient.convertToType(data['compute_latency_5_to_10ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_10_to_50ms')) {
                obj['compute_latency_10_to_50ms'] = ApiClient.convertToType(data['compute_latency_10_to_50ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_50_to_100ms')) {
                obj['compute_latency_50_to_100ms'] = ApiClient.convertToType(data['compute_latency_50_to_100ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_100_to_250ms')) {
                obj['compute_latency_100_to_250ms'] = ApiClient.convertToType(data['compute_latency_100_to_250ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_250_to_500ms')) {
                obj['compute_latency_250_to_500ms'] = ApiClient.convertToType(data['compute_latency_250_to_500ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_500_to_1000ms')) {
                obj['compute_latency_500_to_1000ms'] = ApiClient.convertToType(data['compute_latency_500_to_1000ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_1000_to_5000ms')) {
                obj['compute_latency_1000_to_5000ms'] = ApiClient.convertToType(data['compute_latency_1000_to_5000ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_5000_to_10000ms')) {
                obj['compute_latency_5000_to_10000ms'] = ApiClient.convertToType(data['compute_latency_5000_to_10000ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_10000_to_60000ms')) {
                obj['compute_latency_10000_to_60000ms'] = ApiClient.convertToType(data['compute_latency_10000_to_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('compute_latency_60000ms')) {
                obj['compute_latency_60000ms'] = ApiClient.convertToType(data['compute_latency_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('all_responses')) {
                obj['all_responses'] = ApiClient.convertToType(data['all_responses'], 'Number');
            }
            if (data.hasOwnProperty('all_resp_header_bytes')) {
                obj['all_resp_header_bytes'] = ApiClient.convertToType(data['all_resp_header_bytes'], 'Number');
            }
            if (data.hasOwnProperty('all_resp_body_bytes')) {
                obj['all_resp_body_bytes'] = ApiClient.convertToType(data['all_resp_body_bytes'], 'Number');
            }
            if (data.hasOwnProperty('all_status_1xx')) {
                obj['all_status_1xx'] = ApiClient.convertToType(data['all_status_1xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_2xx')) {
                obj['all_status_2xx'] = ApiClient.convertToType(data['all_status_2xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_3xx')) {
                obj['all_status_3xx'] = ApiClient.convertToType(data['all_status_3xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_4xx')) {
                obj['all_status_4xx'] = ApiClient.convertToType(data['all_status_4xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_5xx')) {
                obj['all_status_5xx'] = ApiClient.convertToType(data['all_status_5xx'], 'Number');
            }
            if (data.hasOwnProperty('all_status_200')) {
                obj['all_status_200'] = ApiClient.convertToType(data['all_status_200'], 'Number');
            }
            if (data.hasOwnProperty('all_status_204')) {
                obj['all_status_204'] = ApiClient.convertToType(data['all_status_204'], 'Number');
            }
            if (data.hasOwnProperty('all_status_206')) {
                obj['all_status_206'] = ApiClient.convertToType(data['all_status_206'], 'Number');
            }
            if (data.hasOwnProperty('all_status_301')) {
                obj['all_status_301'] = ApiClient.convertToType(data['all_status_301'], 'Number');
            }
            if (data.hasOwnProperty('all_status_302')) {
                obj['all_status_302'] = ApiClient.convertToType(data['all_status_302'], 'Number');
            }
            if (data.hasOwnProperty('all_status_304')) {
                obj['all_status_304'] = ApiClient.convertToType(data['all_status_304'], 'Number');
            }
            if (data.hasOwnProperty('all_status_400')) {
                obj['all_status_400'] = ApiClient.convertToType(data['all_status_400'], 'Number');
            }
            if (data.hasOwnProperty('all_status_401')) {
                obj['all_status_401'] = ApiClient.convertToType(data['all_status_401'], 'Number');
            }
            if (data.hasOwnProperty('all_status_403')) {
                obj['all_status_403'] = ApiClient.convertToType(data['all_status_403'], 'Number');
            }
            if (data.hasOwnProperty('all_status_404')) {
                obj['all_status_404'] = ApiClient.convertToType(data['all_status_404'], 'Number');
            }
            if (data.hasOwnProperty('all_status_416')) {
                obj['all_status_416'] = ApiClient.convertToType(data['all_status_416'], 'Number');
            }
            if (data.hasOwnProperty('all_status_429')) {
                obj['all_status_429'] = ApiClient.convertToType(data['all_status_429'], 'Number');
            }
            if (data.hasOwnProperty('all_status_500')) {
                obj['all_status_500'] = ApiClient.convertToType(data['all_status_500'], 'Number');
            }
            if (data.hasOwnProperty('all_status_501')) {
                obj['all_status_501'] = ApiClient.convertToType(data['all_status_501'], 'Number');
            }
            if (data.hasOwnProperty('all_status_502')) {
                obj['all_status_502'] = ApiClient.convertToType(data['all_status_502'], 'Number');
            }
            if (data.hasOwnProperty('all_status_503')) {
                obj['all_status_503'] = ApiClient.convertToType(data['all_status_503'], 'Number');
            }
            if (data.hasOwnProperty('all_status_504')) {
                obj['all_status_504'] = ApiClient.convertToType(data['all_status_504'], 'Number');
            }
            if (data.hasOwnProperty('all_status_505')) {
                obj['all_status_505'] = ApiClient.convertToType(data['all_status_505'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_0_to_1ms')) {
                obj['all_latency_0_to_1ms'] = ApiClient.convertToType(data['all_latency_0_to_1ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_1_to_5ms')) {
                obj['all_latency_1_to_5ms'] = ApiClient.convertToType(data['all_latency_1_to_5ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_5_to_10ms')) {
                obj['all_latency_5_to_10ms'] = ApiClient.convertToType(data['all_latency_5_to_10ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_10_to_50ms')) {
                obj['all_latency_10_to_50ms'] = ApiClient.convertToType(data['all_latency_10_to_50ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_50_to_100ms')) {
                obj['all_latency_50_to_100ms'] = ApiClient.convertToType(data['all_latency_50_to_100ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_100_to_250ms')) {
                obj['all_latency_100_to_250ms'] = ApiClient.convertToType(data['all_latency_100_to_250ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_250_to_500ms')) {
                obj['all_latency_250_to_500ms'] = ApiClient.convertToType(data['all_latency_250_to_500ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_500_to_1000ms')) {
                obj['all_latency_500_to_1000ms'] = ApiClient.convertToType(data['all_latency_500_to_1000ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_1000_to_5000ms')) {
                obj['all_latency_1000_to_5000ms'] = ApiClient.convertToType(data['all_latency_1000_to_5000ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_5000_to_10000ms')) {
                obj['all_latency_5000_to_10000ms'] = ApiClient.convertToType(data['all_latency_5000_to_10000ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_10000_to_60000ms')) {
                obj['all_latency_10000_to_60000ms'] = ApiClient.convertToType(data['all_latency_10000_to_60000ms'], 'Number');
            }
            if (data.hasOwnProperty('all_latency_60000ms')) {
                obj['all_latency_60000ms'] = ApiClient.convertToType(data['all_latency_60000ms'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of responses from origin.
 * @member {Number} responses
 */
OriginInspectorMeasurements.prototype['responses'] = undefined;

/**
 * Number of header bytes from origin.
 * @member {Number} resp_header_bytes
 */
OriginInspectorMeasurements.prototype['resp_header_bytes'] = undefined;

/**
 * Number of body bytes from origin.
 * @member {Number} resp_body_bytes
 */
OriginInspectorMeasurements.prototype['resp_body_bytes'] = undefined;

/**
 * Number of 1xx \"Informational\" status codes delivered from origin.
 * @member {Number} status_1xx
 */
OriginInspectorMeasurements.prototype['status_1xx'] = undefined;

/**
 * Number of 2xx \"Success\" status codes delivered from origin.
 * @member {Number} status_2xx
 */
OriginInspectorMeasurements.prototype['status_2xx'] = undefined;

/**
 * Number of 3xx \"Redirection\" codes delivered from origin.
 * @member {Number} status_3xx
 */
OriginInspectorMeasurements.prototype['status_3xx'] = undefined;

/**
 * Number of 4xx \"Client Error\" codes delivered from origin.
 * @member {Number} status_4xx
 */
OriginInspectorMeasurements.prototype['status_4xx'] = undefined;

/**
 * Number of 5xx \"Server Error\" codes delivered from origin.
 * @member {Number} status_5xx
 */
OriginInspectorMeasurements.prototype['status_5xx'] = undefined;

/**
 * Number of responses received with status code 200 (Success) from origin.
 * @member {Number} status_200
 */
OriginInspectorMeasurements.prototype['status_200'] = undefined;

/**
 * Number of responses received with status code 204 (No Content) from origin.
 * @member {Number} status_204
 */
OriginInspectorMeasurements.prototype['status_204'] = undefined;

/**
 * Number of responses received with status code 206 (Partial Content) from origin.
 * @member {Number} status_206
 */
OriginInspectorMeasurements.prototype['status_206'] = undefined;

/**
 * Number of responses received with status code 301 (Moved Permanently) from origin.
 * @member {Number} status_301
 */
OriginInspectorMeasurements.prototype['status_301'] = undefined;

/**
 * Number of responses received with status code 302 (Found) from origin.
 * @member {Number} status_302
 */
OriginInspectorMeasurements.prototype['status_302'] = undefined;

/**
 * Number of responses received with status code 304 (Not Modified) from origin.
 * @member {Number} status_304
 */
OriginInspectorMeasurements.prototype['status_304'] = undefined;

/**
 * Number of responses received with status code 400 (Bad Request) from origin.
 * @member {Number} status_400
 */
OriginInspectorMeasurements.prototype['status_400'] = undefined;

/**
 * Number of responses received with status code 401 (Unauthorized) from origin.
 * @member {Number} status_401
 */
OriginInspectorMeasurements.prototype['status_401'] = undefined;

/**
 * Number of responses received with status code 403 (Forbidden) from origin.
 * @member {Number} status_403
 */
OriginInspectorMeasurements.prototype['status_403'] = undefined;

/**
 * Number of responses received with status code 404 (Not Found) from origin.
 * @member {Number} status_404
 */
OriginInspectorMeasurements.prototype['status_404'] = undefined;

/**
 * Number of responses received with status code 416 (Range Not Satisfiable) from origin.
 * @member {Number} status_416
 */
OriginInspectorMeasurements.prototype['status_416'] = undefined;

/**
 * Number of responses received with status code 429 (Too Many Requests) from origin.
 * @member {Number} status_429
 */
OriginInspectorMeasurements.prototype['status_429'] = undefined;

/**
 * Number of responses received with status code 500 (Internal Server Error) from origin.
 * @member {Number} status_500
 */
OriginInspectorMeasurements.prototype['status_500'] = undefined;

/**
 * Number of responses received with status code 501 (Not Implemented) from origin.
 * @member {Number} status_501
 */
OriginInspectorMeasurements.prototype['status_501'] = undefined;

/**
 * Number of responses received with status code 502 (Bad Gateway) from origin.
 * @member {Number} status_502
 */
OriginInspectorMeasurements.prototype['status_502'] = undefined;

/**
 * Number of responses received with status code 503 (Service Unavailable) from origin.
 * @member {Number} status_503
 */
OriginInspectorMeasurements.prototype['status_503'] = undefined;

/**
 * Number of responses received with status code 504 (Gateway Timeout) from origin.
 * @member {Number} status_504
 */
OriginInspectorMeasurements.prototype['status_504'] = undefined;

/**
 * Number of responses received with status code 505 (HTTP Version Not Supported) from origin.
 * @member {Number} status_505
 */
OriginInspectorMeasurements.prototype['status_505'] = undefined;

/**
 * Number of responses from origin with latency between 0 and 1 millisecond.
 * @member {Number} latency_0_to_1ms
 */
OriginInspectorMeasurements.prototype['latency_0_to_1ms'] = undefined;

/**
 * Number of responses from origin with latency between 1 and 5 milliseconds.
 * @member {Number} latency_1_to_5ms
 */
OriginInspectorMeasurements.prototype['latency_1_to_5ms'] = undefined;

/**
 * Number of responses from origin with latency between 5 and 10 milliseconds.
 * @member {Number} latency_5_to_10ms
 */
OriginInspectorMeasurements.prototype['latency_5_to_10ms'] = undefined;

/**
 * Number of responses from origin with latency between 10 and 50 milliseconds.
 * @member {Number} latency_10_to_50ms
 */
OriginInspectorMeasurements.prototype['latency_10_to_50ms'] = undefined;

/**
 * Number of responses from origin with latency between 50 and 100 milliseconds.
 * @member {Number} latency_50_to_100ms
 */
OriginInspectorMeasurements.prototype['latency_50_to_100ms'] = undefined;

/**
 * Number of responses from origin with latency between 100 and 250 milliseconds.
 * @member {Number} latency_100_to_250ms
 */
OriginInspectorMeasurements.prototype['latency_100_to_250ms'] = undefined;

/**
 * Number of responses from origin with latency between 250 and 500 milliseconds.
 * @member {Number} latency_250_to_500ms
 */
OriginInspectorMeasurements.prototype['latency_250_to_500ms'] = undefined;

/**
 * Number of responses from origin with latency between 500 and 1,000 milliseconds.
 * @member {Number} latency_500_to_1000ms
 */
OriginInspectorMeasurements.prototype['latency_500_to_1000ms'] = undefined;

/**
 * Number of responses from origin with latency between 1,000 and 5,000 milliseconds.
 * @member {Number} latency_1000_to_5000ms
 */
OriginInspectorMeasurements.prototype['latency_1000_to_5000ms'] = undefined;

/**
 * Number of responses from origin with latency between 5,000 and 10,000 milliseconds.
 * @member {Number} latency_5000_to_10000ms
 */
OriginInspectorMeasurements.prototype['latency_5000_to_10000ms'] = undefined;

/**
 * Number of responses from origin with latency between 10,000 and 60,000 milliseconds.
 * @member {Number} latency_10000_to_60000ms
 */
OriginInspectorMeasurements.prototype['latency_10000_to_60000ms'] = undefined;

/**
 * Number of responses from origin with latency of 60,000 milliseconds and above.
 * @member {Number} latency_60000ms
 */
OriginInspectorMeasurements.prototype['latency_60000ms'] = undefined;

/**
 * Number of responses received for origin requests made by the Fastly WAF.
 * @member {Number} waf_responses
 */
OriginInspectorMeasurements.prototype['waf_responses'] = undefined;

/**
 * Number of header bytes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_resp_header_bytes
 */
OriginInspectorMeasurements.prototype['waf_resp_header_bytes'] = undefined;

/**
 * Number of body bytes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_resp_body_bytes
 */
OriginInspectorMeasurements.prototype['waf_resp_body_bytes'] = undefined;

/**
 * Number of 1xx \"Informational\" status codes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_1xx
 */
OriginInspectorMeasurements.prototype['waf_status_1xx'] = undefined;

/**
 * Number of 2xx \"Success\" status codes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_2xx
 */
OriginInspectorMeasurements.prototype['waf_status_2xx'] = undefined;

/**
 * Number of 3xx \"Redirection\" codes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_3xx
 */
OriginInspectorMeasurements.prototype['waf_status_3xx'] = undefined;

/**
 * Number of 4xx \"Client Error\" codes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_4xx
 */
OriginInspectorMeasurements.prototype['waf_status_4xx'] = undefined;

/**
 * Number of 5xx \"Server Error\" codes received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_5xx
 */
OriginInspectorMeasurements.prototype['waf_status_5xx'] = undefined;

/**
 * Number of responses received with status code 200 (Success) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_200
 */
OriginInspectorMeasurements.prototype['waf_status_200'] = undefined;

/**
 * Number of responses received with status code 204 (No Content) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_204
 */
OriginInspectorMeasurements.prototype['waf_status_204'] = undefined;

/**
 * Number of responses received with status code 206 (Partial Content) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_206
 */
OriginInspectorMeasurements.prototype['waf_status_206'] = undefined;

/**
 * Number of responses received with status code 301 (Moved Permanently) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_301
 */
OriginInspectorMeasurements.prototype['waf_status_301'] = undefined;

/**
 * Number of responses received with status code 302 (Found) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_302
 */
OriginInspectorMeasurements.prototype['waf_status_302'] = undefined;

/**
 * Number of responses received with status code 304 (Not Modified) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_304
 */
OriginInspectorMeasurements.prototype['waf_status_304'] = undefined;

/**
 * Number of responses received with status code 400 (Bad Request) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_400
 */
OriginInspectorMeasurements.prototype['waf_status_400'] = undefined;

/**
 * Number of responses received with status code 401 (Unauthorized) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_401
 */
OriginInspectorMeasurements.prototype['waf_status_401'] = undefined;

/**
 * Number of responses received with status code 403 (Forbidden) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_403
 */
OriginInspectorMeasurements.prototype['waf_status_403'] = undefined;

/**
 * Number of responses received with status code 404 (Not Found) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_404
 */
OriginInspectorMeasurements.prototype['waf_status_404'] = undefined;

/**
 * Number of responses received with status code 416 (Range Not Satisfiable) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_416
 */
OriginInspectorMeasurements.prototype['waf_status_416'] = undefined;

/**
 * Number of responses received with status code 429 (Too Many Requests) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_429
 */
OriginInspectorMeasurements.prototype['waf_status_429'] = undefined;

/**
 * Number of responses received with status code 500 (Internal Server Error) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_500
 */
OriginInspectorMeasurements.prototype['waf_status_500'] = undefined;

/**
 * Number of responses received with status code 501 (Not Implemented) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_501
 */
OriginInspectorMeasurements.prototype['waf_status_501'] = undefined;

/**
 * Number of responses received with status code 502 (Bad Gateway) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_502
 */
OriginInspectorMeasurements.prototype['waf_status_502'] = undefined;

/**
 * Number of responses received with status code 503 (Service Unavailable) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_503
 */
OriginInspectorMeasurements.prototype['waf_status_503'] = undefined;

/**
 * Number of responses received with status code 504 (Gateway Timeout) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_504
 */
OriginInspectorMeasurements.prototype['waf_status_504'] = undefined;

/**
 * Number of responses received with status code 505 (HTTP Version Not Supported) received for origin requests made by the Fastly WAF.
 * @member {Number} waf_status_505
 */
OriginInspectorMeasurements.prototype['waf_status_505'] = undefined;

/**
 * Number of responses with latency between 0 and 1 millisecond received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_0_to_1ms
 */
OriginInspectorMeasurements.prototype['waf_latency_0_to_1ms'] = undefined;

/**
 * Number of responses with latency between 1 and 5 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_1_to_5ms
 */
OriginInspectorMeasurements.prototype['waf_latency_1_to_5ms'] = undefined;

/**
 * Number of responses with latency between 5 and 10 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_5_to_10ms
 */
OriginInspectorMeasurements.prototype['waf_latency_5_to_10ms'] = undefined;

/**
 * Number of responses with latency between 10 and 50 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_10_to_50ms
 */
OriginInspectorMeasurements.prototype['waf_latency_10_to_50ms'] = undefined;

/**
 * Number of responses with latency between 50 and 100 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_50_to_100ms
 */
OriginInspectorMeasurements.prototype['waf_latency_50_to_100ms'] = undefined;

/**
 * Number of responses with latency between 100 and 250 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_100_to_250ms
 */
OriginInspectorMeasurements.prototype['waf_latency_100_to_250ms'] = undefined;

/**
 * Number of responses with latency between 250 and 500 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_250_to_500ms
 */
OriginInspectorMeasurements.prototype['waf_latency_250_to_500ms'] = undefined;

/**
 * Number of responses with latency between 500 and 1,000 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_500_to_1000ms
 */
OriginInspectorMeasurements.prototype['waf_latency_500_to_1000ms'] = undefined;

/**
 * Number of responses with latency between 1,000 and 5,000 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_1000_to_5000ms
 */
OriginInspectorMeasurements.prototype['waf_latency_1000_to_5000ms'] = undefined;

/**
 * Number of responses with latency between 5,000 and 10,000 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_5000_to_10000ms
 */
OriginInspectorMeasurements.prototype['waf_latency_5000_to_10000ms'] = undefined;

/**
 * Number of responses with latency between 10,000 and 60,000 milliseconds received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_10000_to_60000ms
 */
OriginInspectorMeasurements.prototype['waf_latency_10000_to_60000ms'] = undefined;

/**
 * Number of responses with latency of 60,000 milliseconds and above received for origin requests made by the Fastly WAF.
 * @member {Number} waf_latency_60000ms
 */
OriginInspectorMeasurements.prototype['waf_latency_60000ms'] = undefined;

/**
 * Number of responses for origin received by the Compute platform.
 * @member {Number} compute_responses
 */
OriginInspectorMeasurements.prototype['compute_responses'] = undefined;

/**
 * Number of header bytes for origin received by the Compute platform.
 * @member {Number} compute_resp_header_bytes
 */
OriginInspectorMeasurements.prototype['compute_resp_header_bytes'] = undefined;

/**
 * Number of body bytes for origin received by the Compute platform.
 * @member {Number} compute_resp_body_bytes
 */
OriginInspectorMeasurements.prototype['compute_resp_body_bytes'] = undefined;

/**
 * Number of 1xx \"Informational\" status codes for origin received by the Compute platform.
 * @member {Number} compute_status_1xx
 */
OriginInspectorMeasurements.prototype['compute_status_1xx'] = undefined;

/**
 * Number of 2xx \"Success\" status codes for origin received by the Compute platform.
 * @member {Number} compute_status_2xx
 */
OriginInspectorMeasurements.prototype['compute_status_2xx'] = undefined;

/**
 * Number of 3xx \"Redirection\" codes for origin received by the Compute platform.
 * @member {Number} compute_status_3xx
 */
OriginInspectorMeasurements.prototype['compute_status_3xx'] = undefined;

/**
 * Number of 4xx \"Client Error\" codes for origin received by the Compute platform.
 * @member {Number} compute_status_4xx
 */
OriginInspectorMeasurements.prototype['compute_status_4xx'] = undefined;

/**
 * Number of 5xx \"Server Error\" codes for origin received by the Compute platform.
 * @member {Number} compute_status_5xx
 */
OriginInspectorMeasurements.prototype['compute_status_5xx'] = undefined;

/**
 * Number of responses received with status code 200 (Success) for origin received by the Compute platform.
 * @member {Number} compute_status_200
 */
OriginInspectorMeasurements.prototype['compute_status_200'] = undefined;

/**
 * Number of responses received with status code 204 (No Content) for origin received by the Compute platform.
 * @member {Number} compute_status_204
 */
OriginInspectorMeasurements.prototype['compute_status_204'] = undefined;

/**
 * Number of responses received with status code 206 (Partial Content) for origin received by the Compute platform.
 * @member {Number} compute_status_206
 */
OriginInspectorMeasurements.prototype['compute_status_206'] = undefined;

/**
 * Number of responses received with status code 301 (Moved Permanently) for origin received by the Compute platform.
 * @member {Number} compute_status_301
 */
OriginInspectorMeasurements.prototype['compute_status_301'] = undefined;

/**
 * Number of responses received with status code 302 (Found) for origin received by the Compute platform.
 * @member {Number} compute_status_302
 */
OriginInspectorMeasurements.prototype['compute_status_302'] = undefined;

/**
 * Number of responses received with status code 304 (Not Modified) for origin received by the Compute platform.
 * @member {Number} compute_status_304
 */
OriginInspectorMeasurements.prototype['compute_status_304'] = undefined;

/**
 * Number of responses received with status code 400 (Bad Request) for origin received by the Compute platform.
 * @member {Number} compute_status_400
 */
OriginInspectorMeasurements.prototype['compute_status_400'] = undefined;

/**
 * Number of responses received with status code 401 (Unauthorized) for origin received by the Compute platform.
 * @member {Number} compute_status_401
 */
OriginInspectorMeasurements.prototype['compute_status_401'] = undefined;

/**
 * Number of responses received with status code 403 (Forbidden) for origin received by the Compute platform.
 * @member {Number} compute_status_403
 */
OriginInspectorMeasurements.prototype['compute_status_403'] = undefined;

/**
 * Number of responses received with status code 404 (Not Found) for origin received by the Compute platform.
 * @member {Number} compute_status_404
 */
OriginInspectorMeasurements.prototype['compute_status_404'] = undefined;

/**
 * Number of responses received with status code 416 (Range Not Satisfiable) for origin received by the Compute platform.
 * @member {Number} compute_status_416
 */
OriginInspectorMeasurements.prototype['compute_status_416'] = undefined;

/**
 * Number of responses received with status code 429 (Too Many Requests) for origin received by the Compute platform.
 * @member {Number} compute_status_429
 */
OriginInspectorMeasurements.prototype['compute_status_429'] = undefined;

/**
 * Number of responses received with status code 500 (Internal Server Error) for origin received by the Compute platform.
 * @member {Number} compute_status_500
 */
OriginInspectorMeasurements.prototype['compute_status_500'] = undefined;

/**
 * Number of responses received with status code 501 (Not Implemented) for origin received by the Compute platform.
 * @member {Number} compute_status_501
 */
OriginInspectorMeasurements.prototype['compute_status_501'] = undefined;

/**
 * Number of responses received with status code 502 (Bad Gateway) for origin received by the Compute platform.
 * @member {Number} compute_status_502
 */
OriginInspectorMeasurements.prototype['compute_status_502'] = undefined;

/**
 * Number of responses received with status code 503 (Service Unavailable) for origin received by the Compute platform.
 * @member {Number} compute_status_503
 */
OriginInspectorMeasurements.prototype['compute_status_503'] = undefined;

/**
 * Number of responses received with status code 504 (Gateway Timeout) for origin received by the Compute platform.
 * @member {Number} compute_status_504
 */
OriginInspectorMeasurements.prototype['compute_status_504'] = undefined;

/**
 * Number of responses received with status code 505 (HTTP Version Not Supported) for origin received by the Compute platform.
 * @member {Number} compute_status_505
 */
OriginInspectorMeasurements.prototype['compute_status_505'] = undefined;

/**
 * Number of responses with latency between 0 and 1 millisecond for origin received by the Compute platform.
 * @member {Number} compute_latency_0_to_1ms
 */
OriginInspectorMeasurements.prototype['compute_latency_0_to_1ms'] = undefined;

/**
 * Number of responses with latency between 1 and 5 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_1_to_5ms
 */
OriginInspectorMeasurements.prototype['compute_latency_1_to_5ms'] = undefined;

/**
 * Number of responses with latency between 5 and 10 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_5_to_10ms
 */
OriginInspectorMeasurements.prototype['compute_latency_5_to_10ms'] = undefined;

/**
 * Number of responses with latency between 10 and 50 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_10_to_50ms
 */
OriginInspectorMeasurements.prototype['compute_latency_10_to_50ms'] = undefined;

/**
 * Number of responses with latency between 50 and 100 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_50_to_100ms
 */
OriginInspectorMeasurements.prototype['compute_latency_50_to_100ms'] = undefined;

/**
 * Number of responses with latency between 100 and 250 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_100_to_250ms
 */
OriginInspectorMeasurements.prototype['compute_latency_100_to_250ms'] = undefined;

/**
 * Number of responses with latency between 250 and 500 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_250_to_500ms
 */
OriginInspectorMeasurements.prototype['compute_latency_250_to_500ms'] = undefined;

/**
 * Number of responses with latency between 500 and 1,000 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_500_to_1000ms
 */
OriginInspectorMeasurements.prototype['compute_latency_500_to_1000ms'] = undefined;

/**
 * Number of responses with latency between 1,000 and 5,000 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_1000_to_5000ms
 */
OriginInspectorMeasurements.prototype['compute_latency_1000_to_5000ms'] = undefined;

/**
 * Number of responses with latency between 5,000 and 10,000 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_5000_to_10000ms
 */
OriginInspectorMeasurements.prototype['compute_latency_5000_to_10000ms'] = undefined;

/**
 * Number of responses with latency between 10,000 and 60,000 milliseconds for origin received by the Compute platform.
 * @member {Number} compute_latency_10000_to_60000ms
 */
OriginInspectorMeasurements.prototype['compute_latency_10000_to_60000ms'] = undefined;

/**
 * Number of responses with latency of 60,000 milliseconds and above for origin received by the Compute platform.
 * @member {Number} compute_latency_60000ms
 */
OriginInspectorMeasurements.prototype['compute_latency_60000ms'] = undefined;

/**
 * Number of responses received for origin requests made by all sources.
 * @member {Number} all_responses
 */
OriginInspectorMeasurements.prototype['all_responses'] = undefined;

/**
 * Number of header bytes received for origin requests made by all sources.
 * @member {Number} all_resp_header_bytes
 */
OriginInspectorMeasurements.prototype['all_resp_header_bytes'] = undefined;

/**
 * Number of body bytes received for origin requests made by all sources.
 * @member {Number} all_resp_body_bytes
 */
OriginInspectorMeasurements.prototype['all_resp_body_bytes'] = undefined;

/**
 * Number of 1xx \"Informational\" category status codes delivered received for origin requests made by all sources.
 * @member {Number} all_status_1xx
 */
OriginInspectorMeasurements.prototype['all_status_1xx'] = undefined;

/**
 * Number of 2xx \"Success\" status codes received for origin requests made by all sources.
 * @member {Number} all_status_2xx
 */
OriginInspectorMeasurements.prototype['all_status_2xx'] = undefined;

/**
 * Number of 3xx \"Redirection\" codes received for origin requests made by all sources.
 * @member {Number} all_status_3xx
 */
OriginInspectorMeasurements.prototype['all_status_3xx'] = undefined;

/**
 * Number of 4xx \"Client Error\" codes received for origin requests made by all sources.
 * @member {Number} all_status_4xx
 */
OriginInspectorMeasurements.prototype['all_status_4xx'] = undefined;

/**
 * Number of 5xx \"Server Error\" codes received for origin requests made by all sources.
 * @member {Number} all_status_5xx
 */
OriginInspectorMeasurements.prototype['all_status_5xx'] = undefined;

/**
 * Number of responses received with status code 200 (Success) received for origin requests made by all sources.
 * @member {Number} all_status_200
 */
OriginInspectorMeasurements.prototype['all_status_200'] = undefined;

/**
 * Number of responses received with status code 204 (No Content) received for origin requests made by all sources.
 * @member {Number} all_status_204
 */
OriginInspectorMeasurements.prototype['all_status_204'] = undefined;

/**
 * Number of responses received with status code 206 (Partial Content) received for origin requests made by all sources.
 * @member {Number} all_status_206
 */
OriginInspectorMeasurements.prototype['all_status_206'] = undefined;

/**
 * Number of responses received with status code 301 (Moved Permanently) received for origin requests made by all sources.
 * @member {Number} all_status_301
 */
OriginInspectorMeasurements.prototype['all_status_301'] = undefined;

/**
 * Number of responses received with status code 302 (Found) received for origin requests made by all sources.
 * @member {Number} all_status_302
 */
OriginInspectorMeasurements.prototype['all_status_302'] = undefined;

/**
 * Number of responses received with status code 304 (Not Modified) received for origin requests made by all sources.
 * @member {Number} all_status_304
 */
OriginInspectorMeasurements.prototype['all_status_304'] = undefined;

/**
 * Number of responses received with status code 400 (Bad Request) received for origin requests made by all sources.
 * @member {Number} all_status_400
 */
OriginInspectorMeasurements.prototype['all_status_400'] = undefined;

/**
 * Number of responses received with status code 401 (Unauthorized) received for origin requests made by all sources.
 * @member {Number} all_status_401
 */
OriginInspectorMeasurements.prototype['all_status_401'] = undefined;

/**
 * Number of responses received with status code 403 (Forbidden) received for origin requests made by all sources.
 * @member {Number} all_status_403
 */
OriginInspectorMeasurements.prototype['all_status_403'] = undefined;

/**
 * Number of responses received with status code 404 (Not Found) received for origin requests made by all sources.
 * @member {Number} all_status_404
 */
OriginInspectorMeasurements.prototype['all_status_404'] = undefined;

/**
 * Number of responses received with status code 416 (Range Not Satisfiable) received for origin requests made by all sources.
 * @member {Number} all_status_416
 */
OriginInspectorMeasurements.prototype['all_status_416'] = undefined;

/**
 * Number of responses received with status code 429 (Too Many Requests) received for origin requests made by all sources.
 * @member {Number} all_status_429
 */
OriginInspectorMeasurements.prototype['all_status_429'] = undefined;

/**
 * Number of responses received with status code 500 (Internal Server Error) received for origin requests made by all sources.
 * @member {Number} all_status_500
 */
OriginInspectorMeasurements.prototype['all_status_500'] = undefined;

/**
 * Number of responses received with status code 501 (Not Implemented) received for origin requests made by all sources.
 * @member {Number} all_status_501
 */
OriginInspectorMeasurements.prototype['all_status_501'] = undefined;

/**
 * Number of responses received with status code 502 (Bad Gateway) received for origin requests made by all sources.
 * @member {Number} all_status_502
 */
OriginInspectorMeasurements.prototype['all_status_502'] = undefined;

/**
 * Number of responses received with status code 503 (Service Unavailable) received for origin requests made by all sources.
 * @member {Number} all_status_503
 */
OriginInspectorMeasurements.prototype['all_status_503'] = undefined;

/**
 * Number of responses received with status code 504 (Gateway Timeout) received for origin requests made by all sources.
 * @member {Number} all_status_504
 */
OriginInspectorMeasurements.prototype['all_status_504'] = undefined;

/**
 * Number of responses received with status code 505 (HTTP Version Not Supported) received for origin requests made by all sources.
 * @member {Number} all_status_505
 */
OriginInspectorMeasurements.prototype['all_status_505'] = undefined;

/**
 * Number of responses with latency between 0 and 1 millisecond received for origin requests made by all sources.
 * @member {Number} all_latency_0_to_1ms
 */
OriginInspectorMeasurements.prototype['all_latency_0_to_1ms'] = undefined;

/**
 * Number of responses with latency between 1 and 5 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_1_to_5ms
 */
OriginInspectorMeasurements.prototype['all_latency_1_to_5ms'] = undefined;

/**
 * Number of responses with latency between 5 and 10 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_5_to_10ms
 */
OriginInspectorMeasurements.prototype['all_latency_5_to_10ms'] = undefined;

/**
 * Number of responses with latency between 10 and 50 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_10_to_50ms
 */
OriginInspectorMeasurements.prototype['all_latency_10_to_50ms'] = undefined;

/**
 * Number of responses with latency between 50 and 100 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_50_to_100ms
 */
OriginInspectorMeasurements.prototype['all_latency_50_to_100ms'] = undefined;

/**
 * Number of responses with latency between 100 and 250 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_100_to_250ms
 */
OriginInspectorMeasurements.prototype['all_latency_100_to_250ms'] = undefined;

/**
 * Number of responses with latency between 250 and 500 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_250_to_500ms
 */
OriginInspectorMeasurements.prototype['all_latency_250_to_500ms'] = undefined;

/**
 * Number of responses with latency between 500 and 1,000 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_500_to_1000ms
 */
OriginInspectorMeasurements.prototype['all_latency_500_to_1000ms'] = undefined;

/**
 * Number of responses with latency between 1,000 and 5,000 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_1000_to_5000ms
 */
OriginInspectorMeasurements.prototype['all_latency_1000_to_5000ms'] = undefined;

/**
 * Number of responses with latency between 5,000 and 10,000 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_5000_to_10000ms
 */
OriginInspectorMeasurements.prototype['all_latency_5000_to_10000ms'] = undefined;

/**
 * Number of responses with latency between 10,000 and 60,000 milliseconds received for origin requests made by all sources.
 * @member {Number} all_latency_10000_to_60000ms
 */
OriginInspectorMeasurements.prototype['all_latency_10000_to_60000ms'] = undefined;

/**
 * Number of responses with latency of 60,000 milliseconds and above received for origin requests made by all sources.
 * @member {Number} all_latency_60000ms
 */
OriginInspectorMeasurements.prototype['all_latency_60000ms'] = undefined;






export default OriginInspectorMeasurements;

