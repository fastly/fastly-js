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
import ArcError from '../model/ArcError';
import ArcUsageMetricsResponse from '../model/ArcUsageMetricsResponse';

/**
* AiRuntimeControlUsageMetrics service.
* @module api/AiRuntimeControlUsageMetricsApi
* @version 17.0.0
*/
export default class AiRuntimeControlUsageMetricsApi {

    /**
    * Constructs a new AiRuntimeControlUsageMetricsApi. 
    * @alias module:api/AiRuntimeControlUsageMetricsApi
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
     * Returns usage metrics for AI Runtime Control requests. Accepts the same filter parameters as [get usage metrics](#arc-get-usage-metrics), except `sort` and `granularity`, which aren't supported here.  Set the `Accept` header to `text/csv` to receive a CSV file download instead of a JSON response. In the CSV output, the column named `time` corresponds to the `date` field in the JSON response. 
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to now.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcUsageMetricsResponse} and HTTP response
     */
    arcExportUsageMetricsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'key': options['key'],
        'provider': options['provider'],
        'model': options['model'],
        'from': options['from'],
        'to': options['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/csv', 'application/problem+json'];
      let returnType = ArcUsageMetricsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/usage-metrics/export', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns usage metrics for AI Runtime Control requests. Accepts the same filter parameters as [get usage metrics](#arc-get-usage-metrics), except `sort` and `granularity`, which aren't supported here.  Set the `Accept` header to `text/csv` to receive a CSV file download instead of a JSON response. In the CSV output, the column named `time` corresponds to the `date` field in the JSON response. 
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to now.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcUsageMetricsResponse}
     */
    arcExportUsageMetrics(options = {}) {
      return this.arcExportUsageMetricsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns usage metrics for AI Runtime Control requests, including request counts, session counts, input token counts, and output token counts.
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to now.
     * @param {module:model/String} [options.granularity='daily'] - The time granularity to aggregate usage by.
     * @param {module:model/String} [options.sort='date'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-date`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcUsageMetricsResponse} and HTTP response
     */
    arcGetUsageMetricsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'key': options['key'],
        'provider': options['provider'],
        'model': options['model'],
        'from': options['from'],
        'to': options['to'],
        'granularity': options['granularity'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcUsageMetricsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/usage-metrics', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns usage metrics for AI Runtime Control requests, including request counts, session counts, input token counts, and output token counts.
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to now.
     * @param {module:model/String} [options.granularity='daily'] - The time granularity to aggregate usage by.
     * @param {module:model/String} [options.sort='date'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-date`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcUsageMetricsResponse}
     */
    arcGetUsageMetrics(options = {}) {
      return this.arcGetUsageMetricsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
