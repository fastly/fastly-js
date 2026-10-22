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
import BotRequestMetricsResponse from '../model/BotRequestMetricsResponse';

/**
* BotRequestsMetrics service.
* @module api/BotRequestsMetricsApi
* @version 17.0.0
*/
export default class BotRequestsMetricsApi {

    /**
    * Constructs a new BotRequestsMetricsApi. 
    * @alias module:api/BotRequestsMetricsApi
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
     * Return historical time series metrics for bot requests broken down by bot-type.
     * @param {Object} options
     * @param {module:model/String} options.granularity - Duration of sample windows.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} [options.from] - A valid RFC-8339-formatted date and time indicating the inclusive start of the query time range. If not provided, a default is chosen based on the provided `granularity` value.
     * @param {String} [options.to] - A valid RFC-8339-formatted date and time indicating the exclusive end of the query time range. If not provided, a default is chosen based on the provided `granularity` value.
     * @param {module:model/String} [options.group_by] - Field to group by in the query. For example, `group_by=bot_id` will return entries grouped by `timestamp` and `bot_id`. 
     * @param {String} [options.datacenter] - Limit query to one or more specific POPs. Values should be comma-separated.
     * @param {String} [options.bot] - Filter results based by Bot ID.
     * @param {module:model/String} [options.region] - Limit query to one or more specific geographic regions. Values should be comma-separated. 
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {String} [options.metric] - One or more metrics to retrieve. Multiple values should be comma-separated.
     * @param {module:model/String} [options.metric_set] - The metric set to retrieve.
     * @param {String} [options.limit='1000'] - Number of results per page. The maximum is 10000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotRequestMetricsResponse} and HTTP response
     */
    getBotRequestMetricsServiceHistoricalWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'granularity' is set.
      if (options['granularity'] === undefined || options['granularity'] === null) {
        throw new Error("Missing the required parameter 'granularity'.");
      }
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      let pathParams = {
        'granularity': options['granularity'],
        'service_id': options['service_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'from': options['from'],
        'to': options['to'],
        'group_by': options['group_by'],
        'datacenter': options['datacenter'],
        'bot': options['bot'],
        'region': options['region'],
        'cursor': options['cursor'],
        'metric': options['metric'],
        'metric_set': options['metric_set'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BotRequestMetricsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/metrics/bots/entities/{service_id}/{granularity}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Return historical time series metrics for bot requests broken down by bot-type.
     * @param {Object} options
     * @param {module:model/String} options.granularity - Duration of sample windows.
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} [options.from] - A valid RFC-8339-formatted date and time indicating the inclusive start of the query time range. If not provided, a default is chosen based on the provided `granularity` value.
     * @param {String} [options.to] - A valid RFC-8339-formatted date and time indicating the exclusive end of the query time range. If not provided, a default is chosen based on the provided `granularity` value.
     * @param {module:model/String} [options.group_by] - Field to group by in the query. For example, `group_by=bot_id` will return entries grouped by `timestamp` and `bot_id`. 
     * @param {String} [options.datacenter] - Limit query to one or more specific POPs. Values should be comma-separated.
     * @param {String} [options.bot] - Filter results based by Bot ID.
     * @param {module:model/String} [options.region] - Limit query to one or more specific geographic regions. Values should be comma-separated. 
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {String} [options.metric] - One or more metrics to retrieve. Multiple values should be comma-separated.
     * @param {module:model/String} [options.metric_set] - The metric set to retrieve.
     * @param {String} [options.limit='1000'] - Number of results per page. The maximum is 10000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotRequestMetricsResponse}
     */
    getBotRequestMetricsServiceHistorical(options = {}) {
      return this.getBotRequestMetricsServiceHistoricalWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
