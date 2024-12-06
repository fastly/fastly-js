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
import OriginInspector from '../model/OriginInspector';

/**
* OriginInspectorRealtime service.
* @module api/OriginInspectorRealtimeApi
* @version 8.0.0
*/
export default class OriginInspectorRealtimeApi {

    /**
    * Constructs a new OriginInspectorRealtimeApi. 
    * @alias module:api/OriginInspectorRealtimeApi
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
     * Get data for the 120 seconds preceding the latest timestamp available for a service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OriginInspector} and HTTP response
     */
    getOriginInspectorLast120SecondsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OriginInspector;
      let basePaths = ['https://rt.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/v1/origins/{service_id}/ts/h', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OriginInspector}
     */
    getOriginInspectorLast120Seconds(options = {}) {
      return this.getOriginInspectorLast120SecondsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get data for the `max_entries` seconds preceding the latest timestamp available for a service, up to a maximum of 120 entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to display.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OriginInspector} and HTTP response
     */
    getOriginInspectorLastMaxEntriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'max_entries' is set.
      if (options['max_entries'] === undefined || options['max_entries'] === null) {
        throw new Error("Missing the required parameter 'max_entries'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'max_entries': options['max_entries']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OriginInspector;
      let basePaths = ['https://rt.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/v1/origins/{service_id}/ts/h/limit/{max_entries}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get data for the `max_entries` seconds preceding the latest timestamp available for a service, up to a maximum of 120 entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to display.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OriginInspector}
     */
    getOriginInspectorLastMaxEntries(options = {}) {
      return this.getOriginInspectorLastMaxEntriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get real-time origin data for the specified reporting period. Specify `0` to get a single entry for the last complete second. The `Timestamp` field included in the response provides the time index of the latest entry in the dataset and can be provided as the `start_timestamp` of the next request for a seamless continuation of the dataset from one request to the next. Due to processing latency, the earliest entry in the response dataset may be earlier than `start_timestamp` by the value of `AggregateDelay`. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.start_timestamp - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OriginInspector} and HTTP response
     */
    getOriginInspectorLastSecondWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'start_timestamp' is set.
      if (options['start_timestamp'] === undefined || options['start_timestamp'] === null) {
        throw new Error("Missing the required parameter 'start_timestamp'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'start_timestamp': options['start_timestamp']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OriginInspector;
      let basePaths = ['https://rt.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/v1/origins/{service_id}/ts/{start_timestamp}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get real-time origin data for the specified reporting period. Specify `0` to get a single entry for the last complete second. The `Timestamp` field included in the response provides the time index of the latest entry in the dataset and can be provided as the `start_timestamp` of the next request for a seamless continuation of the dataset from one request to the next. Due to processing latency, the earliest entry in the response dataset may be earlier than `start_timestamp` by the value of `AggregateDelay`. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.start_timestamp - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OriginInspector}
     */
    getOriginInspectorLastSecond(options = {}) {
      return this.getOriginInspectorLastSecondWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
