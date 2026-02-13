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
import ListAttackReport from '../model/ListAttackReport';
import ListSignalReport from '../model/ListSignalReport';

/**
* NgwafReports service.
* @module api/NgwafReportsApi
* @version 15.0.0-beta.3
*/
export default class NgwafReportsApi {

    /**
    * Constructs a new NgwafReportsApi. 
    * @alias module:api/NgwafReportsApi
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
     * Get attacks report
     * @param {Object} options
     * @param {Date} options.from - The start of a time range in RFC 3339 format.
     * @param {Date} [options.to] - The end of a time range in RFC 3339 format. Defaults to the current time.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAttackReport} and HTTP response
     */
    getAttacksReportWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'from' is set.
      if (options['from'] === undefined || options['from'] === null) {
        throw new Error("Missing the required parameter 'from'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'from': options['from'],
        'to': options['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ListAttackReport;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ngwaf/v1/reports/attacks', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get attacks report
     * @param {Object} options
     * @param {Date} options.from - The start of a time range in RFC 3339 format.
     * @param {Date} [options.to] - The end of a time range in RFC 3339 format. Defaults to the current time.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAttackReport}
     */
    getAttacksReport(options = {}) {
      return this.getAttacksReportWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get signals report
     * @param {Object} options
     * @param {Date} options.from - The start of a time range in RFC 3339 format.
     * @param {Date} [options.to] - The end of a time range in RFC 3339 format. Defaults to the current time.
     * @param {module:model/String} [options.signal_type] - The type of signal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSignalReport} and HTTP response
     */
    getSignalsReportWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'from' is set.
      if (options['from'] === undefined || options['from'] === null) {
        throw new Error("Missing the required parameter 'from'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'from': options['from'],
        'to': options['to'],
        'signal_type': options['signal_type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ListSignalReport;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ngwaf/v1/reports/signals', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get signals report
     * @param {Object} options
     * @param {Date} options.from - The start of a time range in RFC 3339 format.
     * @param {Date} [options.to] - The end of a time range in RFC 3339 format. Defaults to the current time.
     * @param {module:model/String} [options.signal_type] - The type of signal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSignalReport}
     */
    getSignalsReport(options = {}) {
      return this.getSignalsReportWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
