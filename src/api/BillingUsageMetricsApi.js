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
import Error from '../model/Error';
import Serviceusagemetrics from '../model/Serviceusagemetrics';
import Usagemetric from '../model/Usagemetric';

/**
* BillingUsageMetrics service.
* @module api/BillingUsageMetricsApi
* @version 8.0.0
*/
export default class BillingUsageMetricsApi {

    /**
    * Constructs a new BillingUsageMetricsApi. 
    * @alias module:api/BillingUsageMetricsApi
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
     * Returns product usage, broken down by service.
     * @param {Object} options
     * @param {String} options.product_id - The product identifier for the metrics returned (e.g., `cdn_usage`). This field is not required for CSV requests.
     * @param {String} options.usage_type_name - The usage type name for the metrics returned (e.g., `North America Requests`). This field is not required for CSV requests.
     * @param {String} [options.start_month]
     * @param {String} [options.end_month]
     * @param {String} [options.limit='5'] - Number of results per page. The maximum is 100.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Serviceusagemetrics} and HTTP response
     */
    getServiceLevelUsageWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'product_id' is set.
      if (options['product_id'] === undefined || options['product_id'] === null) {
        throw new Error("Missing the required parameter 'product_id'.");
      }
      // Verify the required parameter 'usage_type_name' is set.
      if (options['usage_type_name'] === undefined || options['usage_type_name'] === null) {
        throw new Error("Missing the required parameter 'usage_type_name'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'product_id': options['product_id'],
        'usage_type_name': options['usage_type_name'],
        'start_month': options['start_month'],
        'end_month': options['end_month'],
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Serviceusagemetrics;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/service-usage-metrics', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns product usage, broken down by service.
     * @param {Object} options
     * @param {String} options.product_id - The product identifier for the metrics returned (e.g., `cdn_usage`). This field is not required for CSV requests.
     * @param {String} options.usage_type_name - The usage type name for the metrics returned (e.g., `North America Requests`). This field is not required for CSV requests.
     * @param {String} [options.start_month]
     * @param {String} [options.end_month]
     * @param {String} [options.limit='5'] - Number of results per page. The maximum is 100.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Serviceusagemetrics}
     */
    getServiceLevelUsage(options = {}) {
      return this.getServiceLevelUsageWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns monthly usage metrics for customer by product.
     * @param {Object} options
     * @param {String} [options.start_month]
     * @param {String} [options.end_month]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Usagemetric} and HTTP response
     */
    getUsageMetricsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'start_month': options['start_month'],
        'end_month': options['end_month']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Usagemetric;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/usage-metrics', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns monthly usage metrics for customer by product.
     * @param {Object} options
     * @param {String} [options.start_month]
     * @param {String} [options.end_month]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Usagemetric}
     */
    getUsageMetrics(options = {}) {
      return this.getUsageMetricsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
