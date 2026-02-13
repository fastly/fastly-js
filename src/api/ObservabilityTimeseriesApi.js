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
import TimeseriesGetResponse from '../model/TimeseriesGetResponse';

/**
* ObservabilityTimeseries service.
* @module api/ObservabilityTimeseriesApi
* @version 15.0.0-beta.0
*/
export default class ObservabilityTimeseriesApi {

    /**
    * Constructs a new ObservabilityTimeseriesApi. 
    * @alias module:api/ObservabilityTimeseriesApi
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
     * Retrieves observability data as a time series.
     * @param {Object} options
     * @param {module:model/String} options.source
     * @param {String} options.from
     * @param {String} options.to
     * @param {String} options.granularity
     * @param {String} options.series
     * @param {String} [options.dimensions]
     * @param {String} [options.filter]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TimeseriesGetResponse} and HTTP response
     */
    timeseriesGetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'source' is set.
      if (options['source'] === undefined || options['source'] === null) {
        throw new Error("Missing the required parameter 'source'.");
      }
      // Verify the required parameter 'from' is set.
      if (options['from'] === undefined || options['from'] === null) {
        throw new Error("Missing the required parameter 'from'.");
      }
      // Verify the required parameter 'to' is set.
      if (options['to'] === undefined || options['to'] === null) {
        throw new Error("Missing the required parameter 'to'.");
      }
      // Verify the required parameter 'granularity' is set.
      if (options['granularity'] === undefined || options['granularity'] === null) {
        throw new Error("Missing the required parameter 'granularity'.");
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
        'from': options['from'],
        'to': options['to'],
        'granularity': options['granularity'],
        'dimensions': options['dimensions'],
        'filter': options['filter'],
        'series': options['series']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TimeseriesGetResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/observability/timeseries', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves observability data as a time series.
     * @param {Object} options
     * @param {module:model/String} options.source
     * @param {String} options.from
     * @param {String} options.to
     * @param {String} options.granularity
     * @param {String} options.series
     * @param {String} [options.dimensions]
     * @param {String} [options.filter]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeseriesGetResponse}
     */
    timeseriesGet(options = {}) {
      return this.timeseriesGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
