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
import WafSimulateRequest from '../model/WafSimulateRequest';
import WafSimulateResponse from '../model/WafSimulateResponse';

/**
* NgwafSimulate service.
* @module api/NgwafSimulateApi
* @version 16.0.0
*/
export default class NgwafSimulateApi {

    /**
    * Constructs a new NgwafSimulateApi. 
    * @alias module:api/NgwafSimulateApi
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
     * Simulates a request through the workspace's WAF configuration and returns the WAF response code and any signals that would be detected. The operation is stateless — no simulation data is persisted. 
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the workspace.
     * @param {module:model/WafSimulateRequest} options.waf_simulate_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafSimulateResponse} and HTTP response
     */
    ngwafSimulateWafRequestWithHttpInfo(options = {}) {
      let postBody = options['waf_simulate_request'];
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'waf_simulate_request' is set.
      if (options['waf_simulate_request'] === undefined || options['waf_simulate_request'] === null) {
        throw new Error("Missing the required parameter 'waf_simulate_request'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = WafSimulateResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ngwaf/v1/workspaces/{workspace_id}/simulate', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Simulates a request through the workspace's WAF configuration and returns the WAF response code and any signals that would be detected. The operation is stateless — no simulation data is persisted. 
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the workspace.
     * @param {module:model/WafSimulateRequest} options.waf_simulate_request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafSimulateResponse}
     */
    ngwafSimulateWafRequest(options = {}) {
      return this.ngwafSimulateWafRequestWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
