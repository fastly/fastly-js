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
import HistoricalOriginsResponse from '../model/HistoricalOriginsResponse';

/**
* OriginInspectorHistorical service.
* @module api/OriginInspectorHistoricalApi
* @version 10.0.0
*/
export default class OriginInspectorHistoricalApi {

    /**
    * Constructs a new OriginInspectorHistoricalApi. 
    * @alias module:api/OriginInspectorHistoricalApi
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
     * Fetches historical origin metrics for a given Fastly service, optionally filtering and grouping the results by origin host, region, or POP. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} [options.start] - A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the inclusive start of the query time range. If not provided, a default is chosen based on the provided `downsample` value.
     * @param {String} [options.end] - A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the exclusive end of the query time range. If not provided, a default is chosen based on the provided `downsample` value.
     * @param {module:model/String} [options.downsample='hour'] - Duration of sample windows.
     * @param {String} [options.metric='responses'] - The metrics to retrieve. Multiple values should be comma-separated.
     * @param {module:model/String} [options.group_by] - Dimensions to return in the query. Multiple dimensions may be separated by commas. For example, `group_by=host` will return one timeseries for every origin host, as a total across all POPs. 
     * @param {String} [options.limit='100'] - Number of results per page. The maximum is 200.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {module:model/String} [options.region] - Limit query to one or more specific geographic regions. Values should be comma-separated. 
     * @param {String} [options.datacenter] - Limit query to one or more specific POPs. Values should be comma-separated.
     * @param {String} [options.host] - Limit query to one or more specific origin hosts. Values should be comma-separated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HistoricalOriginsResponse} and HTTP response
     */
    getOriginInspectorHistoricalWithHttpInfo(options = {}) {
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
        'start': options['start'],
        'end': options['end'],
        'downsample': options['downsample'],
        'metric': options['metric'],
        'group_by': options['group_by'],
        'limit': options['limit'],
        'cursor': options['cursor'],
        'region': options['region'],
        'datacenter': options['datacenter'],
        'host': options['host']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HistoricalOriginsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/metrics/origins/services/{service_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Fetches historical origin metrics for a given Fastly service, optionally filtering and grouping the results by origin host, region, or POP. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} [options.start] - A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the inclusive start of the query time range. If not provided, a default is chosen based on the provided `downsample` value.
     * @param {String} [options.end] - A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the exclusive end of the query time range. If not provided, a default is chosen based on the provided `downsample` value.
     * @param {module:model/String} [options.downsample='hour'] - Duration of sample windows.
     * @param {String} [options.metric='responses'] - The metrics to retrieve. Multiple values should be comma-separated.
     * @param {module:model/String} [options.group_by] - Dimensions to return in the query. Multiple dimensions may be separated by commas. For example, `group_by=host` will return one timeseries for every origin host, as a total across all POPs. 
     * @param {String} [options.limit='100'] - Number of results per page. The maximum is 200.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {module:model/String} [options.region] - Limit query to one or more specific geographic regions. Values should be comma-separated. 
     * @param {String} [options.datacenter] - Limit query to one or more specific POPs. Values should be comma-separated.
     * @param {String} [options.host] - Limit query to one or more specific origin hosts. Values should be comma-separated.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HistoricalOriginsResponse}
     */
    getOriginInspectorHistorical(options = {}) {
      return this.getOriginInspectorHistoricalWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
