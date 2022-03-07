/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Realtime from '../model/Realtime';

/**
* Realtime service.
* @module api/RealtimeApi
* @version 3.0.0-beta2
*/
export default class RealtimeApi {

    /**
    * Constructs a new RealtimeApi. 
    * @alias module:api/RealtimeApi
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
     */
    getStatsLast120SecondsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'service_id': options['service_id']
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
      let returnType = Realtime;
      return this.apiClient.callApi(
        '/v1/channel/{service_id}/ts/h', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */
    getStatsLast120Seconds(options = {}) {
      return this.getStatsLast120SecondsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of `max_entries` entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to show.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
     */
    getStatsLast120SecondsLimitEntriesWithHttpInfo(options = {}) {
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
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Realtime;
      return this.apiClient.callApi(
        '/v1/channel/{service_id}/ts/h/limit/{max_entries}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of `max_entries` entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to show.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */
    getStatsLast120SecondsLimitEntries(options = {}) {
      return this.getStatsLast120SecondsLimitEntriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get real-time data for the specified reporting period. Specify `0` to get a single entry for the last complete second. The `Timestamp` field included in the response provides the time index of the latest entry in the dataset and can be provided as the `start_timestamp` of the next request for a seamless continuation of the dataset from one request to the next.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.timestamp_in_seconds - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
     */
    getStatsLastSecondWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'timestamp_in_seconds' is set.
      if (options['timestamp_in_seconds'] === undefined || options['timestamp_in_seconds'] === null) {
        throw new Error("Missing the required parameter 'timestamp_in_seconds'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'timestamp_in_seconds': options['timestamp_in_seconds']
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
      let returnType = Realtime;
      return this.apiClient.callApi(
        '/v1/channel/{service_id}/ts/{timestamp_in_seconds}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get real-time data for the specified reporting period. Specify `0` to get a single entry for the last complete second. The `Timestamp` field included in the response provides the time index of the latest entry in the dataset and can be provided as the `start_timestamp` of the next request for a seamless continuation of the dataset from one request to the next.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.timestamp_in_seconds - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */
    getStatsLastSecond(options = {}) {
      return this.getStatsLastSecondWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
