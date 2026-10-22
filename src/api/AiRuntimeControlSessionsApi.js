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
import ArcSessionsResponse from '../model/ArcSessionsResponse';

/**
* AiRuntimeControlSessions service.
* @module api/AiRuntimeControlSessionsApi
* @version 17.0.0
*/
export default class AiRuntimeControlSessionsApi {

    /**
    * Constructs a new AiRuntimeControlSessionsApi. 
    * @alias module:api/AiRuntimeControlSessionsApi
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
     * Returns session logs, including request and response data and metadata, for debugging and audit purposes.
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to `now`.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results, or the `prev_cursor` value to request the previous page. 
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-created_at`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArcSessionsResponse} and HTTP response
     */
    arcGetSessionLogsWithHttpInfo(options = {}) {
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
        'cursor': options['cursor'],
        'limit': options['limit'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ArcSessionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ai-runtime-control/v1/sessions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns session logs, including request and response data and metadata, for debugging and audit purposes.
     * @param {Object} options
     * @param {String} [options.key] - Filter results to a specific virtual key ID.
     * @param {String} [options.provider] - Filter results by AI provider connection ID.
     * @param {String} [options.model] - Filter results by AI model identifier.
     * @param {Date} [options.from] - The start of the time range, in RFC 3339 format.
     * @param {Date} [options.to] - The end of the time range, in RFC 3339 format. Defaults to `now`.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results, or the `prev_cursor` value to request the previous page. 
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {module:model/String} [options.sort='created_at'] - Sort field. Prefix with `-` for descending order (e.g., `sort=-created_at`). 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArcSessionsResponse}
     */
    arcGetSessionLogs(options = {}) {
      return this.arcGetSessionLogsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
