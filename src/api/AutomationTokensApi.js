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
import AutomationTokenCreateRequest from '../model/AutomationTokenCreateRequest';
import AutomationTokenCreateResponse from '../model/AutomationTokenCreateResponse';
import AutomationTokenResponse from '../model/AutomationTokenResponse';
import ErrorResponse from '../model/ErrorResponse';
import InlineResponse2001 from '../model/InlineResponse2001';

/**
* AutomationTokens service.
* @module api/AutomationTokensApi
* @version 7.0.0
*/
export default class AutomationTokensApi {

    /**
    * Constructs a new AutomationTokensApi. 
    * @alias module:api/AutomationTokensApi
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
     * Creates a new automation token.
     * @param {Object} options
     * @param {module:model/AutomationTokenCreateRequest} [options.automation_token_create_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationTokenCreateResponse} and HTTP response
     */
    createAutomationTokenWithHttpInfo(options = {}) {
      let postBody = options['automation_token_create_request'];

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
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = AutomationTokenCreateResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/automation-tokens', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates a new automation token.
     * @param {Object} options
     * @param {module:model/AutomationTokenCreateRequest} [options.automation_token_create_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationTokenCreateResponse}
     */
    createAutomationToken(options = {}) {
      return this.createAutomationTokenWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieves an automation token by ID.
     * @param {Object} options
     * @param {String} options.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutomationTokenResponse} and HTTP response
     */
    getAutomationTokenIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }

      let pathParams = {
        'id': options['id']
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
      let accepts = ['application/vnd.api+json', 'application/problem+json'];
      let returnType = AutomationTokenResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/automation-tokens/{id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieves an automation token by ID.
     * @param {Object} options
     * @param {String} options.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutomationTokenResponse}
     */
    getAutomationTokenId(options = {}) {
      return this.getAutomationTokenIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List of services associated with the automation token.
     * @param {Object} options
     * @param {String} options.id
     * @param {Number} [options.per_page]
     * @param {Number} [options.page]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    getAutomationTokensIdServicesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }

      let pathParams = {
        'id': options['id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'per_page': options['per_page'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json', 'application/problem+json'];
      let returnType = InlineResponse2001;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/automation-tokens/{id}/services', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List of services associated with the automation token.
     * @param {Object} options
     * @param {String} options.id
     * @param {Number} [options.per_page]
     * @param {Number} [options.page]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    getAutomationTokensIdServices(options = {}) {
      return this.getAutomationTokensIdServicesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Lists all automation tokens for a customer.
     * @param {Object} options
     * @param {Number} [options.per_page]
     * @param {Number} [options.page]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutomationTokenResponse>} and HTTP response
     */
    listAutomationTokensWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'per_page': options['per_page'],
        'page': options['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json', 'application/problem+json'];
      let returnType = [AutomationTokenResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/automation-tokens', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Lists all automation tokens for a customer.
     * @param {Object} options
     * @param {Number} [options.per_page]
     * @param {Number} [options.page]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutomationTokenResponse>}
     */
    listAutomationTokens(options = {}) {
      return this.listAutomationTokensWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Revoke an automation token by ID.
     * @param {Object} options
     * @param {String} options.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ErrorResponse} and HTTP response
     */
    revokeAutomationTokenIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'id' is set.
      if (options['id'] === undefined || options['id'] === null) {
        throw new Error("Missing the required parameter 'id'.");
      }

      let pathParams = {
        'id': options['id']
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
      let accepts = ['application/vnd.api+json', 'application/problem+json'];
      let returnType = ErrorResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/automation-tokens/{id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Revoke an automation token by ID.
     * @param {Object} options
     * @param {String} options.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ErrorResponse}
     */
    revokeAutomationTokenId(options = {}) {
      return this.revokeAutomationTokenIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
