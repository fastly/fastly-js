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


import ApiClient from "../ApiClient";
import LogAggregationsGetResponse from '../model/LogAggregationsGetResponse';

/**
* ObservabilityAggregationsForLogs service.
* @module api/ObservabilityAggregationsForLogsApi
* @version 15.0.0-beta.2
*/
export default class ObservabilityAggregationsForLogsApi {

    /**
    * Constructs a new ObservabilityAggregationsForLogsApi. 
    * @alias module:api/ObservabilityAggregationsForLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Retrieves aggregated log results.
     * @param {Object} options
     * @param {String} options.source
     * @param {String} options.service_id
     * @param {String} options.start
     * @param {String} options.end
     * @param {String} options.series
     * @param {Number} [options.limit]
     * @param {String} [options.filter]
     * @param {String} [options.dimensions]
     * @param {String} [options.sort]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogAggregationsGetResponse} and HTTP response
     */
    logAggregationsGetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'source' is set.
      if (options['source'] === undefined || options['source'] === null) {
        throw new Error("Missing the required parameter 'source'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'start' is set.
      if (options['start'] === undefined || options['start'] === null) {
        throw new Error("Missing the required parameter 'start'.");
      }
      // Verify the required parameter 'end' is set.
      if (options['end'] === undefined || options['end'] === null) {
        throw new Error("Missing the required parameter 'end'.");
      }
      // Verify the required parameter 'series' is set.
      if (options['series'] === undefined || options['series'] === null) {
        throw new Error("Missing the required parameter 'series'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'source': options['source'],
        'service_id': options['service_id'],
        'start': options['start'],
        'end': options['end'],
        'limit': options['limit'],
        'filter': options['filter'],
        'series': options['series'],
        'dimensions': options['dimensions'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LogAggregationsGetResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/aggregations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves aggregated log results.
     * @param {Object} options
     * @param {String} options.source
     * @param {String} options.service_id
     * @param {String} options.start
     * @param {String} options.end
     * @param {String} options.series
     * @param {Number} [options.limit]
     * @param {String} [options.filter]
     * @param {String} [options.dimensions]
     * @param {String} [options.sort]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogAggregationsGetResponse}
     */
    logAggregationsGet(options = {}) {
      return this.logAggregationsGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
