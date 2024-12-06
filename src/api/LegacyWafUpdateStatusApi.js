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

/**
* LegacyWafUpdateStatus service.
* @module api/LegacyWafUpdateStatusApi
* @version 8.0.0
*/
export default class LegacyWafUpdateStatusApi {

    /**
    * Constructs a new LegacyWafUpdateStatusApi. 
    * @alias module:api/LegacyWafUpdateStatusApi
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
     * Get a specific update status object for a particular service and firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.update_status_id - Alphanumeric string identifying a WAF update status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getWafUpdateStatusWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'update_status_id' is set.
      if (options['update_status_id'] === undefined || options['update_status_id'] === null) {
        throw new Error("Missing the required parameter 'update_status_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'firewall_id': options['firewall_id'],
        'update_status_id': options['update_status_id']
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
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/wafs/{firewall_id}/update_statuses/{update_status_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific update status object for a particular service and firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.update_status_id - Alphanumeric string identifying a WAF update status.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getWafUpdateStatus(options = {}) {
      return this.getWafUpdateStatusWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all update statuses for a particular service and firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `waf`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listWafUpdateStatusesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'firewall_id': options['firewall_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/wafs/{firewall_id}/update_statuses', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all update statuses for a particular service and firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `waf`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listWafUpdateStatuses(options = {}) {
      return this.listWafUpdateStatusesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
