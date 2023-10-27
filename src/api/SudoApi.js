/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import SudoGenericTokenError from '../model/SudoGenericTokenError';
import SudoRequest from '../model/SudoRequest';
import SudoResponse from '../model/SudoResponse';

/**
* Sudo service.
* @module api/SudoApi
* @version 6.2.1
*/
export default class SudoApi {

    /**
    * Constructs a new SudoApi. 
    * @alias module:api/SudoApi
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
     * Re-authenticate to allow the provided user to obtain sudo access.
     * @param {Object} options
     * @param {module:model/SudoRequest} [options.sudo_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SudoResponse} and HTTP response
     */
    requestSudoAccessWithHttpInfo(options = {}) {
      let postBody = options['sudo_request'];

      let pathParams = {
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
      let accepts = ['application/vnd.api+json', 'application/problem+json'];
      let returnType = SudoResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/sudo', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Re-authenticate to allow the provided user to obtain sudo access.
     * @param {Object} options
     * @param {module:model/SudoRequest} [options.sudo_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SudoResponse}
     */
    requestSudoAccess(options = {}) {
      return this.requestSudoAccessWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
